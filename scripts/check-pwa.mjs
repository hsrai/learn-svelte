import { existsSync, readFileSync } from 'node:fs'
import { basename, resolve } from 'node:path'

const outputDirectory = resolve('dist')
const manifestPath = resolve(outputDirectory, 'manifest.webmanifest')
const workerPath = resolve(outputDirectory, 'sw.js')
const indexPath = resolve(outputDirectory, 'index.html')

for (const path of [manifestPath, workerPath, indexPath]) {
  if (!existsSync(path)) {
    throw new Error(`Missing production PWA file: ${path}`)
  }
}

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
const requiredMembers = ['name', 'start_url', 'display', 'icons']

for (const member of requiredMembers) {
  if (!manifest[member]) {
    throw new Error(`Manifest is missing required member: ${member}`)
  }
}

for (const size of ['192x192', '512x512']) {
  const icon = manifest.icons.find((candidate) => candidate.sizes === size)

  if (!icon || !existsSync(resolve(outputDirectory, icon.src))) {
    throw new Error(`Manifest icon is missing: ${size}`)
  }
}

const worker = readFileSync(workerPath, 'utf8')
const index = readFileSync(indexPath, 'utf8')
const productionAssets = [...index.matchAll(/(?:src|href)="([^"]+\.(?:js|css))"/g)]
  .map((match) => basename(match[1]))

for (const asset of productionAssets) {
  if (!worker.includes(asset)) {
    throw new Error(`Service worker does not precache production asset: ${asset}`)
  }
}

console.log(`PWA check passed: ${productionAssets.length} production assets are precached.`)

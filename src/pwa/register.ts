import { registerSW } from 'virtual:pwa-register'

export function registerPWA() {
  if (!import.meta.env.PROD) return

  let updateServiceWorker: (reloadPage?: boolean) => Promise<void>

  updateServiceWorker = registerSW({
    onNeedRefresh() {
      const accepted = window.confirm(
        'A new version of Theme Studio is available. Reload now?'
      )

      if (accepted) {
        void updateServiceWorker(true)
      }
    },
    onRegisterError(error) {
      console.error('Service worker registration failed:', error)
    },
  })
}

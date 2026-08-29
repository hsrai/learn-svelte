import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import { registerPWA } from './pwa/register'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app

registerPWA()

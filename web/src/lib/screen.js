// stores/screen.js
import { writable } from 'svelte/store'

const isPC = writable(false)

export function setScreen() {
  isPC.set(window.innerWidth > 1079)
}
export const popup = writable(false)

export function setPopup(obj = { type: '', data: {} }) {
  popup.set(obj)
}

let output
export default output

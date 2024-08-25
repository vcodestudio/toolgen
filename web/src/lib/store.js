// src/lib/store.js

import { writable } from 'svelte/store'

export const hHeight = writable(0)
export const isLoading = writable(false)

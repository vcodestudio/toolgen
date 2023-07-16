// hooks/preprocess.js

import { onMount } from 'svelte'
const mWidth = 1080
export function mclass(node, classes) {
  const cls = classes.split(' ')
  function updateClass() {
    if (window.innerWidth < mWidth) {
      node.classList.add(...cls)
    } else {
      node.classList.remove(...cls)
    }
  }
  onMount(() => {
    updateClass()
    window.addEventListener('resize', updateClass)
    return () => window.removeEventListener('resize', updateClass)
  })
}

export function mclassGlobal(node) {
  console.log('ddd')
}

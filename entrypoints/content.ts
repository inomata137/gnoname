import { browser } from 'wxt/browser'

import { CONTENT_SCRIPT_MATCH_PATTERN } from '@/constant'

import { STORAGE_KEY } from './constant'

export default defineContentScript({
  matches: [CONTENT_SCRIPT_MATCH_PATTERN],
  main() {
    browser.storage.local.get(STORAGE_KEY, (items) => {
      const opacity = items[STORAGE_KEY]
      if (opacity) {
        applyOpacity(String(opacity))
      }
    })

    browser.storage.local.onChanged.addListener((changes) => {
      if (changes.opacity) {
        applyOpacity(String(changes.opacity.newValue))
      }
    })
  },
})

const VARS_INJECTOR_NAME = 'gnoname-vars-injector'

function applyOpacity(value: string) {
  let styleEl = document.getElementById(VARS_INJECTOR_NAME)

  if (!styleEl) {
    styleEl = document.createElement('style')
    styleEl.id = VARS_INJECTOR_NAME
    document.head.appendChild(styleEl)
  }

  styleEl.textContent = `.kix-cursor-name { --gnoname-opacity: ${value}; }`
}

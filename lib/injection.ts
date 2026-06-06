const VARS_INJECTOR_NAME = 'gnoname-vars-injector'

export function applyOpacity(value: number) {
  if (isNaN(value)) {
    return
  }
  let styleEl = document.getElementById(VARS_INJECTOR_NAME)

  if (!styleEl) {
    styleEl = document.createElement('style')
    styleEl.id = VARS_INJECTOR_NAME
    document.head.appendChild(styleEl)
  }

  styleEl.textContent = `.kix-cursor-name { --gnoname-opacity: ${value}; }`
}

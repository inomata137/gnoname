const STORAGE_KEY = 'opacity'

const DEFAULT_OPACITY = 0.3

export const getOpacity = async (): Promise<number> => {
  const { [STORAGE_KEY]: opacity } = await browser.storage.local.get(STORAGE_KEY)
  switch (typeof opacity) {
    case 'number':
      return opacity
    case 'string':
      return parseFloat(opacity)
    default:
      return DEFAULT_OPACITY
  }
}

export const saveOpacity = async (opacity: number) => {
  await browser.storage.local.set({
    [STORAGE_KEY]: opacity,
  })
}

export const onStorageChanged = (callback: (opacity: number) => void) => {
  browser.storage.local.onChanged.addListener((changes) => {
    const newOpacity = changes[STORAGE_KEY]?.newValue
    switch (typeof newOpacity) {
      case 'number':
        return callback(newOpacity)
      case 'string':
        return callback(parseFloat(newOpacity))
      default:
        return
    }
  })
}

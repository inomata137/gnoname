import { CONTENT_SCRIPT_MATCH_PATTERN } from '@/constant'
import { applyOpacity } from '@/lib/injection'
import { getOpacity, onStorageChanged } from '@/lib/storage'

export default defineContentScript({
  matches: [CONTENT_SCRIPT_MATCH_PATTERN],
  async main() {
    const opacity = await getOpacity()
    applyOpacity(opacity)

    onStorageChanged(applyOpacity)
  },
})

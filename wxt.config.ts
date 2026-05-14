import { defineConfig } from 'wxt'

import { CONTENT_SCRIPT_MATCH_PATTERN } from './constant'

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    permissions: ['storage'],
  },
  hooks: {
    'build:manifestGenerated': (_, manifest) => {
      manifest.content_scripts ??= []
      manifest.content_scripts.push({
        css: ['content-scripts/style.css'],
        matches: [CONTENT_SCRIPT_MATCH_PATTERN],
      })
    },
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { NuxtOptions } from 'nuxt'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: false },
  build: {
    transpile: [/'vuetify'/],
  },
  modules: [
    (_options: any, nuxt: NuxtOptions) => {
      nuxt.hooks.hook('vite:extendConfig', (config: any) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],
  css: [
    '~/node_modules/claymorphism-css/dist/clay.css',
    '~/assets/css/main.css',
    // その他のCSSファイル
  ],
  app: {
    // buildAssetsDir: '/assets/',
    router: {
      base: '/hirakoameko/',
      cdnURL: '/hirakoameko/',
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  components: [
    {
      path: '~/components',
      extensions: ['.vue']
    }
  ],
  plugins: [
    '~/plugins/vue-tweet-embed.ts',
    // '~/plugins/vuetify.ts',
  ],
  buildModules: [
    // その他のモジュール...
    '@nuxtjs/vuetify',
  ],
  router: {
    base:'/hirakoameko',
  }
})

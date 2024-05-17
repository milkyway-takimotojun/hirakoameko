// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: false },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  css: [
    '~/node_modules/claymorphism-css/dist/clay.css',
    '~/assets/css/main.css',
    // その他のCSSファイル
  ],
  app:{
    router:{
      base: '/hirakoameko/'
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  components:[
    {
      path: '~/components',
      extensions:['.vue']
    }
  ],
  plugins:[
    '~/plugins/vue-tweet-embed.ts',
    // '~/plugins/vuetify.ts',
  ],
  buildModules: [
    // その他のモジュール...
    '@nuxtjs/vuetify',
  ],
})

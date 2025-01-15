import withNuxt from "./.nuxt/eslint.config.mjs"
import eslintPluginTailwind from "eslint-plugin-tailwindcss"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

export default withNuxt([
  {
    plugins: [eslintPluginTailwind],
    rules: {
      "vue/require-default-prop": "off",
      "vue/padding-line-between-tags": "warn",
      "vue/padding-line-between-blocks": "error",
    },
  },
  eslintPluginPrettierRecommended,
])

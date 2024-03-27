module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [ '@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended', '@typescript-eslint' ],
  rules: {
    'no-console': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off'
  }
}
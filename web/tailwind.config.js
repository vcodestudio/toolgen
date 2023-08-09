/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      pc: '1281px',
      m: { max: '1280px' },
      phone: { max: '740px' },
      p: { max: '740px' },
    },
  },
  plugins: [
    require('tailwindcss/plugin')(function ({ addVariant }) {
      addVariant('em', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.em\\:${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.value = decl.value.replace('rem', 'em')
          })
        })
      })
    }),
  ],
}

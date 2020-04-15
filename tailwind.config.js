module.exports = {
  theme: {
    extend: {
      spacing: {
        '2px': '2px',
        7: '1.75rem',
        9: '2.25rem',
        14: '56px',
        18: '71px',
        122: '122px',
        138: '138px',
        150: '150px',
        245: '245px',
        400: '400px',
        72: '18rem',
        80: '20rem',
      },
      padding: {
        '5/6': '83.3333333%',
      },
      borderRadius: {
        tg: '22px',
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(66, 123, 225, 0.25)',
      },
      colors: {
        vknav: '#4a76a8',
        vkbody: '#edeef0',
        overlight: '#383B40',
        overdark: '#2D2F34',
        surface: '#27292D',
        sbase: '#1F2023',
        sover: '#010101',
        tgreen: '#33d684',
        tgblue: '#32afed',
        tgtblue: '#0088cc',
        thgreen: '#28c979',
        bins: '#fafafa',
        emo: '#ccd69e2e',
        emoh: '#d69e2e',
        orabase: '#e64415',
        peri: '#db1e37',
        background: {
          primary: 'var(--bg-background-primary)',
          secondary: 'var(--bg-background-secondary)',
          tertiary: 'var(--bg-background-tertiary)',
          quaternary: 'var(--bg-background-quaternary)',
        },
        copy: {
          primary: 'var(--text-copy-primary)',
          secondary: 'var(--text-copy-secondary)',
        },
        'border-color': {
          primary: 'var(--border-border-color-primary)',
        },
      },
    },
    customForms: (theme) => ({
      default: {
        input: {
          borderRadius: theme('borderRadius.lg'),
          '&:focus': {
            backgroundColor: theme('colors.white'),
          },
        },
        select: {
          lineHeight: theme('lineHeight.snug'),
          borderColor: 'transparent',
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.700'),
          boxShadow: theme('boxShadow.default'),
          icon: '<svg fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>',
        },
        checkbox: {
          borderColor: 'transparent',
          width: theme('spacing.6'),
          height: theme('spacing.6'),
          backgroundColor: theme('colors.gray.900'),
          focusBorderColor: 'transparent',
          focusShadow: 'none',
        },
        radio: {
          borderColor: 'transparent',
          width: theme('spacing.6'),
          height: theme('spacing.6'),
          backgroundColor: theme('colors.gray.900'),
          focusBorderColor: 'transparent',
          focusShadow: 'none',
        },
      },
    }),
  },
  variants: {},
  plugins: [
    '@tailwindcss/custom-forms',
  ],
};

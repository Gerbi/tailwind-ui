module.exports = {
  theme: {
    extend: {
      spacing: {
        '2px': '2px',
        '7': '1.75rem',
        '9': '2.25rem',
        '122': '122px',
        '150': '150px',
        '72': '18rem',
        '80': '20rem',
      },
      padding: {
        '5/6': '83.3333333%',
      },
      borderRadius: {
        tg: '22px',
      },
      boxShadow: {
        'outline': '0 0 0 3px rgba(66, 123, 225, 0.25)',
      },
      fontFamily: {
        'sans': 'Roboto, sans-serif',
      },
      colors: {
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
      },
    },
    customForms: theme => ({
      default: {
        input: {
          borderRadius: theme('borderRadius.lg'),
          '&:focus': {
            backgroundColor: theme('colors.white'),
          }
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
          focusShadow: 'none'
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
    transform: { // defaults to this value
      'none': 'none',
    },
    transformOrigin: { // defaults to these values
      't': 'top',
      'tr': 'top right',
      'r': 'right',
      'br': 'bottom right',
      'b': 'bottom',
      'bl': 'bottom left',
      'l': 'left',
      'tl': 'top left',
    },
    translate: { // defaults to {}
      '1/2': '50%',
      'full': '100%',
      'right-up': ['100%', '-100%'],
      '3d': ['40px', '-60px', '-130px'],
    },
    scale: { // defaults to {}
      '90': '0.9',
      '100': '1',
      '110': '1.1',
      '-100': '-1',
      'stretched-x': ['2', '0.5'],
      'stretched-y': ['0.5', '2'],
      '3d': ['0.5', '1', '2'],
    },
    rotate: { // defaults to {}
      '90': '90deg',
      '180': '180deg',
      '270': '270deg',
      '3d': ['0', '1', '0.5', '45deg'],
    },
    skew: { // defaults to {}
      '-5': '-5deg',
      '5': '5deg',
    },
    perspective: { // defaults to {}
      'none': 'none',
      '250': '250px',
      '500': '500px',
      '750': '750px',
      '1000': '1000px',
    },
    perspectiveOrigin: { // defaults to these values
      't': 'top',
      'tr': 'top right',
      'r': 'right',
      'br': 'bottom right',
      'b': 'bottom',
      'bl': 'bottom left',
      'l': 'left',
      'tl': 'top left',
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}

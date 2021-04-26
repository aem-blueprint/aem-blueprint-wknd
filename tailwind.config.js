const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const { readFileSync } = require('fs');
const { resolve } = require('path');

const rootColors = {
  'light': {
    ':root': {
      'text': 'rgb(40,49,67)',
      'text-hover': 'rgb(21,26,35)',
      'text-muted': 'rgb(55, 55, 55)',
      'text-accent': 'rgb(225,225,225)',
      'text-accent-hover': 'rgb(246,248,244)',
      'fill': 'rgb(255,255,255)',
      'fill-hover': 'rgb(236,238,244)',
      'fill-muted': 'rgb(121, 164, 224)',
      'fill-accent': 'rgb(66,137,236)',
      'fill-accent-hover': 'rgb(62,119,200)',
    },
    'brand': { // Brand Colors are available within the UI for configuration
      'primary': {
        'fill': '',
        'fill-hover': '',
        'fill-accent': '',
        'fill-accent-hover': '',
        'text': '',
        'text-hover': '',
        'text-accent': '',
        'text-accent-hover': '',
      },
      'secondary': {
        'fill': '',
        'fill-hover': '',
        'fill-accent': '',
        'fill-accent-hover': '',
        'text': '',
        'text-hover': '',
        'text-accent': '',
        'text-accent-hover': '',
      },
      'muted': {
        'fill': '',
        'fill-hover': '',
        'fill-accent': '',
        'fill-accent-hover': '',
        'text': '',
        'text-hover': '',
        'text-accent': '',
        'text-accent-hover': '',
      },
      'light': { // Or is this just the root values?
        'fill': '',
        'fill-hover': '',
        'text': '',
        'text-hover': '',
      }, 
      'dark': { // Or is this just the root values?
        'fill': '',
        'fill-hover': '',
        'text': '',
        'text-hover': '',
      },
    },
    // UI Colors are used in within the UI but cannot be selected by the authors
    // UI Colors can be used within the UI and might be mixed with Brand Colors, so they should be neutral and usable
    'ui': { 
      'danger': {
        'fill': '',
        'fill-hover': '',
        'text': '',
        'text-hover': '',
      },
      'dark': {
        'fill': '',
        'fill-hover': '',
        'text': '',
        'text-hover': '',
      },
      'info': {
        'fill': '',
        'fill-hover': '',
        'text': '',
        'text-hover': '',
      },
      'light': {
        'fill': '',
        'fill-hover': '',
        'text': '',
        'text-hover': '',
      },
      'success': {
        'fill': '',
        'fill-hover': '',
        'text': '',
        'text-hover': '',
      },
      'warning': {
        'fill': '',
        'fill-hover': '',
        'text': '',
        'text-hover': '',
      },
    }
  },
  'dark': {
    ':root': {
      'text': 'rgb(225,225,225)',
      'text-hover': 'rgb(246,248,244)',
      'text-muted': 'rgb(121, 164, 224)',
      'text-accent': 'rgb(225,225,225)',
      'text-accent-hover': 'rgb(246,248,244)',
      'fill': 'rgb(32, 32, 32)',
      'fill-hover': 'rgb(28, 28, 28)',
      'fill-muted': 'rgb(121, 164, 224)',
      'fill-accent': 'rgb(66,137,236)',
      'fill-accent-hover': 'rgb(62,119,200)',
    },
  },
  'primary': {
    'text': 'rgb(225,225,225)',
    'text-hover': 'rgb(246,248,244)',
    'fill': 'rgb(255, 234, 0)',
    'fill-hover': 'rgb(255, 234, 0)',
  },
  'secondary': {
    'text': 'rgb(194, 202, 219)',
    'text-hover': 'rgb(210, 216, 228)',
    'fill': 'rgb(40, 49, 67)',
    'fill-hover': 'rgb(29, 37, 50)',
  }
}
module.exports = {
  mode: 'jit',
  darkMode: false, 
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      gridTemplateColumns: {
        '25-75': 'calc(25% - (var(--gap) / 2)) calc(75% - (var(--gap) / 2))',
        '75-25': 'calc(75% - (var(--gap) / 2)) calc(25% - (var(--gap) / 2))',
        '33-66': 'calc(33% - (var(--gap) / 2)) calc(66% - (var(--gap) / 2))',
        '66-33': 'calc(66% - (var(--gap) / 2)) calc(33% - (var(--gap) / 2))',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            p: {
              lineHeight: '2.5',
              fontSize: '1.125rem',
            },
            blockquote: {
              fontSize: '2rem',
              fontFamily: 'Asar',
              paddingLeft: 0,
              border: 'none',
              fontStyle: 'normal',
              margin: 0,
            }
          }
        }
      },
      backgroundColor: {
        'text': 'var(--color-text)',
        'text-hover': 'var(--color-text-hover)',
        'text-muted': 'var(--color-text-muted)',
        'text-accent': 'var(--color-text-accent)',
        'text-accent-hover': 'var(--color-text-accent-hover)',
        'fill': 'var(--color-fill)',
        'fill-hover': 'var(--color-fill-hover)',
        'fill-muted': 'var(--color-muted)',
        'fill-accent': 'var(--color-fill-accent)',
        'fill-accent-hover': 'var(--color-fill-accent-hover)',
        'white': 'rgb(255,255,255)',
        'light-gray': 'rgba(0,0,0,.125)',
        'black': 'rgb(0,0,0)',
        'section-header': '#e7f1fd',
      },
      boxShadow: {
        'floating': '0 0px 50px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)',
      },
      textColor: {
        DEFAULT: 'var(--color-text)',
        'text': 'var(--color-text)',
        'text-hover': 'var(--color-text-hover)',
        'text-muted': 'var(--color-text-muted)',
        'text-accent': 'var(--color-text-accent)',
        'text-accent-hover': 'var(--color-text-accent-hover)',
        'fill': 'var(--color-fill)',
        'fill-hover': 'var(--color-fill-hover)',
        'fill-muted': 'var(--color-muted)',
        'fill-accent': 'var(--color-fill-accent)',
        'fill-accent-hover': 'var(--color-fill-accent-hover)',
        'white': 'rgb(255,255,255)',
        'black': 'rgb(0,0,0)',
        'transparent': 'transparent',
        'section-header': '#106eea',
      },
      divideColor: {
        DEFAULT: 'var(--color-text)',
        'text': 'var(--color-text)',
        'text-hover': 'var(--color-text-hover)',
        'text-muted': 'var(--color-text-muted)',
        'text-accent': 'var(--color-text-accent)',
        'text-accent-hover': 'var(--color-text-accent-hover)',
        'fill': 'var(--color-fill)',
        'fill-hover': 'var(--color-fill-hover)',
        'fill-muted': 'var(--color-muted)',
        'fill-accent': 'var(--color-fill-accent)',
        'fill-accent-hover': 'var(--color-fill-accent-hover)',
        'white': 'rgb(255,255,255)',
        'black': 'rgb(0,0,0)',
      },
      borderColor: {
        DEFAULT: 'var(--color-text)',
        'text': 'var(--color-text)',
        'text-hover': 'var(--color-text-hover)',
        'text-muted': 'var(--color-text-muted)',
        'text-accent': 'var(--color-text-accent)',
        'text-accent-hover': 'var(--color-text-accent-hover)',
        'fill': 'var(--color-fill)',
        'fill-hover': 'var(--color-fill-hover)',
        'fill-muted': 'var(--color-muted)',
        'fill-accent': 'var(--color-fill-accent)',
        'fill-accent-hover': 'var(--color-fill-accent-hover)',
        'white': 'rgb(255,255,255)',
        'black': 'rgb(0,0,0)',
      },
      ringColor: {
        DEFAULT: 'var(--color-fill-accent)',
      },
      transitionDelay: {
        400: '400ms',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
    colors: {
      'high-contrast-light': {},
      light: {
        ':root': rootColors.light[':root'],
        primary: {
          DEFAULT: 'rgb(66, 137, 236)',
          inverted: 'rgb(235,235,235)',
          hover: 'rgb(62, 119, 200)',
          'inverted-hover': 'rgb(255,255,255)',

          'text': 'rgb(35, 35, 35)',
          'text-hover': 'rgb(55, 55, 55)',
          'text-muted': 'rgb(21, 64, 24)',
          'text-accent': 'rgb(235, 235, 235)',
          'text-accent-hover': 'rgb(255, 255, 255)',
          'fill': 'rgb(255, 234, 0)',
          'fill-hover': 'rgb(255, 234, 0)',
          'fill-muted': 'rgb(121, 164, 224)',
          'fill-accent': rootColors.secondary.fill,
          'fill-accent-hover': rootColors.secondary['fill-hover'],
        },
        secondary: {
          DEFAULT: 'rgb(40,49,67)',
          inverted: 'rgb(194,202,219)',
          hover: 'rgb(21,26,35)',
          'inverted-hover': 'rgb(210,216,228)',

          'text': 'rgb(194, 202, 219)',
          'text-hover': 'rgb(210, 216, 228)',
          'text-muted': 'rgb(121, 164, 224)',
          'fill': 'rgb(40, 49, 67)',
          'fill-hover': 'rgb(29, 37, 50)',
          'fill-muted': 'rgb(121, 164, 224)',
          'fill-accent': rootColors.primary.fill,
          'fill-accent-hover': rootColors.primary['fill-hover'],
        },
        success: {
          DEFAULT: colors.green['500'],
          inverted: 'rgb(255,255,255)',
          hover: colors.green['800'],
          'inverted-hover': 'rgb(235,235,235)',

          'text': 'rgb(235, 235, 235)',
          'text-hover': 'rgb(255, 255, 255)',
          'text-muted': 'rgb(121, 164, 224)',
          'text-accent': 'rgb(235, 235, 235)',
          'text-accent-hover': 'rgb(255, 255, 255)',
          'fill': colors.green['500'],
          'fill-hover': colors.green['600'],
          'fill-muted': colors.green['400'],
          'fill-accent': 'rgb(40,49,67)',
          'fill-accent-hover': 'rgb(56,60,69)',
        },
        danger: {
          DEFAULT: colors.red['500'],
          inverted: 'rgb(255,255,255)',
          hover: colors.red['800'],
          'inverted-hover': 'rgb(235,235,235)',

          'text': 'rgb(235, 235, 235)',
          'text-hover': 'rgb(255, 255, 255)',
          'text-muted': 'rgb(121, 164, 224)',
          'text-accent': 'rgb(235, 235, 235)',
          'text-accent-hover': 'rgb(255, 255, 255)',
          'fill': colors.red['500'],
          'fill-hover': colors.red['600'],
          'fill-muted': colors.red['400'],
          'fill-accent': 'rgb(40,49,67)',
          'fill-accent-hover': 'rgb(56,60,69)',
        },
        warning: {
          DEFAULT: colors.yellow['200'],
          inverted: 'rgb(30,30,30)',
          hover: colors.yellow['400'],
          'inverted-hover': 'rgb(10,10,10)',

          'text': 'rgb(40,49,67)',
          'text-hover': 'rgb(21,26,35)',
          'text-muted': 'rgb(121, 164, 224)',
          'text-accent': 'rgb(40,49,67)',
          'text-accent-hover': 'rgb(21,26,35)',
          'fill': colors.yellow['200'],
          'fill-hover': colors.yellow['400'],
          'fill-muted': colors.yellow['100'],
          'fill-accent': 'rgb(40,49,67)',
          'fill-accent-hover': 'rgb(56,60,69)',
        },
        info: {
          DEFAULT: colors.purple['400'],
          inverted: 'rgb(255,255,255)',
          hover: colors.purple['800'],
          'inverted-hover': 'rgb(235,235,235)',

          'text': 'rgb(235, 235, 235)',
          'text-hover': 'rgb(255, 255, 255)',
          'text-muted': 'rgb(121, 164, 224)',
          'text-accent': 'rgb(235, 235, 235)',
          'text-accent-hover': 'rgb(255, 255, 255)',
          'fill': colors.purple['500'],
          'fill-hover': colors.purple['600'],
          'fill-muted': colors.purple['400'],
          'fill-accent': 'rgb(40,49,67)',
          'fill-accent-hover': 'rgb(56,60,69)',
        },
        light: {
          DEFAULT: 'rgb(236, 238, 243)',
          inverted: 'rgb(40,49,67)',
          hover: 'rgb(204, 211, 224)',
          'inverted-hover': 'rgb(21,26,35)',

          'text': 'rgb(40,49,67)',
          'text-hover': 'rgb(21,26,35)',
          'text-muted': 'rgb(121, 164, 224)',
          'text-accent': 'rgb(40,49,67)',
          'text-accent-hover': 'rgb(21,26,35)',
          'fill': 'rgb(246, 249, 254)',
          'fill-hover': 'rgb(204, 211, 224)',
          'fill-muted': 'rgb(236, 238, 243)',
          'fill-accent': 'rgb(40,49,67)',
          'fill-accent-hover': 'rgb(56,60,69)',
        },
        dark: {
          DEFAULT: 'rgb(37, 73, 123)',
          inverted: 'rgb(250, 252, 255)',
          hover: 'rgb(30, 64, 113)',
          'inverted-hover': 'rgb(255, 255, 255)',

          'text': 'rgb(235, 235, 235)',
          'text-hover': 'rgb(255, 255, 255)',
          'text-muted': 'rgb(121, 164, 224)',
          'text-accent': 'rgb(235, 235, 235)',
          'text-accent-hover': 'rgb(255, 255, 255)',
          'fill': 'rgb(37, 73, 123)',
          'fill-hover': 'rgb(30, 64, 113)',
          'fill-muted': 'rgb(30, 64, 113)',
          'fill-accent': 'rgb(40,49,67)',
          'fill-accent-hover': 'rgb(56,60,69)',
        },
        link: {
          DEFAULT: colors.blue['600'],
          inverted: 'rgb(255,255,255)',
          hover: colors.blue['800'],
          'inverted-hover': 'rgb(235,235,235)',

          'text': 'rgb(40,49,67)',
          'text-hover': 'rgb(56,60,69)',
          'text-muted': 'rgb(121, 164, 224)',
          'text-accent': 'rgb(235, 235, 235)',
          'text-accent-hover': 'rgb(255, 255, 255)',
          'fill': 'rgb(37, 73, 123)',
          'fill-hover': 'rgb(30, 64, 113)',
          'fill-muted': 'rgb(30, 64, 113)',
          'fill-accent': 'rgb(40,49,67)',
          'fill-accent-hover': 'rgb(56,60,69)',
        },
        white: {
          DEFAULT: 'white',
          inverted: 'rgb(21,26,35)',
          hover: 'rgb(255,255,255)',
          'inverted-hover': 'rgb(2,2,3)',
          ...rootColors.light[':root']
        },
        black: {
          DEFAULT: 'rgb(30,30,30)',
          inverted: 'rgb(255,255,255)',
          hover: 'rgb(10,10,10)',
          'inverted-hover': 'rgb(235,235,235)',
          ...rootColors.dark[':root']
        },
        transparent: {
          DEFAULT: 'transparent',
          inverted: 'transparent',
          hover: 'transparent',
          'inverted-hover': 'transparent',
          'fill': 'transparent',
        },
        gray: {
          DEFAULT: colors.gray['400'],
          ...colors.gray,
        }
      },
      'high-contrast-dark': {},
      dark: {
        ':root': rootColors.dark[':root'],
        primary: {
          DEFAULT: 'rgb(66, 137, 236)',
          inverted: 'rgb(235,235,235)',
          hover: 'rgb(62, 119, 200)',
          'inverted-hover': 'rgb(255,255,255)',

          'text': 'rgb(235, 235, 235)',
          'text-hover': 'rgb(255, 255, 255)',
          'text-muted': 'rgb(121, 164, 224)',
          'fill': 'rgb(66, 137, 236)',
          'fill-hover': 'rgb(62, 119, 200)',
          'fill-muted': 'rgb(121, 164, 224)',
          'accent': 'rgb(40,49,67)',
          'accent-hover': 'rgb(56,60,69)',
        },
        secondary: {
          DEFAULT: 'rgb(40,49,67)',
          inverted: 'rgb(194,202,219)',
          hover: 'rgb(21,26,35)',
          'inverted-hover': 'rgb(210,216,228)',

          'text': 'rgb(194, 202, 219)',
          'text-hover': 'rgb(210, 216, 228)',
          'text-muted': 'rgb(121, 164, 224)',
          'fill': 'rgb(40, 49, 67)',
          'fill-hover': 'rgb(29, 37, 50)',
          'fill-muted': 'rgb(121, 164, 224)',
          'accent': 'rgb(66, 137, 236)',
          'accent-hover': 'rgb(62, 119, 200)',
        },

        success: {
          DEFAULT: colors.green['500'],
          inverted: 'rgb(255,255,255)',
          hover: colors.green['800'],
          'inverted-hover': 'rgb(235,235,235)',

          'text': 'rgb(235, 235, 235)',
          'text-hover': 'rgb(255, 255, 255)',
          'text-muted': 'rgb(121, 164, 224)',
          'fill': colors.green['500'],
          'fill-hover': colors.green['600'],
          'fill-muted': colors.green['400'],
          'accent': 'rgb(40,49,67)',
          'accent-hover': 'rgb(56,60,69)',
        },
        danger: {
          DEFAULT: colors.red['500'],
          inverted: 'rgb(255,255,255)',
          hover: colors.red['800'],
          'inverted-hover': 'rgb(235,235,235)',

          'text': 'rgb(235, 235, 235)',
          'text-hover': 'rgb(255, 255, 255)',
          'text-muted': 'rgb(121, 164, 224)',
          'fill': colors.red['500'],
          'fill-hover': colors.red['600'],
          'fill-muted': colors.red['400'],
          'accent': 'rgb(40,49,67)',
          'accent-hover': 'rgb(56,60,69)',
        },
        warning: {
          DEFAULT: colors.yellow['200'],
          inverted: 'rgb(30,30,30)',
          hover: colors.yellow['400'],
          'inverted-hover': 'rgb(10,10,10)',

          'text': 'rgb(40,49,67)',
          'text-hover': 'rgb(21,26,35)',
          'text-muted': 'rgb(121, 164, 224)',
          'fill': colors.yellow['200'],
          'fill-hover': colors.yellow['400'],
          'fill-muted': colors.yellow['100'],
          'accent': 'rgb(40,49,67)',
          'accent-hover': 'rgb(56,60,69)',
        },
        info: {
          DEFAULT: colors.purple['400'],
          inverted: 'rgb(255,255,255)',
          hover: colors.purple['800'],
          'inverted-hover': 'rgb(235,235,235)',

          'text': 'rgb(235, 235, 235)',
          'text-hover': 'rgb(255, 255, 255)',
          'text-muted': 'rgb(121, 164, 224)',
          'fill': colors.purple['500'],
          'fill-hover': colors.purple['600'],
          'fill-muted': colors.purple['400'],
          'accent': 'rgb(40,49,67)',
          'accent-hover': 'rgb(56,60,69)',
        },
        light: {
          DEFAULT: 'rgb(236, 238, 243)',
          inverted: 'rgb(40,49,67)',
          hover: 'rgb(204, 211, 224)',
          'inverted-hover': 'rgb(21,26,35)',

          'text': 'rgb(194, 202, 219)',
          'text-hover': 'rgb(210, 216, 228)',
          'text-muted': 'rgb(121, 164, 224)',
          'fill': 'rgb(18, 28, 48)',
          'fill-hover': 'rgb(27, 38, 60)',
          'fill-muted': 'rgb(19, 28, 45)',
          'accent': 'rgb(66, 137, 236)',
          'accent-hover': 'rgb(62, 119, 200)',
        },
        dark: {
          DEFAULT: 'rgb(37, 73, 123)',
          inverted: 'rgb(250, 252, 255)',
          hover: 'rgb(30, 64, 113)',
          'inverted-hover': 'rgb(255, 255, 255)',

          'text': 'rgb(235, 235, 235)',
          'text-hover': 'rgb(255, 255, 255)',
          'text-muted': 'rgb(121, 164, 224)',
          'fill': 'rgb(37, 73, 123)',
          'fill-hover': 'rgb(30, 64, 113)',
          'fill-muted': 'rgb(30, 64, 113)',
          'accent': 'rgb(40,49,67)',
          'accent-hover': 'rgb(56,60,69)',
        },
        link: {
          DEFAULT: colors.blue['600'],
          inverted: 'rgb(255,255,255)',
          hover: colors.blue['800'],
          'inverted-hover': 'rgb(235,235,235)',

          'text': 'rgb(40,49,67)',
          'text-hover': 'rgb(56,60,69)',
          'text-muted': 'rgb(121, 164, 224)',
          'fill': 'rgb(37, 73, 123)',
          'fill-hover': 'rgb(30, 64, 113)',
          'fill-muted': 'rgb(30, 64, 113)',
          'accent': 'rgb(40,49,67)',
          'accent-hover': 'rgb(56,60,69)',
        },
        white: {
          DEFAULT: 'white',
          inverted: 'rgb(21,26,35)',
          hover: 'rgb(255,255,255)',
          'inverted-hover': 'rgb(2,2,3)',
          ...rootColors.light[':root']
        },
        black: {
          DEFAULT: 'rgb(30,30,30)',
          inverted: 'rgb(255,255,255)',
          hover: 'rgb(10,10,10)',
          'inverted-hover': 'rgb(235,235,235)',
          ...rootColors.dark[':root']
        },
        transparent: {
          DEFAULT: 'transparent',
          inverted: 'transparent',
          hover: 'transparent',
          'inverted-hover': 'transparent',
        },
        gray: {
          DEFAULT: colors.gray['400'],
          ...colors.gray,
        }
      },
      transparent: {
        DEFAULT: 'transparent',
        inverted: 'transparent',
        hover: 'transparent',
        'inverted-hover': 'transparent',
      },
    },
    fontFamily: {
      'sans': ['Source Sans Pro', 'sans-serif'],
      'display': ['Asar', 'serif'],
    },
    screens: {
      'sm': {'max': '767px'},
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    icons: [
      'list',
      'x',
      'arrow-up',
      'arrow-right',
      'arrow-down',
      'arrow-left',
      'caret-up-fill',
      'caret-right-fill', 
      'caret-down-fill', 
      'caret-left-fill', 
      'chevron-up',
      'chevron-right', 
      'chevron-down', 
      'chevron-left', 
      'download',
      'file-arrow-down',
      'globe',
      'link',
      'link-45deg',
      'play-circle',
      'play-circle-fill',
      'plus',
      'dash',
      'search',
    ],
    spacing: () => {
      const styles = {};
      [0,'0.5',1,2,3,4,5,6,7,8,9,10,11,12,14,16,20,24,96,'px'].forEach(space => styles[space] = defaultTheme.spacing[space.toString()])
      return styles;
    },
  },
  variants: {
    extend: {
      alignItems: ['var'],
      backgroundColor: ['var','hover-var'],
      backgroundBlendMode: ['var'],
      borderRadius: ['var'],
      boxShadow: ['var'],
      flexDirection: ['var'],
      flexGrow: ['var'],
      flexWrap: ['var'],
      fontSize: ['var'],
      gap: ['var','parent-var'],
      gridTemplateColumns: ['var'],
      inset: ['active','hover','focus'],
      justifyContent: ['var'],
      maxWidth: ['var'],
      margin: ['var'],
      padding: ['var'],
      // space: ['var'],
      textAlign: ['var'],
      textColor: ['var','hover-var'],
      width: ['aem-GridColumn'],
      ringColor: ['active']
    },
  },
  plugins:  [
    require('@tailwindcss/typography'),
    // Icons
    plugin(({ addBase, theme }) => {
      const icons = theme('icons') || [];
      icons.forEach(icon => {
        const iconPath = resolve(process.cwd(),`./node_modules/bootstrap-icons/icons/${icon}.svg`);
        const svg = readFileSync(iconPath, 'utf-8').replace(/\n/g, "");
        addBase({ [`[class*=icon--${icon}]`]: { 'mask-image': `url('data:image/svg+xml,${svg}')` }});
      });
    }),
    // Create CSS Variables from configured variants
    plugin(({ addVariant, e }) => {
      const convertToVar = (container, separator, e, variant='var') => {
        container.walkRules(rule => {
          // Only escape the new addition because the second half is already escaped
          rule.selector = `.${e(`${variant}${separator}`)}${rule.selector.slice(1)}`
          rule.nodes.forEach(node => node.prop = node.prop.startsWith('--') ? node.prop : `--${variant.replace('var','')}${node.prop}`);
        });
      }
      addVariant('var', ({ separator, container }) => convertToVar(container, separator, e)); 
      addVariant('hover-var', ({ separator, container }) => convertToVar(container, separator, e, 'hover-var')); 
      addVariant('parent-var', ({ separator, container }) => convertToVar(container, separator, e, 'parent-var')); 
    }),
    // AEM Grid
    plugin(({ addBase, theme, e }) => {
      const generateGrid = (breakPoint) => {
        const gridClasses = {}
        for (let c = 1; c <= 12; c++) { 
          gridClasses[`.aem-GridColumn.aem-GridColumn--${breakPoint}--${c}`] = { width: `${(c / 12) * 100}%` }; 
          gridClasses[`.aem-GridColumn.aem-GridColumn--offset--${breakPoint}--${c}`] = { marginLeft: `${(c / 12) * 100}%` }; 
        }
        let styles = {
          [`.aem-GridColumn.aem-GridColumn--${breakPoint}--newline`]: { display: 'block', clear: 'both !important', },
          [`.aem-GridColumn.aem-GridColumn--${breakPoint}--none`]: { display: 'block', clear: 'none !important', float: 'left' },        
          [`.aem-GridColumn.aem-GridColumn--${breakPoint}--hide`]: { display: 'none' },
          ...gridClasses,
        }

        if (breakPoint === 'default') return styles;
        else {
          let bpValue = `min-width:${theme(`screens.${breakPoint}`)}`;
          if (typeof theme(`screens.${breakPoint}`) !== 'string') {
            let key = Object.keys(theme(`screens.${breakPoint}`))[0];
            let value = Object.values(theme(`screens.${breakPoint}`))[0];
            bpValue = `${key}-width:${value}`;
          }
          return { [`@media (${bpValue})`]: { ...styles } }
        }
      }

      addBase(generateGrid('default'))
      for (let screen in theme('screens')) { addBase(generateGrid(screen)) }
    }),
    // Colors -> CSS Vars
    plugin(({ addBase, theme }) => {
      for (let mode in theme('colors')) {
        let styles = { [`.${mode}`]: {}};
        for (let colorName in theme(`colors.${mode}`)) {
          let colors = {};
          for (let colorVariant in theme(`colors.${mode}.${colorName}`)) {
            colors[`--color-${colorVariant}`] = theme(`colors.${mode}.${colorName}.${colorVariant}`);
          }
          if (colorName === ':root') styles[`.${mode}`] = colors;
          else styles[`.${mode}`][`.${colorName}`] = colors;
        }
        addBase(styles);
      }
    }),
  ],
  purge: {
    enabled: true,
    content: [
      './src/template/policies.json',
      './src/components/**/**/*.js',
      './src/components/**/**/*.css',
      './src/site/js/*.js',
      './src/site/css/*.css',
      './tailwind.config.js',
    ],
    css: ['./src/main.css'],
    options: {
      safelist: [/^aem-GridColumn--/],
    }
  },
};

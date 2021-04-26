const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addBase, theme, e }) => {
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
});
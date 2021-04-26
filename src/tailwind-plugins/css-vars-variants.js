const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addVariant, e }) => {
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
});
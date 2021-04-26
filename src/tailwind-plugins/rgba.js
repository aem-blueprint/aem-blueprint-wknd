module.exports = (cssVariable, isColor) => {
  return ({ opacityValue }) => {
    const rgb = isColor ? cssVariable : `var(--${cssVariable})`;
    return opacityValue !== undefined ? `rgba(${rgb},${opacityValue})` : `rgb(${rgb})`;
  }
}
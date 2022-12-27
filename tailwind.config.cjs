/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        ...m3Color(),
      },
    },
  },
  plugins: [],
};

function m3Color() {
  const result = {};

  const rawColor = (color) => color;
  const onColor = (color) => `on-${color}`;
  const colorContainer = (color) => `${color}-container`;
  const onColorContainer = (color) => `on-${color}-container`;
  const colorVariant = (color) => `${color}-variant`;
  const onColorVariant = (color) => `on-${color}-variant`;

  for (const color of ['primary', 'secondary', 'tertiary', 'error']) {
    for (const mod of [rawColor, onColor, colorContainer, onColorContainer])
      result[mod(color)] = `var(--md-sys-color-${mod(color)})`;
  }

  for (const mod of [rawColor, onColor])
    result[mod('background')] = `var(--md-sys-color-${mod('background')})`;

  for (const mod of [rawColor, colorVariant])
    result[mod('outline')] = `var(--md-sys-color-${mod('outline')})`;

  for (const mod of [rawColor, colorVariant, onColorVariant])
    result[mod('surface')] = `var(--md-sys-color-${mod('surface')})`;

  return result;
}

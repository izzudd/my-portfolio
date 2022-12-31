import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme as useTheme,
  themeFromImage,
  type Theme,
} from '@material/material-color-utilities';

export async function applyTheme(source: number | string | HTMLImageElement) {
  let theme: Theme;
  if (source instanceof String || typeof source === 'string')
    theme = themeFromSourceColor(argbFromHex(source as string));
  else if (source instanceof Number || typeof source === 'number')
    theme = themeFromSourceColor(source as number);
  else theme = await themeFromImage(source);
  useTheme(theme, { target: document.body });
}

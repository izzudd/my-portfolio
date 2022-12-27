import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme as useTheme,
  themeFromImage,
  type Theme,
} from '@material/material-color-utilities';

export async function applyTheme(source: string | HTMLImageElement) {
  let theme: Theme;
  if (source instanceof String || typeof source === 'string')
    theme = themeFromSourceColor(argbFromHex(source as string));
  else theme = await themeFromImage(source);
  useTheme(theme, { target: document.body });
}

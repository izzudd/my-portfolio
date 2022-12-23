import {argbFromHex, themeFromSourceColor, applyTheme as useTheme} from '@material/material-color-utilities';

export function applyTheme(color: string) {
    const theme = themeFromSourceColor(argbFromHex(color));
    useTheme(theme, {target: document.body});
}
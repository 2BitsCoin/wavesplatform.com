import colorMigrationProxy from './utils/colorMigrationProxy';
import hexToRgbA from './utils/hexToRgbA';
import createColorGetter from './utils/createColorGetter';


export const blue = {
    0: 'white',
    300: '#60a9ff',
    500: '#4f77fc',
    700: '#263f6f',
    900: '#0a1b43',
}

export const primary = blue;

export const secondary = {
    500: '#ea9019'
}

export const success = {
    500: '#22d64c'
}

export const danger = {
    500: '#cc1442'
}


// 300, 500, 700

export const gray = colorMigrationProxy({
    0: '#fff',
    50: '#fafafa',
    100: '#ebecf0',
    // 200: '#d8dbed',  // moved to grayBlue
    // 300: '#9cb4e1',  // moved to grayBlue
    400: '#A9B1BD',
    // 500: '#5F7090',  // moved to grayBlue
    600: '#6a7689',
    // 700: '#415272',  // moved to grayBlue
    800: '#2d374b',
}, 'gray');



export const grayBlue = colorMigrationProxy({
    200: '#d8dbed',
    300: '#9cb4e1',
    400: '#8292b6', // new
    500: '#5F7090',
    600: '#4d5d7e', // new
    700: '#415272',
}, 'grayBlue')





const palette = {
    primary,
    secondary,
    success,
    danger,
    gray,
    grayBlue,
    getColor: createColorGetter(palette),
    opaque: hexToRgbA
}

export { palette }
export default palette
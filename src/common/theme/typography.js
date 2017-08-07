import breakpoints from './breakpoints';


export const base = {
    fontFamily: 'TTNorms, arial, sans-serif',
    fontSize: 15,
    fontStyle: 'normal',
    lineHeight: 1.53,
    margin: 0,
    fontVariantLigatures: 'none'
}


const display = {
    fontWeight: 500,
    letterSpacing: '-1px'
}


export const display4 = {
    ...base,

    fontSize: 28,
    lineHeight: 1.11,
    letterSpacing: '-1px',
    fontWeight: 700,
}

export const display3 = {
    ...base,
    ...display,

    fontSize: 28,
    lineHeight: 1.18
}

export const display2 = {
    ...base,
    ...display,

    fontSize: 24,
    lineHeight: 1.25,
}

export const display1 = {
    ...base,
    ...display,

    fontSize: 18,
    lineHeight: 1.83,
}

export const body = base

export const quote = {
    ...body,
    fontStyle: 'italic'
}

export const numeral = {
    fontFamily: 'arial, sans-serif',
    fontSize: 20,
    lineHeight: 'normal',
    fontStyle: 'normal',
}

export const button = {
    fontSize: 13,
    textTransform: 'uppercase',
    lineHeight: 'normal',
    letterSpacing: '1px',
}



const typography = {
    display1,
    display2,
    display3,
    display4,
    body,
    quote,
    numeral,
    button,

    [`@media (min-width: ${breakpoints.md}px)`]: {
        display4: { fontSize: 64 },
        display3: { fontSize: 44, lineHeight: 1.11, letterSpacing: 'normal' },
        display2: { fontSize: 34, lineHeight: 1.18, letterSpacing: 'normal' },
        display1: { fontSize: 24, lineHeight: 1.33, letterSpacing: 'normal' },
        body: { fontSize: 17, lineHeight: 1.76 },
        quote: { fontSize: 17, lineHeight: 1.76 },
        numeral: { fontSize: 30 },
        button: { fontSize: 15 },
    }
}

export { typography }
export default typography
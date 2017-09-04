import fetchJson from 'src/server/utils/fetchJson';

const getDexData = async (ctx, next) => {
    await fetchJson('http://13.56.20.226/general')
        .then(res => ctx.state.initialState = { ...ctx.state.initialState, dexData: res } )
        .catch(err => ctx.throw(500, 'Unable to fetch DEX general data'));
    await next();
}

export { getDexData };
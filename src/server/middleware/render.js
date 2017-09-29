import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { JssProvider, SheetsRegistry } from 'react-jss';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

// i18n initialization
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import locale from 'src/server/locale';

addLocaleData([...en,...ru]);



// React html component with <html>, <head> etc.
import Html from 'src/server/components/Html';
import FontInliner from 'src/server/components/FontInliner';


import isProd from 'src/server/utils/isProd';



const store = createStore(s => s, {});



export const render = function({
    script: scriptName,
    component: Component = 'span',
    title = 'Waves Platform',
    // messages = {},
    description
} = {}) {
    return async ctx => {



        // enable SSR only for production
        let RenderedComponent;
        if (process.env.NODE_ENV === 'production') {
            RenderedComponent = Component;
        } else {
            RenderedComponent = 'span';
        }

        // log render time
        const renderStart = new Date();
        // render component markup and styles
        const sheets = new SheetsRegistry();
        const content = renderToStaticMarkup(
            <JssProvider registry={sheets}>
                <Provider store={store}>    
                    <IntlProvider locale={ctx.locale} defaultLocale="en" messages={locale[ctx.locale]}>
                        <RenderedComponent initialState={ctx.state.initialState} />
                    </IntlProvider>
                </Provider>
            </JssProvider>
        )
        ctx.accessLog.renderTime = new Date() - renderStart;


        // fonts
        const fonts = new SheetsRegistry();
        renderToStaticMarkup(
            <JssProvider registry={fonts}>
                <FontInliner />
            </JssProvider>
        )


        // script paths
        let vendorChunk;
        let script;

        if (process.env.NODE_ENV === 'production') {
            // read file path fron assets
            script = ctx.state.assets[scriptName].js;
            vendorChunk = ctx.state.assets.vendor.js;
        } else {
            script = `/static/${scriptName}.js`;
        }


        const html = renderToStaticMarkup(
            <Html
                title={title}
                description={description}
                script={script}
                vendorChunk={vendorChunk}
                locale={ctx.locale}
                messages={locale[ctx.locale]}
                content={content}
                fonts={fonts.toString()}
                style={sheets.toString()}
                initialState={ctx.state.initialState}
                gtmEnabled={isProd()}
                sentryEnabled={isProd()}
            />
        );

        ctx.body = `<!DOCTYPE html>${html}`;
    }
}
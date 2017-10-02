import 'babel-polyfill';
import './polyfill';

import React from 'react';
import { render as reactDomRender } from 'react-dom';


import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';


// i18n initialization
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

addLocaleData([...en, ...ru]);


// custom middleware
import { googleAnalytics } from './middleware';



export const getInitialState = () => window.__INITIAL_STATE || {};
export const getMessages = () => window.__MESSAGES || {};
export const getLocale = () => window.__LOCALE;




// run app
function run(Component, {
    callback = () => {},
    reducer = s => s,
    initialState = getInitialState()
}) {
    const appNode = document.getElementById('app');

    // redux store
    const store = createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(googleAnalytics),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )

    return reactDomRender(
        (
            <Provider store={store}>
                <IntlProvider locale={getLocale()} defaultLocale="en" messages={getMessages()}>
                    {Component}
                </IntlProvider>
            </Provider>
        ),
        appNode,
        () => {
            // jss ssr preloaded <style> tag remove
            const jssPreloadedStyles = document.querySelector('[data-jss-server]');
            jssPreloadedStyles.parentNode.removeChild(jssPreloadedStyles);

            callback();
        }
    )
}


export const render = (...args) => {
    if (!global.Intl) {
        require.ensure([
            'intl',
            'intl/locale-data/jsonp/en.js'
        ], function (require) {
            require('intl');
            require('intl/locale-data/jsonp/en.js');
            run(...args)
        });
    } else {
        run(...args)
    }
}
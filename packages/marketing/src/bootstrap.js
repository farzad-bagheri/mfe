import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = el => {
    ReactDOM.render(<App />, el);
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('dev-root');

    // on container dev mode, this element is not defined; only available here
    if (devRoot) {
        mount(devRoot);
    }
}

export { mount };

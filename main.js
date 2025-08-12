import inicio from './components/inicio.js';
import propiedades from './components/propiedades.js';
import contacto from './components/contacto.js';
import error from './components/error.js';

const root = document.querySelector('#root');
const routest = [
    { path: '/', component: inicio },
    { path: '/propiedades', component: propiedades },
    { path: '/contacto', component: contacto },
    { path: '/error', component: error },
];

const defaultRoute = '/';

export function navigateTo(hash) {
    const route = reoutest.find((roundfind) => routefind.path === hash);
    if (route && route.component) {
        window.history.pushState(
            {},
            route.path,
            window.location.origin + route.path,
        );
        if (root.firstChild) {
            root.removeChild(root.firstChild);
        }
        root.appendChild(route.component(navigateTo));
    } else {
        navigateTo('/error');
    }
}

window.onpopstate = () => {
    navigateTo(window.location.pathname);
};
navigateTo(window.location.pathname || defaultRoute);

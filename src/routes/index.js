import Header from '../templates/header';
import Home from '../pages/home';
import Character from '../pages/character';
import getHash from '../utils/get-hash';
import resolveRoutes from '../utils/resolve-routes';
import Error404 from '../pages/error-404';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact'
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);

    console.log(hash);
    console.log(route);

    let render = routes[route] ? routes[route] : Error404;

    console.log(render);
    content.innerHTML = await render();

}

export default router;
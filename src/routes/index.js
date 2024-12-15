import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
// import HeaderOnLy from '~/layout/HeaderOnly';
import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.live, component: Upload },
    { path: config.routes.explore, component: Upload },
    { path: config.routes.friends, component: Upload },
    { path: config.routes.notification, component: Upload },
    { path: config.routes.messages, component: Upload },
    { path: config.routes.more, component: Upload },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };

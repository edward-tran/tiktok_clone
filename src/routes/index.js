import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Explore from '~/pages/Explore';
import Friends from '~/pages/Friends';
import Activity from '~/pages/Activity';
import Messages from '~/pages/Messages';
import More from '~/pages/More';

// import HeaderOnLy from '~/layout/HeaderOnly';
import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.live, component: Live },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.friends, component: Friends },
    { path: config.routes.activity, component: Activity },
    { path: config.routes.messages, component: Messages },
    { path: config.routes.more, component: More },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };

import asyncComponent from './asyncComponent';
const home = asyncComponent(() => import('../page/Home'));
const user = asyncComponent(() => import('../page/user'));
const routes = [
  {
    path: '/home',
    component: home
  },

  {
    path: '/user',
    component: user
  }
];

export default routes;

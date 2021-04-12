import Home from '../pages/Home';
import Login from '../pages/Login';
import Detail from '../pages/Detail';
import Redirect from '../pages/Redirect/index';
import Message from '../pages/Message';
import Found from '../pages/Found';
import User from '../pages/User';

const routes = [
  {
    component: Redirect,
    routes: [
      {
        path: '/login',
        exact: true,
        component: Login,
      },
      {
        path: '/',
        exact: true,
        component: Home,
        // routes: [],
      },
      {
        path: '/home',
        exact: true,
        component: Home,
        // routes: [],
      },
      { path: '/message', component: Message },
      { path: '/detail', component: Detail },
      { path: '/found', component: Found },
      { path: '/user', component: User },
      // {
      //   path: '/child/:id',
      //   component: Child,
      //   routes: [
      //     {
      //       path: '/child/:id/grand-child',
      //       component: GrandChild,
      //     },
      //   ],
      // },
    ],
  },
];

export default routes;

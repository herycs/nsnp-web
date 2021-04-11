import Home from '../pages/Home';
import Login from '../pages/Login';
import Detail from '../pages/Detail';
import Redirect from '../pages/Redirect';
import Message from '../pages/Message';
import Found from '../pages/Found';

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
      { path: '/detail/:id', component: Detail },
      { path: '/found', component: Found },
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

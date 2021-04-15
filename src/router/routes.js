import Home from '../pages/Home/index';
import Login from '../pages/Login/index';
import Detail from '../pages/Detail/index';
import Redirect from '../pages/Redirect/index';
import Message from '../pages/Message/index';
import Found from '../pages/Found/index';
import User from '../pages/User/index';
import Mine from '../pages/Mine';
import Setting from '../pages/Setting';
import Register from '../pages/Register';
import PushArticle from '../pages/PushArticle';

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
      {
        path: '/me',
        component: Mine,
        // routes: [],
      },
      {
        path: '/setting',
        component: Setting,
        // routes: [],
      },
      {
        path: '/register',
        component: Register,
        // routes: [],
      },
      {
        path: '/pusharticle',
        component: PushArticle,
        // routes: [],
      },
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

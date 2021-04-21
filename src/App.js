import './assets/css/base.css';
import './assets/css/normalize.css';
import routes from './router/routes';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter, Switch } from 'react-router-dom';
import 'zarm/dist/zarm.css';
import store from './store';
import { Provider } from 'react-redux';

// import { Icon } from 'zarm';

// const ICON = Icon.createFromIconfont('//at.alicdn.com/t/font_1340918_lpsswvb7yv.js');

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>{renderRoutes(routes)}</Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

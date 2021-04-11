import './assets/css/base.css';
import './assets/css/normalize.css';
import routes from './router/routes';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter, Switch } from 'react-router-dom';
import 'zarm/dist/zarm.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>{renderRoutes(routes)}</Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

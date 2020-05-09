import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store} from './store';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { sessionService } from 'redux-react-session';

// Init the session service
sessionService.initSessionService(store, { driver: 'COOKIES' });

ReactDOM.render(
  <AppContainer>
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
  {/* </ConnectedRouter> */}
  </Provider>
  </AppContainer>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

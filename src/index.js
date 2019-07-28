import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import { Provider } from 'react-redux';
import store from "./state/store"
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'


ReactDOM.render(<Provider store={store}>
                    <ErrorBoundary>
                        <App />
                    </ErrorBoundary>
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

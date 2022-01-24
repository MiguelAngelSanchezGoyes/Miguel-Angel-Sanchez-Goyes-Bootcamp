import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="main-container">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;

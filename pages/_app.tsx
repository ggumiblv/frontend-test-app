import './globals.css';
import { Provider } from 'react-redux';
import { store } from '../store/store';

function MyApp({ Component, pageProps }) {
    return (
        <div>
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
        </div>
    );
}

export default MyApp;

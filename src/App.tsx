import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { ConfigProvider, theme } from 'antd';
import { store } from './app/store';
import Home from './Home';
import './index.css';
import { en } from './intl';

const App = () => (
  <Provider store={store}>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <IntlProvider locale="en" messages={en}>
        <Home />
      </IntlProvider>
    </ConfigProvider>
  </Provider>
);
export default App;

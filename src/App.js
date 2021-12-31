import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div style={{margin : 20, border : '1px solid red' }}>
          <FontAwesomeIcon icon={faCoffee} />
        </div>
        
        <CakeContainer numberOfCakes={20} />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;

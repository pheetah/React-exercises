import logo from './logo.svg';
import './App.css';
import BusDetail from './bus-detail/BusDetail';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

//const store = store;

function App() {

  const arr = [1,2,3];

  return (
    <Provider store={store}>
      <div className="App">
        {arr.map((number) => <BusDetail key={number.toString()}></BusDetail>)}
      </div>
    </Provider>
  );
}

export default App;

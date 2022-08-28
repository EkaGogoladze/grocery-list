import './App.css';
import image from './shopping.jpg'
import imageTwo from './man.jpg'
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div>
      <div className='app'>
        <div className='container'>
          <img src={ image } width='200px' alt=''/>
        </div>
        <div className='container'>
          <h1>Grocery List</h1>
          </div>
        <GroceryList/>
        <div className='container'>
          <img src={ imageTwo } width='200px' alt =''/>
        </div>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Count } from './components/Count';
// import img10 from '..//src/Components/img/img1.avif'

function App() {
  return (
    <>
    <i1>
  <div>
  <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7' alt="pic" />
    <h1>Price 100</h1>
    <Count incrementValue={100}/>
  </div>

<div>

<img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597' alt="pic" />
<h1>Price 200</h1>


<Count incrementValue={200}/>
</div>

<div>
<img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/49845b494b1e637209b7bd1c7ca184ad' alt="pic" />
<h1>Price 300</h1>
<Count incrementValue={300}/>
</div>
</i1>
</>
  );
}

export default App;

import UserProfile from './React/user-profile';
import ProductCard from './React/product-card';
import { ImageUrl } from './React/profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <ImageUrl imageUrl={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"}/>
      <UserProfile username="Ibrahim" email="ibrahimasadov31@gmail.com"/>
      <ProductCard name="snickers" price="0,50$" description="Description"/>
    </div>
  );
}

export default App;

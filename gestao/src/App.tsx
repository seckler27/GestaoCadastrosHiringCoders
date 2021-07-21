import ProductForm from './Components/ProductForm';
import Header from './Components/Header/Header';
import { SearchBar } from './Components/SearchBar';
import { BrowserRouter, Route,  Switch } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Switch>
          <Route path="/" exact={true}  ></Route>
          <Route path="/products" exact={true} component={ProductForm}></Route>
          <Route path="/search" exact={true} component={SearchBar}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

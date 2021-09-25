import React, {useEffect, useState} from 'react';
import WebFont from "webfontloader";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import BounceLoader from "react-spinners/BounceLoader";

import "./App.css";

// import productData from "./products.json";

import NavBar from './components/NavBar/NavBar';
import Products from './Products/Products';
import Cart from './components/Cart/Cart';

const EmptyPlaceHolder: React.FC = () => {
  return (
    <div style={{textAlign: "center"}}>
      <p>Empty Placeholder View.</p>
    </div>
  )
}

const MOCk_API_CALL = () => {
  const [state, setState] = useState([]);
  
  useEffect(() => {
    fetch('products.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(data) {
        setState(data);
      });
  }, [])

  return state;
}


const App = () => {

  const apiData = MOCk_API_CALL();

  useEffect(() => {
    console.log("USE-EFFECT-1");
    WebFont.load({
      google: {
        families: ["Inter"],
      },
    });
  }, []);

  return (
      <Router>
        <Switch>
          <div className="app">
            <Route exact path="/">
              <Redirect to="/products" />
            </Route>
            <div>
              <NavBar />
              <Route path='/products' exact component={() => {
                  return apiData && apiData.length > 0 ? <Products data={apiData}/>
                  : 
                  <div style={{textAlign: "center"}} >
                    <BounceLoader size={30} color="#36bad5" />
                  </div>
              }} />
              <Route path='/empty' exact component={EmptyPlaceHolder} />
            </div>

                <Cart />

            
          </div>
        </Switch>
      </Router>
  );
}

export default App;

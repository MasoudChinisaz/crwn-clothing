import React, {useEffect} from "react";

import { GlobalStyle } from "./global.styles";

import HomePage from "./pages/homepage/homepage.component";
import { useSelector, useDispatch } from "react-redux";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";


import { Switch, Route, Redirect } from "react-router-dom";

import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkout/checkout.component";
import { checkUserSession } from "./redux/user/user.actions";

const App = () => {
  
  const currentUser = (useSelector(selectCurrentUser))
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])
  
  return (
    <div className='App'>
      <GlobalStyle />
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)} />
      </Switch>
    </div>
  );
  }

export default App;

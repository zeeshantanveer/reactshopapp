import Navbar from "./components/alements/Navbar";
import Contacts from "./components/contacts/Contacts";
import Products from "./components/products/Products";
import {Provider} from 'react-redux';
import store from './Store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import ProductDetail from "./components/products/ProductDetail";
import NotFound from "./NotFound";
import Chat from "./components/chat/Chat";
import FoodMenu from "./components/food/FoodMenu";
import React from "react";
function App() {
  return (
    <Provider store={store}>
        <Router>
            <div className="App">
                <Navbar />
                <div className="container-fluid">
                    <div className="py-3">
                        <Switch>
                            <Route exact path="/" component={Contacts} />
                            <Route exact path="/contacts/add" component={AddContact} />
                            <Route exact path="/contacts/edit/:id" component={EditContact} />
                            <Route exact path="/shop" component={Products} />
                            <Route exact path="/shop/product/:id" component={ProductDetail} />
                            <Route exact path="/chat" component={Chat} />
                            <Route exact path="/foodmenu" component={FoodMenu} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    </Provider>
  );
}

export default App;

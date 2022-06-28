// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router';

import ClientsLayout from 'src/layouts/ClientsLayout';
import OrdersLayout from 'src/layouts/OrdersLayout';
import ProductsLayout from 'src/layouts/ProductsLayout';
import SellersLayout from 'src/layouts/SellersLayout';

const Routes = () => {
  return (
    <Router>
      <Set wrap={SellersLayout}>
        <Route path="/sellers/new" page={SellerNewSellerPage} name="newSeller" />
        <Route path="/sellers/{id:Int}/edit" page={SellerEditSellerPage} name="editSeller" />
        <Route path="/sellers/{id:Int}" page={SellerSellerPage} name="seller" />
        <Route path="/sellers" page={SellerSellersPage} name="sellers" />
      </Set>
      <Set wrap={ProductsLayout}>
        <Route path="/products/new" page={ProductNewProductPage} name="newProduct" />
        <Route path="/products/{id:Int}/edit" page={ProductEditProductPage} name="editProduct" />
        <Route path="/products/{id:Int}" page={ProductProductPage} name="product" />
        <Route path="/products" page={ProductProductsPage} name="products" />
      </Set>
      <Set wrap={ClientsLayout}>
        <Route path="/clients/new" page={ClientNewClientPage} name="newClient" />
        <Route path="/clients/{id:Int}/edit" page={ClientEditClientPage} name="editClient" />
        <Route path="/clients/{id:Int}" page={ClientClientPage} name="client" />
        <Route path="/clients" page={ClientClientsPage} name="clients" />
      </Set>
      <Set wrap={OrdersLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/order" page={OrderPage} name="order" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;

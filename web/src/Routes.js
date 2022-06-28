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

const Routes = () => {
  return (
    <Router>
      <Set wrap={ClientsLayout}>
        <Route path="/clients/new" page={ClientNewClientPage} name="newClient" />
        <Route path="/clients/{id:Int}/edit" page={ClientEditClientPage} name="editClient" />
        <Route path="/clients/{id:Int}" page={ClientClientPage} name="client" />
        <Route path="/clients" page={ClientClientsPage} name="clients" />
      </Set>
      <Set wrap={OrdersLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;

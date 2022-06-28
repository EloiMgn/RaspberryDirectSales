import { Link, routes } from '@redwoodjs/router';

const OrderLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Vente directe La Motte</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.order()}>Nouvelle commande</Link>
            </li>
            <li>
              <Link to={routes.home()}>Accueil</Link>
            </li>
            <li>
              <Link to={routes.about()}>A propos</Link>
            </li>
            <li>
              <Link to={routes.clients()}>Clients</Link>
            </li>
            <li>
              <Link to={routes.products()}>Produits</Link>
            </li>
            <li>
              <Link to={routes.sellers()}>Vendeurs</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default OrderLayout;

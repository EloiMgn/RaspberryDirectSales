import { Link, routes } from '@redwoodjs/router';
import { Toaster } from '@redwoodjs/web/toast';

const SellersLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.sellers()} className="rw-link">
            Sellers
          </Link>
        </h1>
        <Link to={routes.home()} className="rw-button rw-button-blue">
          Retour à l&apos;accueil
        </Link>
        <Link to={routes.newSeller()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Seller
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  );
};

export default SellersLayout;

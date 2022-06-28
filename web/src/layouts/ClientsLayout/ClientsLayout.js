import { Link, routes } from '@redwoodjs/router';
import { Toaster } from '@redwoodjs/web/toast';

const ClientsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.clients()} className="rw-link">
            Clients
          </Link>
        </h1>
        <Link to={routes.home()} className="rw-button rw-button-blue">
          Retour à l&apos;accueil
        </Link>
        <Link to={routes.newClient()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Client
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  );
};

export default ClientsLayout;

import React from "react";
import styles from "./Layout.module.css";

const Layout = props => {
    return (
      <div>
        <header>
          <nav>
            <ul>
{/* {              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/a-propos">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>} */}
            </ul>
          </nav>
        </header>
        <main>
          {props.children}
        </main>
        <footer>
          <p>Copyright © 2022. Tous droits réservés.</p>
        </footer>
      </div>
    );
  }

  export default Layout;
  
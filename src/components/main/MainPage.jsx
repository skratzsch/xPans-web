import React from 'react';
import './MainPage.css';
import Logo from '../logo/Logo';


const MainPage = () => {
  return (
    <section>
        <header>
            <Logo />
            <aside className="header-right">Header</aside>
        </header>
        <nav>
            <span className="searchbar">Search...</span>
            <span className="menu-burger">☰</span>
        </nav>
        <main>
            <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            </ul>
        </main>
        <footer>
            <ul>
            <li>Link 1</li>
            <li>Link 2</li>
        </ul>
  </footer>
</section>

  );
}

export default MainPage;

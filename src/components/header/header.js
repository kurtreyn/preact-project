import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
  <header class={style.header}>
    <a href="/" class={style.logo}>
      <img
        src={'../../assets/preact-logo.svg'}
        alt="Preact Logo"
        height="32"
        width="32"
      />
      <h1>KurtReyn's Preact & Python/Flask Demo</h1>
      <img
        src={'../../assets/images/python-logo.svg'}
        alt="Python Logo"
        height="32"
        width="32"
      />
      <img
        src={'../../assets/images/flask-logo.svg'}
        alt="Python Logo"
        height="32"
        width="32"
      />
    </a>
    <nav>
      <Link activeClassName={style.active} href="/">
        Home
      </Link>
      <Link activeClassName={style.active} href="/profile">
        Profile
      </Link>
    </nav>
  </header>
);

export default Header;

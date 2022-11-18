import { ReactElement } from 'react';
import './Header.style.scss';

import back from 'assets/icon/back.svg';
import menu from 'assets/icon/menu.svg';

export function Header(): ReactElement {
  return (
    <header className="header">
      <div className="header__menu headerMenu">
        <button type="button" className="headerMenu__button">
          <img src={menu} alt="menu button" />
        </button>

        <button type="button" className="headerMenu__button">
          <img src={back} alt="back button" />
        </button>
      </div>

      <nav className="header__nav headerNav">
        <button type="button" className="headerNav__button headerNav__button_active">
          Просмотр
        </button>

        <button type="button" className="headerNav__button">
          Управление
        </button>
      </nav>
    </header>
  );
}

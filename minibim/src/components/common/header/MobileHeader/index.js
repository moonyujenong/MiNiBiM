import { useState } from 'react';
import { menuList } from '../menuList';
import logo from 'images/common/logo.png';
import hamburger from 'images/common/hamburger.svg';
import close from 'images/common/close.svg';
import style from './index.module.css';

function MobileHeader() {
  const [isFngOpen, setIsFngOpen] = useState();

  const fngControl = () => {
    setIsFngOpen(!isFngOpen);
  };

  return (
    <div className={style.container}>
      <button className={style.hamburger} type="button" onClick={fngControl}>
        <img alt="hamburger" src={hamburger} />
      </button>

      <a className={style.logo_link} href="/">
        <h1>로고 이미지</h1>
        <img alt="logo" src={logo} />
      </a>

      {/* FNB */}
      <div className={`${style.fnb} ${isFngOpen ? 'active' : ''}`}>
        <button className={style.close} type="button" onClick={fngControl}>
          <img alt="close" src={close} />
        </button>

        <ul className={style.menu}>
          {menuList.map((item) => (
            <li className={style.link} key={item.id}>
              <a href={item.src}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* //FNB */}
    </div>
  );
}

export default MobileHeader;

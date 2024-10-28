import { menuList } from '../menuList';
import logo from 'images/common/logo.svg';
import style from './index.module.css';
import { Link } from 'react-router-dom';

function PcHeader() {
  return (
    <div className={style.container}>
      <Link to={'/'} className={style.logo_link}>
        <h1 className={style.logo_title}>미니빔 로고 이미지</h1>
        <img alt="logo img" src={logo} />
      </Link>

      <ul className={style.menu_list}>
        {menuList.map((item) => (
          <li className={style.menu_item} key={item.id}>
            <Link to={item.src}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PcHeader;

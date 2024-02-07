import { menuList } from '../menuList';
import logo from 'images/common/pc_logo.png';
import style from './index.module.css';

function PcHeader() {
  return (
    <div className={style.container}>
      <a className={style.logo_link} href="/">
        <h1 className={style.logo_title}>미니빔 로고 이미지</h1>
        <img alt="logo img" src={logo} />
      </a>

      <ul className={style.menu_list}>
        {menuList.map((item) => (
          <li className={style.menu_item} key={item.id}>
            <a href={item.src}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PcHeader;

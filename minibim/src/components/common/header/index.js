import useResponsive from '@hook/Responsive';
import MobileHeader from './MobileHeader';
import PcHeader from './PcHeader';

function Header() {
  const innerWidth = useResponsive();

  return <header>{innerWidth < 1280 ? <MobileHeader /> : <PcHeader />}</header>;
}

export default Header;

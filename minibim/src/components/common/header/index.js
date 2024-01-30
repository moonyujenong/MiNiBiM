import React, { useState, useEffect } from 'react';
import MobileHeader from './MobileHeader';
import PcHeader from './PcHeader';

function Header () {
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);

	useEffect(() => {
		const resizeWidth = () => {
			setInnerWidth(window.innerWidth);
		}

		window.addEventListener("resize", resizeWidth);

		return () => {
			window.removeEventListener("resize", resizeWidth); 
		};
	}, []);

	return( 
	<>
		{innerWidth < 1280 ? <MobileHeader /> : <PcHeader />}
	</>

	)
}

export default Header;
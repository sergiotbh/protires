import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Header = () => {
  return(
    <nav className="flex flex-row justify-between py-7 px-5 md:px-28 w-full fixed top-0 z-50 bg-grey-700">
      <StaticImage
        src="../images/protires_logo_low_res.png"
        width={672}
        height={384}
      />
    </nav>
  )
}

export default Header;
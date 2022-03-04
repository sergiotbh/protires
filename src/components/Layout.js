import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({children}) => {
  return(
    <main className="min-h-screen bg-grey-700">
      <Helmet>
        <meta name="description" content="Protires Mexicali. Para Autos y Tractocamiones" />
        <title>PROTIRES</title>
      </Helmet>
      {children}
    </main>
  )
}

export default Layout;
import React from "react";
import Footer from "../Footer/Footer";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

import "./Layout.css"
// export default function Layout({ children }) {
//   {
//     (children) => (<div>{children}</div>)
//   }
// }

export default function Layout({ children }) {
  return (
    <div>
    <NavigationMenu />
      {children}
      <Footer />
    </div>
  );
}

  // <BrowserRouter>
  //   <Header />
  //   <Route path="/" exact component={Home} />
  //   <Route path="/Products" exact component={Products} />
  //   <Route path="/Products/:id" component={ProductDetail} />
  // </BrowserRouter>;
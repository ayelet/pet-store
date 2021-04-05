import React from "react";
import Footer from "../Footer/Footer";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

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

import React from "react";
// import HeroPage from "../HeroPage/HeroPage";
// import Layout from "../Layout/Layout";
// import HeroImg from "../../assets/img/hero1.png";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import { Route } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import Cart from "../Cart/Cart";
import AboutPage from "../About/AboutPage";
import ContactPage from "../Contact/Contact";
// import CartProvider from "../CartContext/CartContext";
import Footer from "../Footer/Footer";
import HomePage from "./HomePage";
// import Product from "../Product/ProductCard";
import ProductDetail from "../Product/ProductDetail";
import NutritionCalculaotr from "./NutritionCalculator/NutritionCalculaotr";

export default function IndexPage() {
  return (
    <div>
      <NavigationMenu />
      <Route path="/" exact component={HomePage} />
      <Route path="/Contact" exact component={ContactPage} />
      <Route path="/About" exact component={AboutPage} />
      <Route path="/Products/" component={ProductsPage} />
      <Route path="/Products/id=:id" component={ProductDetail} />
      <Route path="/Cart" component={Cart} />
      <Route path="/Calculator" component={NutritionCalculaotr} />
      <Footer />
    </div>
  );
}

///////////////////////////
// return (
//     <div>
//       <Router>
//         <NavigationMenu />

//         {/*  <Route
//           path="/"
//           exact
//           render={(props) => (
//             <HeroPage
//               {...props}
//               img={HeroImg}
//               heroClass="hero"
//               title="Furr Real"
//               subtitle="Caring for Your Pet's Healt"
//             />
//           )}
//         /> */}
//         {/*  <HeroPage
//           img={HeroImg}
//           heroClass="hero"
//           title="Furr Real"
//           subtitle="Caring for Your Pet's Healt"
//         /> */}
//         <CartProvider>
//           <Route path="/" component={ProductsPage} />
//         </CartProvider>
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={ContactPage} />
//         {/*  <About /> */}
//         {/*   <ContactPage /> */}
//         <CartProvider>
//           <Route path="/cart" component={Cart} />
//           {/* <Cart /> */}
//         </CartProvider>
//         {/*  <Footer /> */}
//       </Router>
//     </div>
//   );
///////////////////////////////
// <NavigationMenu />
//       <HeroPage
//         img={HeroImg}
//         heroClass=".hero"
//         title="Furr Real"
//         subtitle="Caring for Your Pet's Healt"
//       />
//       <ProductsPage />
//       <About />
//       <Contact />
//       <Cart />

//  return (
//     <Layout>
//       <HeroPage
//         title="Furr Real"
//         heroClass="hero"
//         subtitle="Caring for your pet health"
//         img={HeroImg}
//       />
//     </Layout>
//   );

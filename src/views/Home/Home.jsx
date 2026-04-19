import Footer from "./../../components/Footer/Footer";
import Navbar from "./../../components/Navbar/Navbar";
import "./Home.css";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import { PRODUCTS } from "./../../config";
import ProductCard from "../../components/ProductCard/ProductCard";
import PageTitle from "../../components/PageTitle/PageTitle";




function Home() {
  return (

    <div>
      <Navbar active="home" />
    <PageTitle title="Read. Learn. & Growwww.!!!"  />      
    <BodyContainer>

        <div className="products-container">
          {PRODUCTS.map((product, index) => {
            return (
              <ProductCard product={product} key = {index} />
            );


          })}</div>


      </BodyContainer>
      <Footer />
    </div>
  );
}

export default Home;
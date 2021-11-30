import React from "react";
import "./styles/Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1"
          title="How to Make an AMAZON Clone with REACT JS for Beginners (in 4 hours)"
          price="40.12435"
          rating="5"
          image="https://images.unsplash.com/photo-1619146436057-a76035dc25c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmlldG5hbWVzZSUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
        />
        <Product
          id="2"
          title="How to Make an AMAZON Clone with REACT JS for Beginners (in 4 hours)"
          price="40.12435"
          rating="5"
          image="https://images.unsplash.com/photo-1619146436057-a76035dc25c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmlldG5hbWVzZSUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="How to Make an AMAZON Clone with REACT JS for Beginners (in 4 hours)"
          price="40.12435"
          rating="5"
          image="https://images.unsplash.com/photo-1619146436057-a76035dc25c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmlldG5hbWVzZSUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
        />
        <Product
          id="4"
          title="How to Make an AMAZON Clone with REACT JS for Beginners (in 4 hours)"
          price="40.12435"
          rating="5"
          image="https://images.unsplash.com/photo-1619146436057-a76035dc25c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmlldG5hbWVzZSUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
        />
        <Product
          id="5"
          title="How to Make an AMAZON Clone with REACT JS for Beginners (in 4 hours)"
          price="40.12435"
          rating="5"
          image="https://images.unsplash.com/photo-1619146436057-a76035dc25c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmlldG5hbWVzZSUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="How to Make an AMAZON Clone with REACT JS for Beginners (in 4 hours)"
          price="40.12435"
          rating="5"
          image="https://media.istockphoto.com/photos/aerial-view-of-the-beautiful-young-lying-woman-with-pink-donut-swim-picture-id1146972166?b=1&k=20&m=1146972166&s=170667a&w=0&h=gy3R1sR9hJOfGkc3AZ0GWL688cleB245_RkQPA0MX4E="
        />
      </div>
    </div>
  );
};

export default Home;

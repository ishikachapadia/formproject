import React from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import "../../styles/about.css"; 

export default function AboutUs() {
  return (
    <main>
      <Header />
      <section className="aboutContainer">
        <h1>About Us</h1>
        <section className="aboutSummary">
        Proudly supporting Canada's dairy industry, celebrating its rich heritage, honoring the hard work of people like you, and ensuring a brighter future for generations to come!
        </section>
        <section className="aboutContent">
          <div className="aboutTextbox">
            <h2> Canada’s Dairy Industry: Fresh, Nutritious, and Sustainable </h2>
            <p> Canada’s dairy industry is built on a strong tradition of family-run farms and sustainable practices. From coast to coast, our farmers are dedicated to producing fresh, nutritious dairy products that Canadians can trust. By choosing Canadian dairy, you’re not just supporting local farmers—you’re fueling your body with high-quality milk, cheese, and yogurt that contribute to an active and balanced lifestyle</p>
          </div>
          <div className="aboutImage">
          </div>
        </section>
        <section className="aboutContent">
          <div className="aboutImage">
          </div>
          <div className="aboutTextbox">
            <h2> Join the Fun: Enter the Milk & Lifestyle Competition! </h2>
            <p> This competition celebrates the active lifestyle of young Canadians. Whether you're hitting the gym, or relaxing at home, our contest encourages you to showcase how you enjoy milk as part of your daily routine. Each week, a lucky winner will have their photo featured as the "Winning Image of the Week" on our site and in our nationwide campaign! Plus, every entry has a chance to win amazing prizes that’ll fuel your next adventure!.</p>
          </div>
        </section>
        <section className="aboutContent">
          <div className="aboutTextbox">
            <h2> Our Mission: Promoting Healthy Living with Canadian Dairy </h2>
            <p>Our campaign aims to promote the importance of an active lifestyle supported by healthy nutrition, especially the benefits of Canadian milk. By celebrating the diverse ways Canadians enjoy milk, we’re encouraging young adults to embrace a balanced diet while staying active. Through this competition, we hope to inspire you to make milk a part of your routine and empower you to live your best life, every day!
          </p>
          </div>
          <div className="aboutImage">
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}

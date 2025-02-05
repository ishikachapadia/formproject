import React from "react";
import Form from '../components/form'; 
import Footer from '../components/footer';
import Header from '../components/header';
import "../styles/form.css";  

export default function Home() {
  return (
    <main>
      <Header />
      <Form />
      <Footer />
    </main>
  );
}




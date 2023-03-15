import React from "react";
import Layout from "../Components/Layout";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Hook from "../Components/Hook";
import Footer from "../Components/Footer";
import ByTheWay from "../Components/ByTheWay";

const APropops = () => {

  return (
    <React.Fragment>
      <Layout>
        <Header />
        <Main>
          <Hook />
          <ByTheWay />
        </Main>
      </Layout>
      <Footer />
    </React.Fragment>
  );
};

export default APropops;
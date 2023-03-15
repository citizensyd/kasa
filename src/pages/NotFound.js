import React from "react";
import Layout from "../Components/Layout";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Footer from "../Components/Footer";
import Error from "../Components/Error";

const NotFound = () => {
  return (
    <React.Fragment>
      <Layout>
        <Header />
        <Main>
           <Error />
        </Main>
      </Layout>
      <Footer />
    </React.Fragment>
  );
};

export default NotFound;

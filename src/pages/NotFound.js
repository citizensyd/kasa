import React from "react";
import Layout from "../Components/Layout";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Hook from "../Components/Hook";
import Footer from "../Components/Footer";
import Error from "../Components/Error";

const NotFound = () => {
  return (
    <React.Fragment>
      <Layout>
        <Header></Header>
        <Main>
           <Error />
        </Main>
      </Layout>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default NotFound;

import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const PageLayout = (props) => {
  return (
    <>
      <div class="page-wrapper">
        <Header />

        <main class="main">
          <div class="main-container">
            <div class="main-content">
              <div class="container-fluid">{props.children}</div>
            </div>
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default PageLayout;

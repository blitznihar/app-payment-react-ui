import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MakePayments from "./MakePayments";


function App() {
  

  return (
    <>

      <div className="container mt-5" data-bs-theme="dark">
    <Tabs defaultActiveKey="makePayments" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="makePayments" title="Make Payments">
        <div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Make Payments</Accordion.Header>
              <Accordion.Body>
                <div>
                  <MakePayments />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Tab>
      </Tabs>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <App />

);

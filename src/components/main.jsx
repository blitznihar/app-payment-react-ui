import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MakePayments from "./payments/MakePayments";
import CustomerSearch from "./customer/CustomerSearch";
import CustomerPaymentDetails from "./customer/customerPaymentDetails";


function App() {
  

  return (
    <>

      <div className="container mt-5" data-bs-theme="dark">
    <Tabs defaultActiveKey="CustomerSearch" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="CustomerSearch" title="Customer Search">
        <div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Customer Lookup</Accordion.Header>
              <Accordion.Body>
                <div>
                  <CustomerSearch />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
      </Tab>
      <Tab eventKey="CustomerPaymentDetails" title="Customer Payment Details">
        <div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Customer Payment Details</Accordion.Header>
              <Accordion.Body>
                <div>
                  <CustomerPaymentDetails />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
      </Tab>
      <Tab eventKey="MakePayments" title="Make Payments">
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

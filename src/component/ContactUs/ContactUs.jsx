import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./ContactUs.css";
import { IoMdMail } from 'react-icons/io';
import { TiLocation } from "react-icons/ti";
import { LuSmartphone } from "react-icons/lu";


const Contact_us = () => {
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    message: "",
  });
 

  const validation = yup.object().shape({
    name: yup.string().min(2).max(15).required("Please enter your name"),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email"),
    message: yup
      .string()
      .min(10 * 12)
      .max(10 * 20).required("please enter your message"),
  });

  return (
    <div>
      <Formik
        initialValues={formObject}
        validationSchema={validation}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values, actions) => {
          // Handle form submission
        }}
      >
        <Form>
          <div className="container">
            <article> </article>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <h1>Get in touch</h1>
                  <hr className="line"></hr>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="form-control"
                    style={{
                      height: "60px",
                      backgroundColor: "rgb(241, 237, 237)",
                    }}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <Field
                    type="text"
                    name="email"
                    placeholder="Enter your email address"
                    className="form-control"
                    style={{
                      height: "60px",
                      backgroundColor: "rgb(241, 237, 237)",
                    }}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="form-group">
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Enter your message"
                    className="form-control"
                    style={{
                      height: "160px",
                      border: "none",
                      backgroundColor: "rgb(241, 237, 237)",
                    }}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <button type="submit" className="button">
                  Submit
                </button>
              </div>
              <div className="img-container">
                <h2>OFFICE</h2>
                <div className="image-text">
                  <TiLocation className="icon1" />
                  Chandigarh,India<br></br>
                </div>
                <div className="image-text">
                  <LuSmartphone className="icon2" />
                  +91 8558880599
                </div>
                <div className="image-text">
                  <IoMdMail className="icon3" />
                  order@organzy.in
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact_us;

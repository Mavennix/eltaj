import React, { useState } from "react"
import Layout from "../components/layout"
import { Row, Form } from "react-bootstrap"
import PrimaryDemoBanner from "../components/primary-demo-banner"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import emailjs from "emailjs-com"
import Swal from "sweetalert2"

const BookDemo = () => {
  const [loadingState, setLoadingState] = useState(true);

  const [demoField, setDemoField] = useState({
    lastName: "",
    firstName: "",
    phone: "",
    emailAddress: "",
    businessName: "",
    interests: [],
    numberOfSites: "",
    numberOfCustomers: "",
    centralizedControl: "",
  })

  const handleSubmit = e => {
    e.preventDefault()
    console.log(demoField)
    sendFeedback("template_kx91656", demoField)
  }
  const sendFeedback = (templateId, variables) => {
    setLoadingState(true);
    emailjs
      .send("service_pqoegb9", templateId, variables, "user_tkuAZxmwlOE0ygtpNwPzY")
      .then(res => {
        setDemoField({
          lastName: "",
          firstName: "",
          phone: "",
          emailAddress: "",
          businessName: "",
          interests: [],
          numberOfSites: "",
          numberOfCustomers: "",
          centralizedControl: "",
        });
        Swal.fire({
          title: 'Thank you for booking a free Demo with us, a member of our team will get in touch with you shortly.',
          icon: 'success'
        });
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        Swal.fire({
          title: 'Email Failed to Send',
          icon: 'error'
        })
        // console.error(
        //   "Oh well, you failed. Here some thoughts on the error that occured:",
        //   err
        // )
      );
      setLoadingState(false);

  }
  const handleCheck = e => {
    let selectedInterests = demoField.interests
    console.log(e.target)
    console.log(e.target.checked)
    if (e.target.checked) {
      selectedInterests.push(e.target.value)
    } else {
      const index = selectedInterests.indexOf(e.target.value)
      if (index > -1) {
        selectedInterests.splice(index, 1)
      }
    }
    setDemoField({ ...demoField, interests: selectedInterests })
  }
  return (
    <div>
      <Layout>
        <div
          className="d-flex align-items-center justify-content-center flex-column"
          style={{
            backgroundImage: "radial-gradient( #FFFFFF, #CBCEFF)",
            minHeight: "50vh",
          }}
        >
          <h3>Book A Demo</h3>
          <h6 className="pt-2 text-center">
            We look forward to a great partnership, book a demo below
          </h6>
        </div>

        <div className="container">
          <Row className="my-5 py-5">
            <div className="col-md-6 col-lg-5 mx-auto">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <div className="col-md-6 mb-2">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="mb-0 pb-0 font-weight-bold">Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        value={demoField.lastName}
                        required
                        onChange={e => {
                          setDemoField({
                            ...demoField,
                            lastName: e.target.value,
                          })
                        }}
                      />
                    </Form.Group>
                  </div>

                  {/*  */}
                  <div className="col-md-6 mb-2">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="mb-0 pb-0 font-weight-bold">First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        value={demoField.firstName}
                        required
                        onChange={e => {
                          setDemoField({
                            ...demoField,
                            firstName: e.target.value,
                          })
                        }}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-12 mb-2">
                    <PhoneInput
                      inputClass="w-100"
                      required
                      country={"ng"}
                      value={demoField.phone}
                      onChange={phone => {
                        setDemoField({ ...demoField, phone: phone })
                      }}
                    />
                  </div>
                  {/* <div className="col-md-6 mb-2">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="mb-0 pb-0">Last name</Form.Label>
                      <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                  </div> */}
                  {/*  */}
                  <div className="col-md-12 mb-2">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="mb-0 pb-0 font-weight-bold">
                        Email Address
                      </Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="What’s your email address?"
                        value={demoField.emailAddress}
                        onChange={e => {
                          setDemoField({
                            ...demoField,
                            emailAddress: e.target.value,
                          })
                        }}
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-12 mb-2">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="mb-0 pb-0 font-weight-bold">
                        Business Name
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={demoField.businessName}
                        onChange={e => {
                          setDemoField({
                            ...demoField,
                            businessName: e.target.value,
                          })
                        }}
                        placeholder="Enter business name"
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-12 mb-2">
                      <p className="font-weight-bold">
                        What solution are you interested in (select all that
                        apply) ?
                      </p>
                    <Form.Group controlId="formBasicCheckbox">

                      <Form.Check
                        className="mb-1 "
                        id="1"
                        type="checkbox"
                        label="Functionality for customers to book appointments online before coming into your facility"
                        value="Functionality for customers to book appointments online before coming into your facility"
                        onChange={e => handleCheck(e)}
                      />
                      <Form.Check
                        className="mb-1"
                        id="2"
                        type="checkbox"
                        label="Organized and automatically ordered customer queues in your facility"
                        value="Organized and automatically ordered customer queues in your facility"
                        onChange={e => handleCheck(e)}
                      />
                      <Form.Check
                        className="mb-1"
                        type="checkbox"
                        id="3"
                        label="To get customer feedback after their interactions with your agents"
                        value="To get customer feedback after their interactions with your agents"
                        onChange={e => handleCheck(e)}
                      />
                      <Form.Check
                        className="mb-1"
                        id="4"
                        type="checkbox"
                        label="Business intelligence and reporting about on-site customer service operations"
                        value="Business intelligence and reporting about on-site customer service operations"
                        onChange={e => handleCheck(e)}
                      />
                      <Form.Check
                        className="mb-1"
                        type="checkbox"
                        id="5"
                        label="Advertisements in-facility on digital screens and queue tickets"
                        value="Advertisements in-facility on digital screens and queue tickets"
                        onChange={e => handleCheck(e)}
                      />
                      <Form.Check
                        className="mb-1"
                        type="checkbox"
                        id="6"
                        label="Others"
                        value="Others"
                        onChange={e => handleCheck(e)}
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-12 mb-2">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="mb-0 pb-0 font-weight-bold">
                        Number of sites where the system is required?
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="0"
                        required
                        value={demoField.numberOfSites}
                        onChange={e => {
                          setDemoField({
                            ...demoField,
                            numberOfSites: e.target.value,
                          })
                        }}
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-12 mb-2">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="mb-0 pb-0 font-weight-bold">
                        How many customer counters are in each site?
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="0"
                        required
                        value={demoField.numberOfCustomers}
                        onChange={e => {
                          setDemoField({
                            ...demoField,
                            numberOfCustomers: e.target.value,
                          })
                        }}
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-12 mb-2">
                    <p className="font-weight-bold">
                      Do you want centralized control and monitoring of all
                      sites?
                    </p>
                    <Form.Check
                      type="radio"
                      label="Yes"
                      required
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                      value="Yes"
                      onChange={e => {
                        console.log(e.target.value)
                        setDemoField({
                          ...demoField,
                          centralizedControl: e.target.value,
                        })
                      }}
                    />
                    <Form.Check
                      type="radio"
                      required
                      label="Not necessary"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                      value="Not necessary"
                      onChange={e => {
                        setDemoField({
                          ...demoField,
                          centralizedControl: e.target.value,
                        })
                      }}
                    />
                  </div>

                  <button disabled={!loadingState} className="btn btn-primary rounded-0 text-center px-4 py-2 mt-5 mb-5 w-100">
                    Submit
                  </button>
                </Row>
              </Form>
            </div>
          </Row>
        </div>
        <PrimaryDemoBanner />
      </Layout>
    </div>
  )
}

export default BookDemo

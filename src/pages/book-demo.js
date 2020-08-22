import React, {useState} from "react"
import Layout from "../components/layout"
import { Row, Form } from "react-bootstrap"
import PrimaryDemoBanner from "../components/primary-demo-banner"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const BookDemo = () => {
  const [phone, setPhone] = useState()

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
              <Form>
                <Row>
                  <div className="col-md-6 mb-2">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="mb-0 pb-0">Last name</Form.Label>
                      <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                  </div>

                  {/*  */}
                  <div className="col-md-6 mb-2">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="mb-0 pb-0">First name</Form.Label>
                      <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                  </div>
                  <div className="col-12 mb-2">
                    <PhoneInput
                    inputClass="w-100"
                      country={"ng"}
                      value={phone}
                      onChange={phone => console.log(phone)}
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
                      <Form.Label className="mb-0 pb-0">
                        Email Address
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="What’s your email address?"
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-12 mb-2">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="mb-0 pb-0">
                        Business name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter business name"
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-12 mb-2">
                    <Form.Group controlId="formBasicCheckbox">
                      <p>
                        What solution are you interested in (select all that
                        apply)
                      </p>
                      <Form.Check
                        className="mb-1"
                        type="checkbox"
                        label="Functionality for customers to book appointments online before coming into your facility"
                      />
                      <Form.Check
                        className="mb-1"
                        type="checkbox"
                        label="Organized and automatically ordered customer queues in your facility"
                      />
                      <Form.Check
                        className="mb-1"
                        type="checkbox"
                        label="To get customer feedback after their interactions with your agents"
                      />
                      <Form.Check
                        className="mb-1"
                        type="checkbox"
                        label="Business intelligence and reporting about on-site customer service operations"
                      />
                      <Form.Check
                        className="mb-1"
                        type="checkbox"
                        label="Advertisements in-facility on digital screens and queue tickets"
                      />
                      <Form.Check
                        className="mb-1"
                        type="checkbox"
                        label="Others"
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-12 mb-2">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="mb-0 pb-0">
                        Number of sites where the system is required
                      </Form.Label>
                      <Form.Control type="number" placeholder="0" />
                    </Form.Group>
                  </div>

                  <div className="col-md-12 mb-2">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="mb-0 pb-0">
                        How many customer counters are in each site
                      </Form.Label>
                      <Form.Control type="number" placeholder="0" />
                    </Form.Group>
                  </div>

                  <div className="col-md-12 mb-2">
                    <p>
                      Do you want centralized control and monitoring of all
                      sites?
                    </p>
                    <Form.Check
                      type="radio"
                      label="Yes"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check
                      type="radio"
                      label="Not necessary"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                    />
                  </div>

                  <button className="btn btn-primary rounded-0 text-center px-4 py-2 mt-5 mb-5 w-100">
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

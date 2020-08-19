import React from "react"
import Layout from "../components/layout"
import HeroImg from "../images/online-appointment-booking/online-appointment-img.png"
import AboutImage from "../images/online-appointment-booking/about-img.png"
import QMSBenefitImage from "../images/online-appointment-booking/system-online-booking.png"
import BookingTabImg from "../images/online-appointment-booking/how-it-works-tab.png"
import BookingPhoneImg from "../images/online-appointment-booking/how-it-works-mobile.png"
import EltajImage from "../components/eltaj-image/eltaj-image"
import LightTitleBox from "../components/light-title-box"
import InfoSection from "../components/info-section/info-section"
import SecondaryDemoBanner from "../components/secondary-demo-banner"
import AssetInfoBox from "../components/asset-info-box/asset-info-box"
import virtualQueueing from "../data/virtual-queueing"
import PrimaryDemoBanner from "../components/primary-demo-banner"
import EltajList from "../components/eltaj-list"

const onlineAppointmentBooking = () => {
  return (
    <div>
      <Layout>
        {/* hero section */}
        <section className="pb-5">
          <div className="container py-5 my-5">
            <div className="row">
              <div className="col-md-6 my-auto pb-md-0 pb-5">
                <div className="row">
                  <div className="col-md-10">
                    <div className="mb-3">
                      <LightTitleBox text="ONLINE APPOINTMENT BOOKING" />
                    </div>
                    <h1 className="mb-4">
                      Where the queuing problem stops. The solution starts
                      online.
                    </h1>
                    <h6 className="text-muted">
                      Customers can book appointments online before proceeding
                      to branches or better still, start the appointment online.
                    </h6>
                  </div>
                </div>
                <button className="btn btn-primary rounded-0 text-center px-4 mt-5">
                  Book a free demo
                </button>
              </div>

              <div className="col-md-6">
                <EltajImage image={HeroImg} isImageRight={true} />
                {/* <img src={HeroImg} alt="Hero" className="img-fluid" /> */}
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section className="container">
          <InfoSection textFirst={false} image={AboutImage}>
            <h6 className="text-muted mb-3">
              Your enterprise can reduce customer waiting time, reduce
              congestion and manage customer flow in your branches with an
              online solution.
            </h6>
            <h6 className="text-muted mb-3">
              With ELTAJ’s online appointment booking software, a customer
              proceeds to book an appointment on your website or app before
              visiting your branches to receive a service.
            </h6>
          </InfoSection>
        </section>

        {/*  */}
        <section className="container my-5">
          <InfoSection textFirst={true} image={BookingTabImg}>
            <h2 className="mb-4">
              It’s simple and smart. Here’s how it works:
            </h2>
            <div>
              <EltajList text="Online booking: Customers choose the preferred service center, preferred service and available time slots. Then, receive reminders on the due date and time." />
              <EltajList text="Self Check-in: Customers receive a check-in link through reminder. Alternatively, customers scan QR codes on doors to check-in." />
              <EltajList text="Arrival: Customers are notified with a messaging service when it’s their turn to be served." />
            </div>
          </InfoSection>
        </section>

        {/*  */}
        <section className="container my-5">
          <InfoSection textFirst={false} image={BookingPhoneImg}>
            <h2 className="mb-4">There’s more to it</h2>
            <div>
              <EltajList text="Calendar: Have an overview of all your customer bookings and time." />
              <EltajList text="Reminder: Alert customers of appointment date and time." />
              <EltajList text="Video appointment: Allow customers to chat with your representatives virtually." />
              <EltajList text="Customer journey management: Manage customer workflow and monitor their behaviour at every touchpoint to improve customer experience and increase staff efficiency." />
              <EltajList text="Data and analytics : Make insightful business decisions with customer behaviour data." />
            </div>
          </InfoSection>
        </section>

        {/* Main Benefit */}
        <section className="container my-5">
          <InfoSection textFirst={true} image={QMSBenefitImage}>
            <h2 className="mb-4">
              Main Benefits of the Online Booking appointment
            </h2>
            <div>
              <EltajList text="Reduce customer wait time" />
              <EltajList text="Manage customer flow" />
              <EltajList text="Increase social distancing" />
              <EltajList text="Gain actionable insights on customers" />
              <EltajList text="Boost customers happiness" />
              <EltajList text="Increase brand loyalty" />
              <EltajList text="Boost Revenue" />
            </div>
          </InfoSection>
        </section>
        <PrimaryDemoBanner />
      </Layout>
    </div>
  )
}

export default onlineAppointmentBooking

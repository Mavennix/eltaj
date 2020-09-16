import React from "react"
import Layout from "../components/layout"
import PrimaryDemoBanner from "../components/primary-demo-banner"
import LightTitleBox from "../components/light-title-box"

const privacyPolicy = () => {
  return (
    <Layout>
      <div
        className="d-flex align-items-center justify-content-center flex-column"
        style={{
          backgroundImage: "radial-gradient( #FFFFFF, #CBCEFF)",
          minHeight: "50vh",
        }}
      >
        <h3>Privacy Policy</h3>
        <h5 className="text-primary">Home | Privacy</h5>
      </div>
      <div className="container text-center">
        <div>
          <div className="my-5">
            <div className="my-3">
              <LightTitleBox text="INFORMATION WE COLLECT" />
            </div>
            <h2>What information do we collect?</h2>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h6 className=" text-center mb-4 text-muted">
                We collect information from you when you subscribe to our
                newsletter, respond to a survey, fill out a form or place a
                support request. When ordering or registering on our site, as
                appropriate, you may be asked to enter your name, e-mail
                address, phone number or credit card information. You may,
                however, visit our site anonymously.
              </h6>
            </div>
          </div>
        </div>

        <div>
          <div className="my-5">
            <div className="my-3">
              <LightTitleBox text="USE OF INFORMATION" />
            </div>
            <h2>What do we use your information for?</h2>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h6 className=" text-center mb-4 text-muted">
                Any of the information we collect from you may be used to
                personalize your experience and help us to better respond to
                your individual needs, improve our website based on your
                feedback, or improve customer service by responding to your
                customer service requests and support needs.
              </h6>
              <h6 className=" text-center mb-4 text-muted">
                Your information, whether public or private, will not be sold,
                exchanged, transferred, or given to any other company for any
                reason whatsoever, without your consent, other than for the
                express purpose of delivering the purchased product or service
                requested it going to be used only to proceed transactions or
                administer a contest, promotion, survey or other site feature.
              </h6>
              <h6 className=" text-center mb-4 text-muted">
                The email address you provide for order processing, may be used
                to send you information and updates pertaining to your order, in
                addition to receiving occasional company news, updates, related
                product or service information, sending periodic emails ,etc.
              </h6>
              <h6 className=" text-center mb-4 text-muted">
                Note: If at any time you would like to unsubscribe from
                receiving future emails, we include detailed unsubscribe
                instructions at the bottom of each email.
              </h6>
            </div>
          </div>
        </div>

        <div>
          <div className="my-5">
            <div className="my-3">
              <LightTitleBox text="INFORMATION PROTECTION" />
            </div>
            <h2>How do we protect your information?</h2>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h6 className=" text-center mb-4 text-muted">
                We implement a variety of security measures to maintain the
                safety of your personal information when you place an order or
                enter, submit, or access your personal information.
              </h6>
              <h6 className=" text-center mb-4 text-muted">
                We offer the use of a secure server. All supplied
                sensitive/credit information is transmitted via Secure Socket
                Layer (SSL) technology and then encrypted into our Payment
                gateway providers database only to be accessible by those
                authorized with special access rights to such systems, and are
                required to keep the information confidential.
              </h6>
              <h6 className=" text-center mb-4 text-muted">
                After a transaction, your private information (credit cards,
                national ID number, financials, etc.) will not be kept on file
                for more than 60 days.
              </h6>
            </div>
          </div>
        </div>

        <div>
          <div className="my-5">
            <div className="my-3">
              <LightTitleBox text="COOKIES" />
            </div>
            <h2>Do we use cookies?</h2>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h6 className=" text-center mb-4 text-muted">
                We do not use cookies.
              </h6>
            </div>
          </div>
        </div>

        <div>
          <div className="my-5">
            <div className="my-3">
              <LightTitleBox text="DISCLOSURE" />
            </div>
            <h2>Do we disclose any information to outside parties?</h2>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h6 className=" text-center mb-4 text-muted">
                We do not sell, trade, or otherwise transfer to outside parties
                your personally identifiable information. This does not include
                trusted third parties who assist us in operating our website,
                conducting our business, or servicing you, so long as those
                parties agree to keep this information confidential. We may also
                release your information when we believe release is appropriate
                to comply with the law, enforce our site policies, or protect
                ours or others rights, property, or safety. However,
                non-personally identifiable visitor information may be provided
                to other parties for marketing, advertising, or other uses.
              </h6>
            </div>
          </div>
        </div>

        <div>
          <div className="my-5">
            <div className="my-3">
              <LightTitleBox text="THIRD PARTY" />
            </div>
            <h2>Third party links</h2>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h6 className=" text-center mb-4 text-muted">
                Occasionally, at our discretion, we may include or offer third
                party products or services on our website. These third party
                sites have separate and independent privacy policies. We
                therefore have no responsibility or liability for the content
                and activities of these linked sites. Nonetheless, we seek to
                protect the integrity of our site and welcome any feedback about
                these sites.
              </h6>
            </div>
          </div>
        </div>

        <div>
          <div className="my-5">
            <div className="my-3">
              <LightTitleBox text="ONLINE ONLY" />
            </div>
            <h2>Online Privacy Policy Only</h2>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h6 className=" text-center mb-4 text-muted">
                This online privacy policy applies only to information collected
                through our website and not to information collected offline.
              </h6>
            </div>
          </div>
        </div>
        <div>
          <div className="my-5">
            <div className="my-3">
              <LightTitleBox text="CONTENT" />
            </div>
            <h2>Your Consent</h2>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h6 className=" text-center mb-4 text-muted">
                By using our site, you consent to our websites privacy policy.
              </h6>
            </div>
          </div>
        </div>
        <div>
          <div className="my-5">
            <div className="my-3">
              <LightTitleBox text="PRIVACY CHANGES" />
            </div>
            <h2>Changes to our Privacy Policy</h2>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h6 className=" text-center mb-4 text-muted">
                If we decide to change our privacy policy, we will post those
                changes on this page, and/or send an email notifying you of any
                changes.
              </h6>
            </div>
          </div>
        </div>
      </div>

      <PrimaryDemoBanner />
    </Layout>
  )
}

export default privacyPolicy

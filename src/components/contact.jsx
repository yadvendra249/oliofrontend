import React from "react";

const Contact = () => (
  <section id="contact" className="ftco-section contact-section">
    <div className="container">
      <div className="row block-9 justify-content-center mb-5">
        <div className="col-md-8 mb-md-5">
          <h2 className="text-center">If you got any questions <br />please do not hesitate to send us a message</h2>
          <form className="bg-light p-5 contact-form">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea className="form-control" rows="7" placeholder="Message"></textarea>
            </div>
            <div className="form-group">
              <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

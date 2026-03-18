import React from 'react';

function Awards() {
  return (
    <section className="container mt-2 mb-2 p-5">
      <div className="row align-items-center">
        {/* Left Side: Content */}
        <div className="col-12 col-md-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          
          <div className="mb-4">
            <h4 className="fs-4">Customer-first always</h4>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~₹6 lakh crores
              of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fs-4">No spam or gimmicks</h4>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.{" "}
              <a href="#" style={{ textDecoration: "none" }}>Our philosophies.</a>
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fs-4">The Zerodha universe</h4>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fs-4">Do better with money</h4>
            <p className="text-muted">
              With initiatives like <a href="#" style={{ textDecoration: "none" }}>Nudge</a> and{" "}
              <a href="#" style={{ textDecoration: "none" }}>Kill Switch</a>, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Right Side: Image and Links */}
        <div className="col-12 col-md-6 text-center">
          <img
            src="/media/images/ecosystem.png"
            alt="Ecosystem illustration"
            style={{ width: "90%" }}
            className="mb-3"
          />
          <div className="d-flex justify-content-center gap-5">
            <a href="#" style={{ textDecoration: "none" }}>
              Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Press Logos */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <img
            src="media/images/press-logos.png"
            alt="Press logos"
            className="img-fluid"
            style={{ width: "70%"}}
          />
        </div>
      </div>
    </section>
  );
}

export default Awards;
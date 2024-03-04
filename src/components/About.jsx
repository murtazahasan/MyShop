import React from "react";

function About() {
  return (
    <>
      <div className="container-fluid pb-2" style={{ backgroundColor: "#faeeff54" }}>
        <div className="px-4 py-5 text-center">
          <h1 className="display-3 fw-bold text-body-emphasis">A<span className="border-bottom border-2 py-1 border-dark ">bou</span>t</h1>
          <div className="col-lg-6 mx-auto">
            <h4
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            className="py-3">
              Proin eu ante vel mauris molestie dignissim non eget nunc. Integer
              ac massa orci. Suspendisse vulputate semper nunc eget.
            </h4>
            <p 
            data-aos="zoom-in"
            data-aos-duration="14 00"
            className="lead mt-3 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu
              ante vel mauris molestie dignissim non eget nunc. Integer ac massa
              orci. Suspendisse vulputate semper nunc eget rhoncus. Ut sit amet
              porta sem, interdum tincidunt libero. Nulla vel quam lobortis,
              varius est scelerisque, dapibus nisl.
            </p>
          </div>
        </div>

        <div
          className="container pb-5 rounded-3"
          style={{ backgroundImage: `url("about1.jpg")` }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center text-white">
              <div className="col-md-6 pt-3">
                <div className="pb-3 text-center">
                  <span 
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="pt-3">THE MISSION</span>
                  <h1 className="fw-bolder fs-1">
                    At the heart of everything, we set out to offer the best
                    quality.
                  </h1>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pt-5 text-center">
                  <p className="fw-bold fs-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin eu ante vel mauris molestie dignissim non eget nunc.
                    Integer ac massa orci. Suspendisse vulputate semper nunc
                    eget rhoncus. Aenean placerat facilisis ex, eu laoreet lorem
                    convallis.
                  </p>
                  <p className="fw-bold fs-4">
                    Phasellus gravida justo a lectus tempus lacinia. Ut mollis
                    scelerisque ultricies. Aenean facilisis efficitur magna, at
                    feugiat massa bibendum at. Etiam ut venenatis urna.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5" style={{ backgroundColor: "#f7fdff75" }}>
        <h1 className="text-center display-3 fw-bold">How i<span className="border-bottom border-2 border-dark">t S</span>tarted</h1>
        <p 
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        className="text-center   pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="about2.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="image"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Vel mauris molestie dignissim
              </h1>
              <p 
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              className="lead fw-bold">
                Proin eu ante vel mauris molestie dignissim non eget nunc.
                Integer ac massa orci.
              </p>
              <p>
                Praesent vel faucibus ligula. Sed sit amet ipsum eget velit
                aliquet faucibus. Maecenas et odio id turpis sollicitudin
                pulvinar sit amet vitae augue. Phasellus nec ultricies arcu.
                Quisque efficitur tellus sit amet bibendum molestie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

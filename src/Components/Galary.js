import React from 'react';
import g1 from '../assests/images/g1.jpg';
import g2 from '../assests/images/g2.jpg';
import g3 from '../assests/images/g3.jpg';
function Galary() {
  return (
    <>
      <div className="container">
        <div className="text-title text-center">
          <h2> OUR GALARY</h2>
          <hr className="w-50 mx-auto" />
        </div>
        <div className="row">
          <div className="col-md-4 col-10 mx-auto mb-md-0 mb-3 ">
            <figure>
              <img src={g1} alt="not found" className="img-fluid" />
            </figure>
          </div>
          <div className="col-md-4 col-10 mx-auto mb-md-0 mb-3 ">
            <figure>
              <img src={g1} alt="not found" className="img-fluid " />
            </figure>
          </div>
          <div className="col-md-4 col-10 mx-auto mb-md-0 mb-3 ">
            <figure>
              <img src={g1} alt="not found" className="img-fluid " />
            </figure>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-10 mx-auto mb-md-0 mb-3 ">
            <figure>
              <img src={g2} alt="not found" className="img-fluid" />
            </figure>
          </div>
          <div className="col-md-4 col-10 mx-auto mb-md-0 mb-3 ">
            <figure>
              <img src={g2} alt="not found" className="img-fluid " />
            </figure>
          </div>
          <div className="col-md-4 col-10 mx-auto mb-md-0 mb-3 ">
            <figure>
              <img src={g2} alt="not found" className="img-fluid " />
            </figure>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-10 mx-auto mb-md-0 mb-3 ">
            <figure>
              <img src={g3} alt="not found" className="img-fluid" />
            </figure>
          </div>
          <div className="col-md-4 col-10 mx-auto mb-md-0 mb-3 ">
            <figure>
              <img src={g3} alt="not found" className="img-fluid " />
            </figure>
          </div>
          <div className="col-md-4 col-10 mx-auto mb-md-0 mb-3 ">
            <figure>
              <img src={g3} alt="not found" className="img-fluid " />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default Galary;

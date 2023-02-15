import React from 'react';
import aboutimg from '../assests/images/alex-suprun-A53o1drQS2k-unsplash.jpg';
function About() {
  return (
    <>
      <div className="About container-fluid py-5">
        <div className="text-title text-center">
          <h2> ABOUT US</h2>
          <hr className="w-50 mx-auto" />
        </div>
        <div className="container ">
          <div className="row py-5">
            <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3 ">
              <figure>
                <img src={aboutimg} alt="not found" />
              </figure>
            </div>
            <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3 ps-md-5 pt-5">
              <h2>My Journey</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                alias ducimus non tempore corporis cumque aspernatur temporibus
                placeat quaerat earum?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laborum mollitia sit officia, beatae illo ea
                assumenda atque corporis molestias voluptas esse sapiente eos
                iusto necessitatibus odio repellendus distinctio facilis
                reprehenderit.
              </p>
              <button className="bg-red-800 text-white py-2 px-2">
                CHECK MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

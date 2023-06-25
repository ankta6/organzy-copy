import React from 'react'
import './AboutUs.css'

import color from '../../res/AboutUsImages/color.jpg'
import girl from '../../res/AboutUsImages/girl.jpeg'

function AboutUs() {
  
  return (
    <>
      <div class="div-ab">
        <div className="div3-ab"></div>
        <div class="div2-ab">
          <h2>ABOUT ME & MY BRAND</h2>
        </div>
      </div>
      <div className="div4-ab">
        <div className="text1-ab">
          <h1>HUMBLE BEGINNINGS</h1>
          <p>
            Organzy was started in 2020 with a simple question – “Can great
            handmade skincare products be created and sold for a fair price?”.
            Over the years we noticed the cost of handmade soaps started to sore
            while the size of the soaps was starting to shrink. We began our
            journey to answer this question.
          </p>
          <h1>OUR BIG MISSION</h1>
          <p>
            Organzy was started in 2020 with a simple question – “Can great
            handmade skincare products be created and sold for a fair price?”.
            Over the years we noticed the cost of handmade soaps started to sore
            while the size of the soaps was starting to shrink. We began our
            journey to answer this question.
          </p>
        </div>
        <br></br>

        <img src={color} alt="imagehere" class="imag2-ab" />
      </div>
      <br></br>
      <div className="div5-ab">
        <br></br>
        <p class="text2-ab">
          Since our products are handmade, we know exactly what goes into each
          one. Each ingredient is carefully selected and used to deliver the
          finest possible results. We go to great lengths to make certain that
          our materials, processing and packaging are as kind to the environment
          as they are to your skin.
          <br />
          <br />
          All of us at Organzy are well aware that you have many choices when
          purchasing your skincare products. We have a clear focus on providing
          you with world class customer care, consistency in the soap making
          process, packaging, and delivery.
          <br />
          <br />
          Most of our products are considered “natural” as they don’t contain
          any harsh chemicals. It is also worthy to note that we source all of
          our raw materials from cruelty-free suppliers
        </p>
        <h1>HANDMADE? YOU BET!! </h1>
        <p class="text2-ab">
          We control and govern the entire process of making our products from
          start to finish. Therefore, ensuring quality and safety.
          <br />
          <br />
          All of the products made by Organzy are handmade by our own hands
          using the “melt and pour” method of making soap.
          <br />
          <br />
          Organzy is a handcrafted artisan skincare company specializing in
          making every product one batch at a time. No two batches are
          absolutely alike or identical, encouraging us to believe that of our
          all our products as works of art!
        </p>
        <h1>OUR BRAND CULTURE</h1>
        <p class="text2-ab">
          Our brand culture grasps strong roots and a game-changing vision. It
          stems from an array of impacts and values:
          <br />
          <br />
          <br />
          <ul>
            <li>
              – Our hunt for natural and organic skincare that is gentle on skin
              & doesn’t cost the earth (literally).
            </li>
            <li>– Our passion for transparency.</li>
            <li>– Our vision to create an honest and clean brand.</li>
            <li>
              – Our dedication and commitment to establishing sustainable
              practices.
            </li>
            <li>– Our relationship with our people. WE ARE FAMILY.</li>
          </ul>
        </p>
        <h1>FINAL WORD </h1>
        <p class="text2-ab">
          Like proud parents, we’d love nothing more than for our lovely
          products to take pride of place in your home.Countless hours have gone
          into making our products as gorgeous on the inside as they are on the
          outside. We hope you love using them as much as we loved creating
          them.
        </p>
        <img src={girl} alt="imagehere" className="imag3-ab" />
      </div>
      <div className="div6-ab">
        <br></br>
      </div>
    </>
  );
}

export default AboutUs;
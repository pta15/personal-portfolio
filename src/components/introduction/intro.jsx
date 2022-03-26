import React from 'react';
import "./intro.css";
import Person from "../../img/person.png"


const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
          <div className="i-left-wrapper">
              <h2 className="i-intro">Hello my name is</h2>
              <h1 className="i-name">Abdihafid Abdirahman</h1>
              <div className="i-title">
                  <div className="i-title-wrapper">
                      <div className="i-title-item">Web developer</div>
                      <div className="i-title-item">UI/UX Designer</div>
                  </div>
              </div>
            <div className="i-descr">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit in eros vitae aliquet. Curabitur posuere enim et quam interdum porttitor. 
                Phasellus elementum lectus neque, et dignissim metus ultrices sed.
            </div>
          </div>  
        </div>
      <div className="i-right">
          <div className='i-bg'></div>
          <img src={Person} alt="person pic" className="i-img" />
      </div>
    </div>
  )
}

export default Intro;

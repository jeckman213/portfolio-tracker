import React, { Component } from 'react';
import Header from "./header";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />  
        <section className="intro">
          <div className="cards">  
            <h2><i className="fas fa-compass"></i>< br/>Chart a path!</h2>
            <p>Your future is limitless! /s You will enjoy watching stocks go up and down and learning from the slings and arrows of outrageous fortune</p> 
          </div>
          <div className="cards">  
            <h2><i className="fas fa-kiwi-bird"></i>< br/>A Lot To Learn</h2>
            <p>Why not lose fake money BEFORE real money? We want you to use portfolios to master the skills needed to make money without risk</p> 
          </div>
          <div className="cards">  
            <h2><i className="fas fa-id-card-alt"></i>< br/>Group Z Developed</h2>
            <p> Developed by the students in Group Z. Please enjoy this tool and help us make it better by providing feedback via one of the contact channels below</p> 
          </div>
        </section>
        
        <section>
        <i className="fas fa-frog"></i>
          <h2>Jump start your financial education</h2>
          <div>
           <p>Teachers consistently tell us about the positive influence our programs have on their students. The educational impact of Portfolios™ is unmatched, with proven increases in student attendance, engagement and class participation, and improved academic performance and financial behavior.</p> 
           <br />
           <p>Build a fundamental understanding of investing while providing students with real-world skills and practice in math, English language arts, economics, social studies, and other subjects.  </p>
          </div>
        </section>

        <section className="standalone-img">
          <div className="image"></div>
        </section>

        <section>
          <i className="fas fa-map-marker-alt"></i>
          <h2>Group Z at Ualbany</h2>
          <div>
            <p>At UAlbany, excellence is defined by our nationally renowned programs, our focus on career preparation and our strategic location – all of which work together to help you not only meet your goals, but succeed in ways you never thought possible.</p>
            <br />
            <p> Located in New York’s capital city, the University at Albany is the premier public research University in the Capital Region and offers more than 17,000 students the expansive opportunities of a large university in an environment designed to foster individual success.</p> 
          </div>
        </section>

        <section className="standalone-img">
          <div className="image2"></div>
        </section>
      </React.Fragment>
    );
  }
}

export default Main;

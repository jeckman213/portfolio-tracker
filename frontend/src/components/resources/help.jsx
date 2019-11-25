import React from 'react';
import Accordion from './Accordion';

function Help(){
  return (
    <section style={ style.section } className="Description">
      <div>
        <h2>FAQ</h2>
        <div>
          <Accordion allowMultipleOpen>
            <div label='How do I make an account?'>
              <p>
                1. Click on Signup at the top 
                <br/>
                2. Submit all the necessary information
                <br/>
                3. Finally, click on the Sign up button and you should be set
              </p>
            </div>
            <div label='How do I login?'>
              <p>
                1. Click on log in at the top
                <br/>
                2. Enter username and password
                <br/>
                3. Click on login and you should be at the homepage
              </p>
            </div>
            <div label='What can I do with a Portfolio?'>
              <p>
                You can look at stock prices, save them and compare them
                as if you were buying them as if you were buying them in real life
              </p>
            </div>
            <div label='What analytical tools are available?'>
              <p>
                Portfolio$ offers a variety of charts (pie, high-low, line graph), 
                helpful analytics (simple moving average, moving average convergence / divergence),
                assets and portfolios comparisons, and there's more that can be discovered as you explore
              </p>
            </div>
            <div label='What currencies can I use?'>
              <p>
                We currently offer prices to be viewed USD($), Euros(€), British Pound(£),
                Chinese Yuan (¥), and Japanese Yen (¥)
              </p>
            </div>
            <div label='Does Portfolio$ work on mobile?'>
              <p>
                Yes, Portfolio$ works on any up to date mobile browser
              </p>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

const style = {
  section : {
    fontSize : '1.5rem'
  }
}

export default Help;

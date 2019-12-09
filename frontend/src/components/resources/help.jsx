import React from 'react';
import Accordion from './accordion';

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
                as if you were buying them in real life
              </p>
            </div>
            <div label='What analytical tools are available?'>
              <p>
              Portfolio$ offers a variety of charts (pie, high-low, line graph), helpful analytics 
              (simple moving average, moving average convergence / divergence), assets and portfolios 
              comparisons, and there's more than that you will discover as you explore
              </p>
            </div>
            <div label='How do you add assets?'>
              <p>
              First you’ll have to click on a portfolio you want to add an asset to. Then you can add assets 
              by pressing the plus sign on the bottom right corner. You’ll have to enter the company symbol, 
              the number of shares and the date you want the stock to be from (It could be its present day price 
              or a previous date). Then you just simply press create.
              </p>
            </div>
            <div label='My assets aren’t displaying after I add them?'>
              <p>
              Try refreshing the page and your portfolio should update promptly. The need to update the page is being addressed in our next release.
              </p>
            </div>
            <div label='How do I manage my assets?'>
              <p>
              When you have assets in your portfolio and you want to make changes just press the edit button at the bottom and you’ll be able to change 
              the purchase date of a selected asset and the amount of shares you have. You also have the option to delete assets.
              </p>
            </div>
            <div label='What can the charts/graphs do?'>
              <p>
              With the charts and graphs you can see up to date pricing information on a company’s stock and its price history. 
              You can go back to any date and zoom in and out on graphs.
              </p>
            </div>
            <div label='Can I share my portfolios?'>
              <p>
              Yes, you’ll be able to share your portfolios by providing the URL of your dashboard, which will let anyone using it 
              to see all of your portfolios that you have made public.
              </p>
            </div>
            <div label='What currencies can I use?'>
              <p>
              We currently offer prices to be viewed as USD($), Euros(€), British Pound(£), Chinese Yuan (¥), and Japanese Yen (¥). 
              You’ll be able to select one when signing up and will be able to change your default preference at any time in the settings.
              </p>
            </div>
            <div label='I’m experiencing longer response time than usual'>
              <p>
              Try either signing out and back in, or clearing your cookies. If the issue persists please contact our developers. 
              </p>
            </div>
            <div label='I have questions / concerns that weren’t addressed on this page'>
              <p>
              Please feel free to contact our development team at speck@albany.edu and you will be contacted by a member of our team 
              that will be more than happy to accommodate you
              </p>
            </div>
            <div label='Does Portfolio$ work on mobile?'>
              <p>
              Yes, portfolio$ works on any up to date mobile browser. If you use an ad blocking browser make sure to enable scripts as 
              it may prevent proper access to some features. 
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

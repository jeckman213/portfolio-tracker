import React, { Component } from 'react';
import Accordion from './Accordion';

class Help extends Component {
    render() {
        return (

            <section className="Description">
                <div>
                    <h2>FAQ</h2>
                    <div>
                        <Accordion allowMultipleOpen>
                            <div label='How do I Sign up?'>
                                <p>
                                    <strong>1. Click on Signup at the top 
                                    <br/>
                                    2. Submit all the necessary information
                                    <br/>
                                    3. Finally, click on the Sign up button and you should be set
                                    </strong>
                                </p>
                            </div>
                            <div label='How do I log in?'>
                                <p>
                                    <strong>1. Click on log in at the top
                                    <br/>
                                    2. enter username and password
                                    <br/>
                                    3. Click on login and you should be at the homepage</strong>
                                </p>
                            </div>
                            <div label='What can I do with a Portfolio?'>
                                <p>
                                    <strong>You can look at stock prices, save them and compare them
                                as if you were buying them as if you were buying them in real life</strong>
                                </p>
                            </div>
                            <div label='What analytical tools are available?'>
                                <p>
                                    <strong>Portfolio$ offers a variety of charts (pie, high-low, line graph), 
                                helpful analytics (simple moving average, moving average convergence / divergence),
                                assets and portfolios comparisons, and there's more that can be discovered as you explore</strong>
                                </p>
                            </div>
                            <div label='What currencies can I use?'>
                                <p>
                                    <strong>We currently offer prices to be viewed USD($), Euros(€), British Pound(£),
                                Chinese Yuan (¥), and Japanese Yen (¥) </strong>
                                </p>
                            </div>
                            <div label='Does Portfolio$ work on mobile?'>
                                <p>
                                    <strong>Yes, portfolio$ works on any up to date mobile browser</strong>
                                </p>
                            </div>
                        </Accordion>
                    </div>
                </div>
            </section>

        );
    }
}





export default Help;
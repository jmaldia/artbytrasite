import React, { Component } from 'react';

class Contact extends Component {
    // TODO
    // Change to state Component
    // Add email state
    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (event) => {
        console.log(event.target.value)
        this.setState({ email: event.target.value })
    }

    render() {
        return (
            <div className="contact">
                <div id="mc_embed_signup">
                <form                                       
                    action="https://artbytra.us18.list-manage.com/subscribe/post?u=c06cc0149c6cd09190ed8e651&amp;id=b77563ae6b" 
                    method="post" 
                    id="mc-embedded-subscribe-form" 
                    name="mc-embedded-subscribe-form" 
                    className="validate" 
                    target="_blank" 
                    noValidate
                >
                        <div id="mc_embed_signup_scroll">
                            <h2>Subscribe to our mailing list</h2>
                            <div className="indicates-required">
                                <span className="asterisk">*</span> indicates required
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-EMAIL">
                                    Email Address  <span className="asterisk">*</span>
                                </label>
                                <input type="email" value={this.state.email} name="EMAIL" className="required email" id="mce-EMAIL" onChange={(event) => this.handleSubmit(event) } ></input>
                            </div>
                            <div id="mce-responses" className="clear">
                                <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                                <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                            </div>
                            <div className="clear">
                                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
        }
}

export default Contact

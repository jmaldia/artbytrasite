import React, { Component } from 'react';

class Contact extends Component {
    // TODO
    // Change to state Component
    // Add email state
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (event) => {
        console.log(event.target)
        if (event.target.name === "NAME") {
            this.setState({ name: event.target.value })
        } else if (event.target.name === "EMAIL") {
            this.setState({ email: event.target.value })
        } else {
            this.setState({ message: event.target.value })
        }
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
                            <h2>Leave a message</h2>
                            <div className="indicates-required">
                                <span className="asterisk">*</span> indicates required
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-NAME">
                                    Name  <span className="asterisk">*</span>
                                </label>
                                <input type="text" value={this.state.name} name="NAME" className="required" id="mce-NAME" onChange={(event) => this.handleSubmit(event) } ></input>

                                <label htmlFor="mce-EMAIL">
                                    Email Address  <span className="asterisk">*</span>
                                </label>
                                <input type="email" value={this.state.email} name="EMAIL" className="required email" id="mce-EMAIL" onChange={(event) => this.handleSubmit(event) } ></input>

                                <label htmlFor="mce-MESSAGE">
                                    Message 
                                </label>
                                <input type="textarea" value={this.state.message} name="MESSAGE" className="" id="mce-MESSAGE" onChange={(event) => this.handleSubmit(event) } ></input>
                            </div>
                            <div id="mce-responses" className="clear">
                                <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                                <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                            </div>
                            <div className="clear">
                                <input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" className="button"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
        }
}

export default Contact
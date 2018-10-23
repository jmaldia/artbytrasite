import React from 'react'

const Contact = props => {
    // TODO
    // Change to state Component
    // Add email state
    return (
        <div className="Contact">
            <div id="mc_embed_signup">
                <form id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                        <h2>Subscribe to our mailing list</h2>
                        <div className="indicates-required">
                            <span className="asterisk">*</span> indicates required
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">
                                Email Address  <span className="asterisk">*</span>
                            </label>
                            <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" onChange={(event) => props.handleSubmitToMailchimp(event)} ></input>
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

export default Contact
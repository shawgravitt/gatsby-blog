import * as React from "react"
import { Link } from "gatsby"
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class MailchimpForm extends React.Component {

  state = {
    name: null,
    email: null,
  }

  _handleChange = e => {
      console.log({
        [`${e.target.name}`]: e.target.value,
      })
      this.setState({
        [`${e.target.name}`]: e.target.value,
      })
    }

    _handleSubmit = e => {
      e.preventDefault()

      console.log('submit', this.state)

      addToMailchimp(this.state.email, this.state)
          .then(({ msg, result }) => {
              console.log('msg', `${result}: ${msg}`)

              if (result !== 'success') {
                  throw msg
              }
              // alert(msg)
              document.getElementById("response").innerHTML = msg;
          })
          .catch(err => {
              console.log('err', err)
              // alert(err)
              document.getElementById("response").innerHTML = err;
          })
    }

  render () {
    return (
      <div id="emailSubscribe">
        <form onSubmit={this._handleSubmit}>
          <label htmlFor="email">Subscribe</label>
          <input
            id="email"
              type="email"
              onChange={this._handleChange}
              placeholder="email"
              name="email"
              className="email"
          />
          <input className="btn" type="submit" value="submit" />
          <div id="response"></div>
          <small style={{textAlign: `center`, display: `block`,}}>I respect your <Link to="/privacy">privacy</Link>.</small>
        </form>
      </div>
    )
  }
}
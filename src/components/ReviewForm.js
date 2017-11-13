import React, {Component} from 'react'
import Reviews from './Reviews'

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_id: Math.random(),
      name: '',
      score: '',
      review: ''
    }

    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      name: '',
      score: '',
      review: ''
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      name: this.state.name,
      meal: this.state.score,
      review: this.state.review
    };
    this.props.trackInput(formPayload);
    this.handleClearForm(event);
  }


  handleInputChange(event) {
    let
    this.setState({ [event.target.name]: event.target.value })
  }


  render() {
    return (
      <form className="callout" onSubmit={this.handleFormSubmit}>
        <Reviews
          content={this.state.name}
          label='Score'
          name='name'
          handlerFunction={this.handleInputChange}
        />
        <Reviews
          content={this.state.score}
          label='Score'
          name='score'
          handlerFunction={this.handleInputChange}
        />
        <Reviews
          content={this.state.review}
          label='Review'
          name='review'
          handlerFunction={this.handleInputChange}
        />
        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default ReviewForm

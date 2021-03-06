import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWiki } from '../actions/wikiActions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWiki(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit }>
        <input
          required
          autoFocus
          placeholder="Search"
          value={ this.state.term }
          onChange={ this.onInputChange } />
        <button>Submit</button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  fetchWiki: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWiki }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

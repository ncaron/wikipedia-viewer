import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Wiki from '../components/Wiki';

class WikiList extends Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  renderList(item) {
    return (
      <Wiki item={ item } />
    );
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.wikiSearch.map((item, index) => <Wiki item={ item } key={ index } />)}
        </ul>
      </div>
    );
  }
}

WikiList.propTypes = {
  wikiSearch: PropTypes.array.isRequired
};

function mapStateToProps({wikiSearch}) {
  return {wikiSearch};
}

export default connect(mapStateToProps)(WikiList);

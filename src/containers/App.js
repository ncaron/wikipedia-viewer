import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import SearchBar from './SearchBar';
import WikiList from './WikiList';
import Random from '../components/Random';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <Random />
        <WikiList />
        <Footer />
      </div>
    );
  }
}

export default connect(null)(App);

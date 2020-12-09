import React, { Component } from "react";
import { connect } from "react-redux";
// import CardList from "../components/CardList";
// import SearchBox from "../components/SearchBox";
// import Scroll from "../components/Scroll";
import "./App.css";
// import ErrorBoundary from "../components/ErrorBoundary";
import { setSearchField, requestRobots } from "../actions";
// import LoadingSpinner from "./loading.gif";
// import Header from "../components/Header";
import MainPage from "../components/MainPage";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
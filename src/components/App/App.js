import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import ApiContext from '../../ApiContext'
import dummystore from '../../dummystore'
// import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import Nav from '../Nav/Nav'
import Calendar from 'react-calendar'

import CalendarPage from '../../routes/CalendarPage/CalendarPage'
import DashboardPage from '../../routes/DashboardPage/DashboardPage'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import RecipePage from '../../routes/RecipePage/RecipePage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import ResultPage from '../../routes/ResultPage/ResultPage'
import SearchPage from '../../routes/SearchPage/SearchPage'
import './App.css'


class App extends Component {
  state = {
    date: new Date(),
    complexResults: [],
    // will need to change to a singular object
    recipeInfo: [],
    searchResults: [],
    users: [],
    // will need to update state on log in
    user: dummystore.users[0],
    hasError: false,
    error: ""
  }
  // will replace with fetch from backend
  componentDidMount() {
    this.setState(dummystore)
  }

  // handlers, will move to own file later
  handleSearchResults = results => {
    this.setState({
      searchResults: results
    })
  }
  handleUpdateDate = date => {
    const yesterday = new Date(new Date().setDate(new Date().getDate()-1));
    console.log("Yesterday: ", yesterday)
    if (date < yesterday) {
      this.setState({
        hasError: true,
        error: "Pick a future time"
      })
    } else {
      this.setState({
        date,
        hasError: false,
        error: ""
      })
    }
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    const value = {
      date: this.state.date,
      error: this.state.error,
      recipes: this.state.complexResults,
      recipeInfo: this.state.recipeInfo,
      searchResults: this.state.searchResults,
      users: this.state.users,
      user: this.state.user,
      updateSearchResults: this.handleSearchResults,
      updateDate: this.handleUpdateDate
    }
    return (
      <ApiContext.Provider value={value}>
        <div className="App container">
          <Nav />
          <main>
            {this.state.hasError && <p className='red'>{this.state.error}</p>}
            <Switch>
              <PublicOnlyRoute
                exact
                path={'/'}
                component={LandingPage}
              />
              <PublicOnlyRoute
                path={'/login'}
                component={LoginPage}
              />
              <PublicOnlyRoute
                path={'/register'}
                component={RegistrationPage}
              />
              {/* PrivateRoute */}
              <Route
                path={'/calendar'}
                component={CalendarPage}
              />
              {/* PrivateRoute */}
              <Route
                path={'/dashboard'}
                component={DashboardPage}
              />
              {/* private route */}
              <Route
                path={'/search'}
                exact
                component={SearchPage}
              />
              {/* PrivateRoute */}
              <Route
                path={'/search/results'}
                component={ResultPage}
              />
              {/* PrivateRoute */}
              <Route
                path={'/recipe/:recipeId'}
                component={RecipePage}
              />
              <Route
                component={NotFoundPage}
              />
            </Switch>
          </main>
        </div>
      </ApiContext.Provider>
    )
  }
}

export default App;

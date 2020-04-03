import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import ApiContext from '../../contexts/ApiContext'
// import UserService from '../../services/user-api-service'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import Nav from '../Nav/Nav'

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
    date: this.convertUTCDateToLocalDate(new Date()),
    complexResults: [],
    recipeInfo: {},
    searchResults: [],
    users: [],
    user: {},
    hasError: false,
    error: ""
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  // handlers, will move to own file later
  handleSearchResults = results => {
    this.setState({
      searchResults: results
    })
  }
  convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
    return newDate;
  }
  handleUpdateDate = date => {
    const localDate = this.convertUTCDateToLocalDate(date)
    const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
    if (localDate < yesterday) {
      this.setState({
        hasError: true,
        error: "Pick a future time"
      })
    } else {
      this.setState({
        date:date,
        hasError: false,
        error: ""
      })
    }
  }
  handleUpdateUser = user => {
    return this.setState({
      user
    })
  }

  render() {
    console.log(this.state.date)
    const value = {
      date: this.state.date,
      error: this.state.error,
      recipes: this.state.complexResults,
      recipeInfo: this.state.recipeInfo,
      searchResults: this.state.searchResults,
      users: this.state.users,
      user: this.state.user,
      updateSearchResults: this.handleSearchResults,
      updateDate: this.handleUpdateDate,
      updateUser: this.handleUpdateUser,
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
              <PrivateRoute
                path={'/calendar'}
                component={CalendarPage}
              />
              <PrivateRoute
                path={'/dashboard'}
                component={DashboardPage}
              />
              <PrivateRoute
                path={'/search'}
                exact
                component={SearchPage}
              />
              <PrivateRoute
                path={'/search/results'}
                component={ResultPage}
              />
              <PrivateRoute
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

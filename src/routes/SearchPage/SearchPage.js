import React, { Component } from 'react'
import SearchForm from './../../components/SearchForm/SearchForm'

export class SearchPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleSearchSuccess = () => {
    this.props.history.push('/search/results')
  }

  render() {
    return (
      <section className="container">
        <div className="headline">
        <h2>Find Recipes</h2>
        </div>
        <SearchForm onSearchSuccess={this.handleSearchSuccess}/>
      </section>
    )
  }
}

export default SearchPage

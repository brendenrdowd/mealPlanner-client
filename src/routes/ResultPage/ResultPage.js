import React, { Component } from 'react'
import ApiContext from '../../contexts/ApiContext'
import Recipe from './../../components/Recipe/Recipe'

export class ResultPage extends Component {
  static contextType = ApiContext;

  render() {
    const { searchResults} = this.context;
    const recipeList = searchResults.map(r => {
      // replace props with context?
      return <Recipe key={r.id} recipe={r} />
    })
    return (
      <section className="container">
        <header>
          <h2>Results</h2>
        </header>
        <ul>
          {recipeList}
        </ul>
      </section>
    )
  }
}

export default ResultPage

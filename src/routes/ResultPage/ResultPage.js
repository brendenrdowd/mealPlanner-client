import React, { Component } from 'react'
import ApiContext from '../../contexts/ApiContext'
import Recipe from './../../components/Recipe/Recipe'

export class ResultPage extends Component {
  static contextType = ApiContext;

  render() {
    const { searchResults} = this.context;
    let error;
    if (searchResults.length === 0){
      error = <li className="red">No results found</li>
    }
    const recipeList = searchResults.map(r => {
      return <Recipe key={r.id} recipe={r} inDatabase={false} />
    })
    return (
      <section className="container">
        <div className="headline">
          <h2>Results</h2>
        </div>
        <ul>
          {error ? error : recipeList}
        </ul>
      </section>
    )
  }
}

export default ResultPage

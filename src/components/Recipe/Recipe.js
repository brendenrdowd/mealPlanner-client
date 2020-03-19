import React, { Component } from 'react'
import './Recipe.css'
import { Link } from 'react-router-dom'
import ApiContext from './../../ApiContext'

export class recipe extends Component {
  static contextType = ApiContext;
  render() {
    const { image, title, id } = this.props.recipe
    return (
      <li className="recipe-item">
        <Link className="link" to={'/recipe/' + id}>
          <div className="card">
            <img src={image} alt={title} />
            <div className="container card-body">
              <h4>{title}</h4>
            </div>
          </div>
        </Link>
      </li>
    )
  }
}

export default recipe

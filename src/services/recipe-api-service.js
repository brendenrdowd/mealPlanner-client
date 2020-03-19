// import TokenService from '../services/token-service'
import config from '../config'

const RecipeApiService = {
  getSearchResults(q) {
    let queryString = "";
    for (let key in q) {
      if (queryString !== "") {
        queryString += "&";
      }
      queryString += key + "=" + encodeURIComponent(q[key]);
    }
    return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?${queryString}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": config.FOOD_API_KEY
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  // getTodaysRecipes from backend
  // getRecipes() {
  //   return fetch(`${config.API_ENDPOINT}/recipes`, {
  //     headers: {
  //       'authorization': `basic ${TokenService.getAuthToken()}`,
  //     },
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // },
  // getRecipeInfoById from food API
  getRecipeInfo(recipeId) {
    return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": config.FOOD_API_KEY
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  // save recipe to calendar
  // postReview(thingId, text, rating) {
  //   return fetch(`${config.API_ENDPOINT}/reviews`, {
  //     method: 'POST',
  //     headers: {
  //       'authorization': `bearer ${TokenService.getAuthToken()}`,
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       thing_id: thingId,
  //       rating,
  //       text,
  //     }),
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // }
}

export default RecipeApiService

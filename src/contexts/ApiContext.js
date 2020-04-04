import React from 'react'

export default React.createContext({
  date:"",
  error:"" || {},
  complexResults:[],
  // will need to change recipeInfo to an {}
  recipeInfo:[],
  searchResults: [],
  users:[],
  user:{},
  updateSearchResults: () => {},
  updateDate: () => {},
  updateUser: () => {},
  toggleSideDrawer: () => {},
  coseBackdrop: () => {}
})
import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import MovieList from './components/movieList/MovieList';
import Topnav from './components/topnav/Topnav';
import MovieMetaDataView from './components/movieMetaDataView/MovieMetaDataView';
class App extends Component{

  render(){
    return(
    <BrowserRouter>
        <Topnav/>
        <Route exact path="/" component={MovieList}/>
        <Route exact path="/postermeta" component={MovieMetaDataView}/>
    </BrowserRouter>
    )
  }
}
export default App;

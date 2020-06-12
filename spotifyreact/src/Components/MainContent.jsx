import React, { Component } from 'react';
import {BrowserRouter as Router , Route } from 'react-router-dom'
import AlbumPage from './AlbumPage'
import Gallery from './Gallery'
import SongList from './SongList';
class MainContent extends Component {
    render() { 
        return ( 
            <div>
            <div className="main d-flex justify-content-center">
                <div className="main-nav">
                <nav class="navbar navbar-expand-lg navbar-dark">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">TRENDING<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-3" href="podcast.html">PODCAST</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-3" href="Genre.html">MOODS AND GENRES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-3" href="newrealeases.html">NEW RELEASES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-3" href="discover.html">DISCOVER</a>
              </li>
            </ul>
          </div>
          </nav>
            </div>
            </div>
            <Router>
              <Route path='/' exact component={Gallery}></Route>
            <Route path='/albumpage/:artist'  exact component={AlbumPage}></Route>
            <Route path='/songlist/:id' exact component={SongList}></Route>
            </Router>
            </div>
         );
    }
}
 
export default MainContent;
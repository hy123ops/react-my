import React, { Component } from 'react'
import Nav from './Nav'
import MovieList from './MovieList'
import ComingList from './ComingList'
import { Route, Switch,Redirect } from 'react-router-dom'

export default class HotMovie extends Component {
  render() {
    return (
      <>
        <Nav></Nav>
        <div className="hot">
          <Switch>
            <Route
              path="/home/movie/hot"
              render={()=>(
                <MovieList></MovieList>
              )}
            />
            <Route
              path="/home/movie/coming"
              render={()=>(
                <ComingList></ComingList>
              )}
            />
            <Redirect
            exact
             from="/"
             to="/home/movie/hot"
            />
          </Switch>
        </div>
      </>
    )
  }
}

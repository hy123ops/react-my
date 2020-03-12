import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import City from './City/City'
import Search from "./Search/Search"
import MovSearch from "./Search/MovSearch"
import ComingDetail from "./MovieDetail/ComingDetail"
import CinemaDetail from './MovieDetail/CinemaDetail'
import MyOrder from './My/MyOrder'
import Card from './My/Card'
import Coupon from './My/Coupon'
import Store from './My/Store'
import Map from './MovieDetail/Map'

export default class Index extends Component {
    render() {
        return (
            <>
            <Switch>
              <Route
                path="/index/city"
                render={() => (
                    <City></City>
                  )}
              />
              <Route
                path="/index/search"
                render={() => (
                    <Search></Search>
                  )}
              />
              <Route
                path="/index/movsearch"
                render={() => (
                    <MovSearch></MovSearch>
                  )}
              />
              <Route
                path="/index/comdetail/:id"
                render={() => (
                    <ComingDetail></ComingDetail>
                  )}
              />
              <Route
                path="/index/cinemadetail/:id"
                render={() => (
                    <CinemaDetail></CinemaDetail>
                  )}
              />
              <Route
                path="/index/map"
                render={() => (
                    <Map></Map>
                  )}
              />
              <Route
                path="/index/myOrder"
                render={() => (
                    <MyOrder></MyOrder>
                  )}
              />
              <Route
                path="/index/card"
                render={() => (
                    <Card></Card>
                  )}
              />
              <Route
                path="/index/coupon"
                render={() => (
                    <Coupon></Coupon>
                  )}
              />
              <Route
                path="/index/store"
                render={() => (
                    <Store></Store>
                  )}
              />
            </Switch>
            </>
        )
    }
}

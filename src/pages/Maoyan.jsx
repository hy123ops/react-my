import React, { Component } from 'react'
import {Route,Redirect,withRouter} from 'react-router-dom'
import Layout from './home/Layout'
import Index from './Index/Index'
@withRouter
 class Maoyan extends Component {
    render() {
        return (
            <>
                <Route 
                    path="/home"
                    component={Layout}/>
                <Route 
                    path="/index"
                    component={Index}
          
                />
                <Redirect
                    from="/"
                    to="/home/movie/hot"
                />

            </>
        )
    }
}
export default Maoyan
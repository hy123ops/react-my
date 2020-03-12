import React, { Component } from 'react'
// import {Route,Switch} from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import Page from './Page'
// import Shows from './Shows'

export default class Cinema extends Component {
    render() {
        // console.log(this.props);
        
        return (
            <>
            {/* <Switch>
                <Route
                    path="/cinema"
                    render={()=>(
                        <div> */}
                            <Header></Header>
                            <Nav></Nav>
                            <Page></Page>
                        {/* </div>
                    )}
                />
                <Route
                    path="/cinema/shows"
                    component={Shows}
                />
            </Switch> */}
            </>
        )
    }
}

import React, { Component } from 'react'
import Header from './Hearer'
import MyMain from './MyMain'

export default class MyCenter extends Component {
    render() {
        return (
            <>
              <Header></Header>
              <MyMain></MyMain>
            </>
        )
    }
}

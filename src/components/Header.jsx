import React, { Component } from 'react'
import { HearderWrap } from './styledShop'

export default class Header extends Component {
    render() {
        return (
            <HearderWrap>
                <div className="nav-wrap-left">
                    <div className="back"><i className="icon-back"></i></div>
                </div>
                <h1 className="nav-header">{this.props.type}</h1>
            </HearderWrap>
        )
    }
}

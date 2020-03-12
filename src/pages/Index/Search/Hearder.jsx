import React, { Component } from 'react'
import { HearderWrap } from './styledSearch'
import { withRouter } from 'react-router-dom'

class Hearder extends Component {
    handleGoback = () => {
        this.props.history.goBack()
    }
    render() {
        return (
            <HearderWrap>
                <div className="nav-wrap-left"  onClick={this.handleGoback}>
                    <div className="back"><i className="icon-back"></i></div>
                </div>
                <h1 className="nav-header">猫眼电影</h1>
            </HearderWrap>
        )
    }
}
export default withRouter(Hearder)
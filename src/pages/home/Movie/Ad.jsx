import React, { Component } from 'react'
import {
    AdWrap
  } from './styledMovie'

export default class Ad extends Component {
    render() {
        return (
            <>
            <AdWrap>
                <img className="img noneBg logo" alt="logo" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png" width="42" height="42"/>
                <div className="app-name-desc"><div className="app-name">猫眼</div><div className="app-desc">在线选座，热门影讯，爱上看电影</div></div>
                <div className="btn-open-app">立即打开</div>
          </AdWrap>
            </>
        )
    }
}

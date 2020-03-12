import React, { Component } from 'react'
import PageList from './PageList'
import {PageWrap} from './styleCinema'

export default class Page extends Component {

    render() {
        return (
            <>
            <PageWrap className="page-wrap">
              <PageList></PageList>
            </PageWrap>
            </>
        )
    }
}

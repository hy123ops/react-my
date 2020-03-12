import React, { Component } from 'react'
import Header from './Header'
import Ad from './Ad'
// import Loading from '@/Loading'

import HotMovie from './HotMovie'

// let isUnmount=false

export default class Movie extends Component {
    render() {
        return (
            <>
              <Header></Header>
              <Ad></Ad>
              <HotMovie></HotMovie>
              {/* <Loading></Loading> */}
              {/* {
                  this.state.isShowLoading  && <loading ></loading>
              } */}
            </>
        )
    }
    // componentDidMount(){
    //     let wrapper=document.querySelector(".am-tabs-pane-wrap")
    //     let height=wrapper.clientHeight
    //     wrapper.onscroll=(e)=>{
    //         let scrollHeight=wrapper.scrollHeight
    //         let top=wrapper.scrollTop
    //         if(height+top+100>=scrollHeight &&  this.state.isUpdateData){
    //          // loading 
    //          // this.state.isUpdateData
    //          // axios 請求数据
    //         }
    //     }
    // }
    componentWillUnmount(){
        this.setState({})
    }
}

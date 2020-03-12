import React, { Component } from 'react'
import Header from '@/Header'
import Nothing from 'assets/images/nothing.png'

export default class Store extends Component {
    render() {
        return (
            <>
                <Header type="我的周边商品"></Header>
                <div className="nothing" style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "100%" }}>
                    <img src={Nothing} alt="" style={{ width: "87px", height: "100px" }} />
                    <span style={{fontSize:'16px',color:'#666'}}>您最近还没有新订单，赶快去下一单吧</span>
                </div>
            </>
        )
    }
}

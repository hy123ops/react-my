import React, { Component } from 'react'
import { MyMainWrap } from './styledMy'
import { withRouter } from 'react-router-dom'

class MyMain extends Component {

    handleMyOrder = (value) => {
        return this.props.history.push(value)
      }

    render() {
        return (
            <MyMainWrap>
                <div className="my-center">
                    <div className="header ">
                        <img src="https://img.meituan.net/avatar/2ca4479a181554bfe1ac09562bca72213312.jpg" className="head-icon" alt="" />
                        <div className="name">噜啦啦</div>
                    </div>
                    <div className="container">
                        <div className="group">
                            <div className="orders">
                                <div className="title">我的订单</div>
                                <div className="mb-outline-b title-line"></div>
                                <div className="list list-two">
                                    <div className="order-item movie" onClick={this.handleMyOrder.bind(this, '/index/myOrder')}>
                                        <div className="dy"><p>电影</p></div>
                                    </div>
                                    <div className="order-item store"  onClick={this.handleMyOrder.bind(this, '/index/store')}>
                                        <div className="sc"><p>商城</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group">
                            <div className="coupon item mb-line-b"  onClick={this.handleMyOrder.bind(this, '/index/coupon')}>
                                <div>
                                    <span>优惠券</span>
                                </div>
                            </div>
                            <div className="coupon item mb-line-b"  onClick={this.handleMyOrder.bind(this, '/index/card')}>
                                <div>
                                    <span>折扣卡</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MyMainWrap>
        )
    }
}
export default withRouter(MyMain)
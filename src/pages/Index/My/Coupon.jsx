import React, { Component } from 'react'
import Header from '@/Header'
import { CouponWrap } from './styledMy'
import { get } from 'utils/http'


export default class Coupon extends Component {

    state = {
        couponlist: []
    }

    async componentDidMount() {
        let result = await get({
            url: '/api/ajax/couponList'
        })
        // console.log(result);
        this.setState({
            couponlist: result.couponlist
        })
    }

    render() {
        return (
            <>
                <Header type="我的优惠券"></Header>
                <CouponWrap>
                    <div className="coupon">
                        <div className="input-wrapper">
                            <input type="text" placeholder="请输入优惠券密码" className="coupon-psw" />
                        </div>
                        <div className="add-coupon">添加</div>
                    </div>
                    <div className="container">
                        <ul className="coupon-list">
                            {
                                this.state.couponlist.map((value) => {
                                    return (
                                        <li className="coupon-item outTime" key={value.code}>
                                            <div className="coupon-left">
                                                <div className="left-wrapper">
                                                    <div className="desc">{value.value}<span>元</span></div>
                                                    <div className="type">代金券</div>
                                                </div>
                                            </div>
                                            <div className="coupon-right">
                                                <div className="title line-ellipsis">{value.title}</div>
                                                <div className="limitDesc">{value.limitDesc}</div>
                                                <div className="range-status-container">
                                                    <div className="range-status range-has-border">{value.rangeTime}</div>
                                                </div>
                                            </div>
                                            <div className="business-tag"><span>商家</span></div>
                                        </li>
                                    )
                                }
                                )
                            }
                        </ul>
                    </div>
                </CouponWrap>
            </>
        )
    }
}

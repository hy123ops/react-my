import React, { Component } from 'react'
import Header from '@/Header'
import { MyorderWrap } from './styledMy'
import { get } from 'utils/http'

export default class MyOrder extends Component {

    state = {
        order: []
    }

    async componentDidMount() {
        let result = await get({
            url: '/api/ajax/myOrderList'
        })
        // console.log(result);
        this.setState({
            order: result.orderlist
        })
    }

    render() {
        return (
            <>
                <Header type="我的电影订单"></Header>
                <MyorderWrap>
                    <div className="order-list">
                        {
                            this.state.order.map((value) => {
                                return (
                                    <div className="order-item mb-line-tb" key={value.id}>
                                        <div className="order-title mb-line-b" key={value.cinema.id}>
                                            <div className="cinema-name line-ellipsis">{value.cinema.name}</div>
                                        </div>
                                        <div className="order-detail-link">
                                            <div className="order-info">
                                                <img src={value.movie.img.replace(/w\.h/, '114.160')} alt="" />
                                                <div className="order-desc">
                                                    <div className="movie-name line-ellipsis">{value.movie.name}&nbsp;&nbsp;<span>2张</span></div>
                                                    <div className="showTime line-ellipsis">{value.show.showTime}</div>
                                                    <div className="position line-ellipsis">{value.seats.hallName}
                                                    {
                                                        value.seats.list.map( (value) => {
                                                            return (
                                                                <span key={value.columnId}>{value.rowId}排{value.columnId}座</span>
                                                            )
                                                        }
                                                        )
                                                    }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="order-more  mb-line-t">
                                            <div className="price">总价：<span>{value.order.sellMoney}元</span></div>
                                            <div className="status">{value.otherStatus}</div>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </MyorderWrap>
            </>
        )
    }
}

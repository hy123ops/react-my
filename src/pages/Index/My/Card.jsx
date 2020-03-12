import React, { Component } from 'react'
import Header from '@/Header'
import {NoCard} from './styledMy'

export default class Card extends Component {
    render() {
        return (
            <>
                <Header type="我的折扣卡"></Header>
                <NoCard className="no-card">
                    <img className="img" src="//s0.meituan.net/bs/?f=myfe/canary:/img/card.png" alt="暂无会员卡" />
                    <div >暂无影院会员卡</div>
                    <div className="btn">
                        <div>
                            <span>查看本城市全部会员卡</span>
                        </div>
                    </div>
            </NoCard>
            </>
        )
    }
}

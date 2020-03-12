import React, { Component } from 'react'
import { SpecialWrap } from './styleCinema'
import { get } from 'utils/http'

let isUmmount = false
export default class Special extends Component {

    state = {
        special: [],
        hallType: [],
        current: 0,
        count: 0,
        hallType1: null,//特殊厅
        serviceId: null,//特色功能
    }

    async componentDidMount() {
        let result = await get({
            url: '/api/ajax/filterCinemas?ci=1&optimus_uuid=B2C6B1B0E28311E999F36DF42CFF7219228B0E2F2A3B46419E009285BC35D23C&optimus_risk_level=71&optimus_code=10'
        })
        // console.log(result.brand.subItems);

        if (!isUmmount) this.setState({
            special: result.service.subItems,
            hallType: result.hallType.subItems
        })
    }

    handleClick = (value, hallType1) => {
        return () => {
            this.setState({
                current: value,
                hallType1
            })
        }
    }

    handleTClick = (value, serviceId) => {
        return () => {
            this.setState({
                count: value,
                serviceId
            })
        }
    }
    handleChoose = () => {
        this.props.handleChoose({
            hallType: this.state.hallType1,
            serviceId: this.state.serviceId
        })
    }

    handleRest = () => {
        this.setState({
            current: 0,
            count: 0,
        })
    }


    render() {
        isUmmount = false;
        return (
            <SpecialWrap>
                <div className="special-content">
                    <div className="item-title">特色功能</div>
                    <div className="item-list">
                        {
                            this.state.special.length && this.state.special.map((value, index) => {
                                return (
                                    this.state.current === index
                                        ? <div className="item chosen" key={value.id} data-type="service">{value.name}</div>
                                        : <div className="item" onClick={this.handleClick(index, value.id)} key={value.id} data-type="service">{value.name}</div>
                                )
                            })
                        }
                    </div>
                    <div className="item-title">特殊厅</div>
                    <div className="item-list">
                        {
                            this.state.hallType.length && this.state.hallType.map((value, index) => {
                                return (
                                    this.state.count === index
                                        ? <div className="item chosen" key={value.id} data-type="hallType">{value.name}</div>
                                        : <div className="item" onClick={this.handleTClick(index, value.id)} key={value.id} data-type="hallType">{value.name}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="special-btn">
                    <span className="btn" id="cancel-btn" onClick={this.handleRest}>重置</span>
                    <span className="btn" id="confirm-btn" onClick={this.handleChoose}>确定</span>
                </div>
            </SpecialWrap>
        )
    }
    componentWillUnmount() {
        isUmmount = true
    }
}

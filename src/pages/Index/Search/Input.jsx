import React, { Component } from 'react'
import { SearchWrap } from './styledSearch'
import { get } from 'utils/http'
import Nothing from 'assets/images/nothing.png'
import { withRouter } from 'react-router-dom'

class Input extends Component {

    state = {
        list: []
    }

    hangleChang = async (e) => {
        let searchInput = document.getElementsByClassName('search-input')
        let key = searchInput[0].value
        let result = await get({
            url: `/api/ajax/search/`,
            params: {
                kw: key,
                cityId: 1,
                stype: 2
            }
        })
        this.setState({
            list: Object.keys(result).length !== 0 ? result.cinemas.list : []
        })
    }


    hangleInput = (value) => {
        let searchInput = document.getElementsByClassName('search-input')
        let delInput = document.getElementsByClassName('del-input')
        if (searchInput[0].value) {
            delInput[0].style.display = "block"
        } else {
            delInput[0].style.display = "none"
        }
    }

    handleDel = (value) => {
        let searchInput = document.getElementsByClassName('search-input')
        let delInput = document.getElementsByClassName('del-input')
        // let searchResult = document.getElementsByClassName('searchResult')
        if (searchInput[0].value) {
            searchInput[0].value = ''
            delInput[0].style.display = "none"
            // searchResult[0].innerHTML = ''
        }
    }

    handleGoback = () => {
        this.props.history.goBack()
    }


    render() {
        let list = this.state.list ? this.state.list : []
        return (
            <SearchWrap>
                <div className="search-wrapper">
                    <div className="search-header">
                        <div className="input-wrapper">
                            <img className="search-icon" src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png" alt="" />
                            <input className="search-input" type="text" placeholder="搜影院" onInput={this.hangleInput} onChange={this.hangleChang} />
                            <img className="del-input" style={{ display: "none" }} onClick={this.handleDel}
                                src="http://s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/close.png" alt="" />
                        </div>
                        <div className="cancel" id="cancel" data-to="search"  onClick={this.handleGoback}>取消</div>
                    </div>
                    <div className="cinemaSerachMod">
                        <ul className="searchResult">
                            {
                                list.length
                                    ? list.map((value) => {
                                        return (
                                            <li className="C-list" key={value.id} data-to="Cinemadetail">
                                                <div className="title-block box-flex middle">
                                                    <div className="title line-ellipsis">
                                                        <span>{value.nm}</span>
                                                        <span className="price-block">
                                                            <span className="price">{value.sellPrice}</span><span className="q">元起</span>
                                                        </span>
                                                    </div>
                                                    <div className="location-block box-flex">
                                                        <div className="flex line-ellipsis">{value.addr}</div>
                                                        <div className="distance">{value.distance}</div>
                                                    </div>
                                                    {
                                                        value.endorse === 0 && value.allowRefund === 0 && value.snack === 0 ? null :
                                                            <div className="label-block">
                                                                {value.allowRefund === 1 ? <div className="allowRefund">退</div> : null}
                                                                {value.endorse === 1 ? <div className="endorse">改签</div> : null}
                                                                {value.snack === 1 ? <div className="snack">小吃</div> : null}
                                                                {value.vipTag === "折扣卡" ? <div className="vipTag">折扣卡</div> : null}
                                                                {value.hallType ? <div className="hallType">{value.hallType[0]}</div> : null}
                                                                {value.hallType ? <div className="hallType">{value.hallType[1]}</div> : null}
                                                                {/* {value.hallType ? <div className="hallType">{value.hallType[2]}</div> : null} */}
                                                            </div>
                                                    }
                                                </div>
                                            </li>
                                        )
                                    })
                                    : <li className="nothing" style={{display:"flex",justifyContent: "center",flexDirection: "column",alignItems: "center", height: "50vh"}}>
                                        <img src={Nothing} alt="" style={{width:"87px",height:"100px"}}/>
                                    </li>
                            }
                        </ul>
                        <ul className="play"></ul>
                    </div>
                </div>
            </SearchWrap>
        )
    }
}
export default withRouter(Input)
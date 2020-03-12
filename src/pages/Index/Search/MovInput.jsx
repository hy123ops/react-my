import React, { Component } from 'react'
import { SearchWrap } from './styledSearch'
import { get } from 'utils/http'
import { withRouter } from 'react-router-dom'
// import Nothing from 'assets/images/nothing.png'

class MovInput extends Component {

    state = {
        list: [],
        total: null,
        dylist: [],
        dytotal: null
    }

    hangleChang = async (e) => {
        let searchInput = document.getElementsByClassName('search-input')
        let key = searchInput[0].value
        let result = await get({
            url: `/api/ajax/search/`,
            params: {
                kw: key,
                cityId: 1,
                stype: -1
            }
        })
        this.setState({
            list: result.cinemas ? result.cinemas.list : [],
            total: result.cinemas ? result.cinemas.total : null,
            dylist: result.movies ? result.movies.list : [],
            dytotal: result.movies ? result.movies.total : null
        })
        // console.log(result);

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
        // let cinemaSerachMod = document.getElementsByClassName('cinemaSerachMod')
        if (searchInput[0].value) {
            searchInput[0].value = ''
            delInput[0].style.display = "none"
            // cinemaSerachMod[0].innerHTML = ''
        }
    }

    handleGoback = () => {
        this.props.history.goBack()
    }

    render() {
        let list = this.state.list ? this.state.list : []
        let dylist = this.state.dylist ? this.state.dylist : []
        return (
            <SearchWrap>
                <div className="search-wrapper">
                    <div className="search-header">
                        <div className="input-wrapper">
                            <img className="search-icon" src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png" alt="" />
                            <input className="search-input" type="text" placeholder="搜影院、电影" onInput={this.hangleInput} onChange={this.hangleChang} />
                            <img className="del-input" style={{ display: "none" }} onClick={this.handleDel}
                                src="http://s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/close.png" alt="" />
                        </div>
                        <div className="cancel" id="cancel" data-to="search" onClick={this.handleGoback}>取消</div>
                    </div>
                    {
                        dylist.length || list.length
                            ? <div className="cinemaSerachMod">
                                <div className="dy">
                                    <div className="play">
                                        {
                                            dylist.length ? <h3>电影/电视剧/综艺</h3> : null
                                        }
                                        <div className="list">
                                            {
                                                dylist.length
                                                    ? dylist.splice(0, 3).map((value) => {
                                                        return (
                                                            <div className="movie cell" key={value.id}>
                                                                <img className="poster" src={value.img.replace(/w\.h/, '128.180')} alt="" />
                                                                <div className="info">
                                                                    <div className="name-score">
                                                                        <p className="name">
                                                                            <span className="one-line">{value.nm}</span>
                                                                            {value.version?(value.version.match(/\dd/) ? <span className="version"> {value.version.match(/\dd/)[0].toUpperCase()} </span> : null):null}
                                                                            {value.version?(value.version.match(/imax/) ? <span className="max">IMAX </span> : null):null}
                                                                        </p>
                                                                        {
                                                                            value.showst === 3
                                                                                ? <span className="score"><span className="num">{value.sc}</span>分</span>
                                                                                : value.wish === 0?null:<span className="wish"><span className="num">{value.wish}</span>人想看</span>
                                                                        }
                                                                    </div>
                                                                    <div className="detail-section">
                                                                        <div className="detail-items">
                                                                            <p className="ename one-line">{value.enm}</p>
                                                                            <p className="catogary">{value.cat}</p>
                                                                            <p className="release">{value.rt}</p>
                                                                        </div>
                                                                        <div className="button-block">
                                                                            {
                                                                                value.showst === 0
                                                                                ?null
                                                                                :<div className={value.showst === 3 ? 'btn' :value.showst === 1?'look': 'yu'}><span className="fix">{value.showst === 3 ? '购票' :value.showst === 1?'想看': '预售'}</span></div>
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                    )
                                                    : null
                                            }
                                            {
                                                this.state.dytotal === null
                                                    ? <div></div>
                                                    : <div className="more-result" data-target="movies" key={this.state.dytotal}>查看全部{this.state.dytotal}部影视剧</div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="yy">
                                    <ul className="searchResult">
                                        {
                                            list.length ? <h3>影院</h3> : null
                                        }
                                        {
                                            list.length
                                                ? list.splice(0, 3).map((value) => {
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
                                                                            {value.hallType ? <div className="hallType">{value.hallType[2]}</div> : null}
                                                                        </div>
                                                                }
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                                : null
                                        }
                                        {
                                            this.state.total === null
                                                ? <div></div>
                                                : <div className="more-result" data-target="movies" key={this.state.total}>查看全部{this.state.total}家电影院</div>
                                        }
                                    </ul>
                                </div>
                            </div>
                            : null
                    }
                </div>
            </SearchWrap>
        )
    }
}
export default withRouter(MovInput)
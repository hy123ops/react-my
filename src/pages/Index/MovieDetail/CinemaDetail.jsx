import React, { Component } from 'react'
import { CinemaDetailWrap } from './styled'
import addr from 'assets/images/addr.png'
import { get } from 'utils/http'
import { withRouter } from 'react-router-dom'
import { Carousel, WingBlank } from 'antd-mobile';

let isUmmount = false
class CinemaDetail extends Component {

    state = {
        movies: [],
        cinemaData: [],
        dealList: [],
        backgroundUrl: null,
        crruntIndex: 0,
        crruntShowIndex: 0,
        isGetData: false,
    }

    async componentDidMount() {
        let result = await get({
            url: `/api/ajax/cinemaDetail`,
            params: {
                cinemaId: this.props.match.params.id,
                optimus_uuid: 'B2C6B1B0E28311E999F36DF42CFF7219228B0E2F2A3B46419E009285BC35D23C',
                optimus_risk_level: 71,
                optimus_code: 10,
            }
        })
        // console.log(result.showData.movies[0].shows);

        if (!isUmmount) this.setState({
            movies: result.showData.movies,
            cinemaData: result.cinemaData,
            dealList: result.dealList.dealList,
            backgroundUrl: result.showData.movies[0].img.replace("w.h", "148.208"),
            isGetData: true
        })
    }

    handleGoback = () => {
        this.props.history.goBack()
    }

    handleMap = (value) => {
        return this.props.history.push(value)
    }
    handleChange = (from, to) => {
        let backgroundUrl = this.state.movies[to].img.replace("w.h", "148.208")
        this.setState({
            backgroundUrl,
            crruntIndex: to
        })
    }
    handleChangeShow = (index) => {
        return () => {
            this.setState({
                crruntShowIndex: index
            })
        }
    }

    render() {
        isUmmount = false;
        
        return (
            <CinemaDetailWrap>
                <div>
                    <div className="cinemaShow-head">
                        <div className="nav-wrap-left" onClick={this.handleGoback}><div className="back"><i className="icon-back"></i></div></div>
                        <h1 className="nav-head">{this.state.cinemaData.nm}</h1>
                    </div>

                    <div className="body-wrap">
                        <div className="cinema-wrap">
                            <div className="cinema-block">
                                <div className="cinema-info">
                                    <div className="title line-ellipsis">{this.state.cinemaData.nm}</div>
                                    <div className="location line-ellipsis">{this.state.cinemaData.addr}</div>
                                    <div className="location-icon" onClick={this.handleMap.bind(this, '/index/map')}>
                                        <img src={addr} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cinema-nav">
                            <div className="movlist">
                                <div className="swiper-container">
                                    <div className="box-z"></div>
                                    <div className="box" style={{ background: `url(${this.state.backgroundUrl})` }}></div>
                                    <div className=" m-father " style={{
                                        position: "relative",
                                        zIndex: 9,
                                        paddingTop: "40px",
                                        touchAction: "none"
                                    }} >
                                        <WingBlank>
                                            <Carousel className="space-carousel"
                                                frameOverflow="visible"
                                                cellSpacing={30}
                                                slideWidth="75px"
                                                beforeChange={this.handleChange}
                                                dots={false}
                                            >
                                                {this.state.movies.map((val, index) => (
                                                    <img src={val.img.replace("w.h", "148.208")} className={index === this.state.crruntIndex ? "post" : ""} style={{ border: index === this.state.crruntIndex ? "2px solid #fff" : '', transition: "all .3s", transform: index === this.state.crruntIndex ? "scale(1.2)" : "scale(1)" }} key={val.id} alt="" />
                                                ))}
                                            </Carousel>
                                        </WingBlank>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="movdes">
                            {
                                this.state.isGetData && (<div className="movde">
                                    <p className="movnm">{this.state.movies[this.state.crruntIndex].nm}&nbsp;&nbsp;<span className="pf">{this.state.movies[this.state.crruntIndex].sc}</span><span className="fen">分</span></p>
                                    <p className="movDel">{this.state.movies[this.state.crruntIndex].desc}</p>
                                </div>)
                            }
                            <div className="showDays">
                                <div className="swiper-container1 detail-data">
                                    <div className="swiper-wrapper a">
                                        {
                                            this.state.isGetData && this.state.movies[this.state.crruntIndex].shows.map((val,index) => {
                                                return (
                                                    this.state.crruntShowIndex===index
                                                    ?<div key={index}  className="swiper-slide today chosen">{val.dateShow}</div>
                                                    :<div key={index}  className="swiper-slide today" onClick={this.handleChangeShow(index)}>{val.dateShow}</div>
                                                )
                                            }
                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="zhekou">
                                <div className="zhekouFont">折扣卡</div>
                                <div className="lijian">现在开卡，首单1张最高立减4元</div>
                                <div className="kaika">15.9元起开卡</div>
                            </div>
                            {
                                this.state.isGetData &&this.state.movies[this.state.crruntIndex].shows[this.state.crruntShowIndex].plist.length!==0
                                ?this.state.isGetData && this.state.movies[this.state.crruntIndex].shows[this.state.crruntShowIndex].plist.map((val,index) => {
                                    return (
                                        <div className="ListUl" key={index}>
                                            <div className="ListLi">
                                                <div className="ListTime">
                                                    <div className="startTime">{val.tm}</div>
                                                    <div className="endTime">
                                                        <span className="endTimeDetail">00:00</span>
                                                        <span className="sanchangFont">散场</span>
                                                    </div>
                                                </div>
                                                <div className="Lange">
                                                    <div className="LangeDetail">{val.lang} {val.tp}</div>
                                                    <div className="cinemaNumber">{val.th}</div>
                                                </div>
                                                <div className="price">
                                                    <div className="priceNumber">
                                                        <span className="priceDetail">
                                                            <span className="priceFont">￥</span>
                                                            <span className="priceNumberf">36</span>
                                                        </span>
                                                        <span className="zhekouk">
                                                            <span className="zhekouka">{val.vipPriceName}</span>
                                                            <span className="zhekoujia">￥{val.vipPrice}</span>
                                                        </span>
                                                    </div>
                                                    <div className="zhekouyouhui">{val.vipPriceNameNew}</div>
                                                </div>
                                                <div className="buyprice">
                                                    购票
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                                :<div  className="seat-inner-wrap">
                                    <div className="no-seat">
                                        <div className="icon">
                                            <img src="data:image/png;base64,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" alt=""/>
                                        </div>
                                        <div className="text">{this.state.isGetData &&this.state.movies[this.state.crruntIndex].shows[this.state.crruntShowIndex].plist.length===0?"今日场次已映完":"影片未上映"}</div>
                                    </div>
                                </div>
                            }
                            {
                                this.state.dealList.length !== 0
                                    ? <div className="taocan">
                                        <div className="taocanTitle">影院超值套餐</div>
                                        <div className="taocanUl">
                                            {
                                                this.state.dealList.map((value) => {
                                                    return (
                                                        <div className="taocanLi" key={value.title}>
                                                            <div className="taocanLiLeft">
                                                                <img id="taocanPicture" src={value.imageUrl.replace(/w\.h/, '440.0')} alt="" />
                                                                {value.cardTag === "HOT" ? <span className="hot-tag ">HOT</span> : null}
                                                            </div>
                                                            <div className="taocanLiRight">
                                                                <div className="taocanLiRightTop">
                                                                    <span className="taocanNum">双人</span>{value.title}
                                                                    <div className="taocanLiRightCenter">{value.curNumberDesc}</div>
                                                                    <div className="taocanLiRightBottom">
                                                                        <div className="taocanPrice">￥{value.price}</div>
                                                                        <div className="taocanButton">去购买</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                )
                                            }
                                        </div>
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </CinemaDetailWrap>
        )
    }
    componentWillUnmount() {
        isUmmount = true
    }
}
export default withRouter(CinemaDetail)
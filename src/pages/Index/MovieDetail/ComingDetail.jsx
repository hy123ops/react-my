import React, { Component } from 'react'
import { DetailWrap } from './styled'
import { get } from 'utils/http'
import { withRouter } from 'react-router-dom'

class ComingDetail extends Component {

    state = {
        detailMovie: []
    }

    async componentDidMount() {
        let result = await get({
            url: '/api/ajax/detailmovie',
            params: {
                movieId: this.props.match.params.id,
                optimus_uuid: 'B2C6B1B0E28311E999F36DF42CFF7219228B0E2F2A3B46419E009285BC35D23C',
                optimus_risk_level: 71,
                optimus_code: 10
            }
        })
        this.setState({
            detailMovie: result.detailMovie
        })
    }

    handleGoback = () => {
        this.props.history.goBack()
    }

    render() {
        // console.log(this.props.match.params.id);
        return (
            <DetailWrap>
                <div className="bscroll-wrapper">
                    <div className="movhome" style={{ background: `${this.state.detailMovie.backgroundColor}` }}>
                        <div className="cinemaShow-head">
                            <div className="nav-wrap-left" onClick={this.handleGoback}><div className="back"><i className="icon-back"></i></div></div>
                            <h1 className="nav-head">{this.state.detailMovie.nm}</h1>
                        </div>
                        <div className="movie_box_t">
                            {/* {console.log(this.state.detailMovie.img)} */}
                            <div className="movie_img"><img src={this.state.detailMovie.img ? this.state.detailMovie.img.replace(/w\.h/, '128.180') : null} alt="" /></div>
                            <div className="movie_cont">
                                <p className="movie_cnm">{this.state.detailMovie.nm}</p>
                                <p className="movie_enm">{this.state.detailMovie.enm}</p>
                                <p className="movie_cat">{this.state.detailMovie.cat}</p>
                                <p className="movie_star">主演：{this.state.detailMovie.star}</p>
                                <p className="movie_dayrime">{this.state.detailMovie.pubDesc} / {this.state.detailMovie.episodeDur}分钟</p>
                                <div className="watch-wrap">
                                    <div className="looked"><img
                                        className="img noneBg"
                                        src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/want-to-watch.png" alt="" /><span>想看</span>
                                    </div>
                                    <div className="looked" ><img className="img noneBg"
                                        src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star.png" alt="" /><span>看过</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="WOM">
                            <p className="wom">实时口碑</p>
                            <div className="look-p"><span className="movie_people ">{this.state.detailMovie.wish}</span><span className="look">人想看</span></div>
                            <p className="welcome">{this.state.detailMovie.ver}</p>
                        </div>
                        <div className="shichang">{this.state.detailMovie.videoName}</div>
                        <div className="brief"><span className="jianjie">简介:</span><span className="zhengwen"> {this.state.detailMovie.dra}</span>
                        </div>
                        <div className="jutiphoto">
                            <span>电影剧照</span>
                            <div className="swiper-container3">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        {
                                            this.state.detailMovie.photos
                                                ? this.state.detailMovie.photos.map((value) => {
                                                    return (
                                                        <img className="ppp" key={value} src={value.replace(/w\.h/, '128.180')} alt="" />
                                                    )
                                                }
                                                ) : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buy-ticket-btn can-buy ">
                    <div className="buy-wrapper"><img className="img noneBg"
                        src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/share-icon.png" alt="" /><a
                            className="goto-ticket" href="##">特惠购票</a></div>
                </div>
            </DetailWrap>
        )
    }
}

export default withRouter(ComingDetail)
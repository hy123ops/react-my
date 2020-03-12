import React, { Component } from 'react'
import {
    HotMovie
} from './styledMovie'
import { get } from 'utils/http'
import { withRouter } from 'react-router-dom'


class MovieList extends Component {

    state = {
        movList: [],
        // dir:this.getPath(this.props)
    }

    async componentDidMount() {
        let result = await get({
            url: `/api/ajax/movieOnInfoList`,
            params: {
                token: 'MyCx3GexSgdlgmtDZj4KycIGjtEAAAAAPAkAAHmniCjA91xZAWRgjb-vEg0qkjOf-qpeifIioPgxcpWPn_Or9byGV2_Fw1xdxmbwPg',
                optimus_uuid: 'B2C6B1B0E28311E999F36DF42CFF7219228B0E2F2A3B46419E009285BC35D23C',
                optimus_risk_level: 71,
                optimus_code: 10
            }
        })
        this.setState({
            movList: result.movieList
        })
    }

    // getPath(props){
    //     return props.location.pathname === '/' ? 'movie/hot' : props.location.pathname.substr(1)
    //     console.log(path);

    // }

    handleDetail = (id) => () => {
        this.props.history.push({ pathname: '/index/comdetail/' + id })
    }

    render() {
        // console.log(this.state.movList)
        return (
            <>
                <HotMovie>
                    {this.state.movList.map((value) =>
                        <div className="item" key={value.id} onClick={this.handleDetail(value.id)}>
                            <div className="main-block">
                                <div className="avatar">
                                    <div className="default-img-bg">
                                        <img src={value.img.replace(/w\.h/, '128.180')} alt="" />
                                    </div>
                                </div>
                                <div className="content-wrapper">
                                    <div className="content">
                                        <div className="movie-title">
                                            <div className="title line-ellipsis">{value.nm}</div>
                                            {value.version.match(/\dd/) ? <span className="version"> {value.version.match(/\dd/)[0].toUpperCase()} </span> : null}
                                            {value.version.match(/imax/) ? <span className="max">IMAX </span> : null}
                                            {value.preShow === true ? <span className="dian">点映 </span> : null}
                                        </div>
                                        <div className="detail">
                                            {
                                                value.showst === 3
                                                    ? <div className="score line-ellipsis">
                                                        <span className="score-suffix">观众评 </span>
                                                        <span className="grade">{value.sc}</span>
                                                    </div>
                                                    : <div className="wantsee line-ellipsis">
                                                        <span className="person">{value.wish} </span>
                                                        <span className="p-suffix">人想看</span>
                                                    </div>
                                            }
                                            <div className="actor line-ellipsis">主演: {value.star}</div>
                                            <div className="show-info line-ellipsis">{value.showInfo}</div>
                                        </div>
                                    </div>
                                    <div className="button-block">
                                        <div className={value.showst === 3 ? 'btn' : 'yu'}><span className="fix">{value.showst === 3 ? '购票' : '预售'}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </HotMovie>
            </>
        )
    }
}
export default withRouter(MovieList)
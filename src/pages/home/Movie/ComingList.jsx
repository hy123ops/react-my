import React, { Component } from 'react'
import {
    HotMovie
} from './styledMovie'
import { get } from 'utils/http'
import MostExpect from './MostExpect'
import { withRouter } from 'react-router-dom'

class ComingList extends Component {

    state = {
        comingList: []
    }

    async componentDidMount() {
        let result = await get({
            url: `/api/ajax/comingList`,
            params: {
                ci: 1,
                token: 'MyCx3GexSgdlgmtDZj4KycIGjtEAAAAAPAkAAHmniCjA91xZAWRgjb-vEg0qkjOf-qpeifIioPgxcpWPn_Or9byGV2_Fw1xdxmbwPg',
                limit: 10,
                optimus_uuid: 'B2C6B1B0E28311E999F36DF42CFF7219228B0E2F2A3B46419E009285BC35D23C',
                optimus_risk_level: 71,
                optimus_code: 10
            }
        })
        // console.log(result);

        this.setState({
            comingList: result.coming
        })
    }

    handleDetail = (id) => () => {
        this.props.history.push({ pathname: '/index/comdetail/' + id })
    }

    render() {
        return (
            <>
                <MostExpect></MostExpect>
                <HotMovie>
                    <div>
                        {/* <p className="group-date">12月14日 周六</p> */}
                        {this.state.comingList.map((value) =>
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
                                                <div className="wantsee line-ellipsis">
                                                    <span className="person">{value.wish} </span>
                                                    <span className="p-suffix">人想看</span>
                                                </div>
                                                <div className="actor line-ellipsis">主演: {value.star}</div>
                                                <div className="show-info line-ellipsis">{value.rt}上映</div>
                                            </div>
                                        </div>
                                        <div className="button-block">
                                            <div className={value.showst === 1 ? 'look' : 'yu'}><span className="fix">{value.showst === 1 ? '想看' : '预售'}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        }
                    </div>

                </HotMovie>
            </>
        )
    }
}
export default withRouter(ComingList)
import React, { Component } from 'react'
import { MostExpectWrap } from './styledMovie'
import { get } from 'utils/http'
import {withRouter} from 'react-router-dom'

 class MostExpect extends Component {

    state = {
        mostExpect: [],
        limit:10
    }

    async componentDidMount() {
        let result = await get({
            url: `/api/ajax/mostExpected`,
            params: {
                ci: 1,
                limit: this.state.limit,
                offset: 0,
                token: 'MyCx3GexSgdlgmtDZj4KycIGjtEAAAAAPAkAAHmniCjA91xZAWRgjb - vEg0qkjOf - qpeifIioPgxcpWPn_Or9byGV2_Fw1xdxmbwPg',
                optimus_uuid: 'B2C6B1B0E28311E999F36DF42CFF7219228B0E2F2A3B46419E009285BC35D23C',
                optimus_risk_level: 71,
                optimus_code: 10
            }
        })
        // console.log(result);

        this.setState({
            mostExpect: result.coming
        })
    }

    handleDetail = (id) => () => {
        this.props.history.push({ pathname: '/index/comdetail/'+id})
    }

    render() {
        return (
            <MostExpectWrap>
                <div className="most-expected">
                    <p className="title">近期最受期待</p>
                    <div className="most-expected-list">
                        {
                            this.state.mostExpect.map((value) =>
                                <div className="expected-item" key={value.id} onClick={this.handleDetail(value.id)}>
                                    <div className="poster default-img-bg">
                                        <img src={value.img.replace(/w\.h/, '340.460')} alt="" />
                                        <span className="wish-bg"></span>
                                        <span className="wish"><span className="wish-num">{value.wish}</span>人想看</span>
                                        <div className="toggle-wish" data-wishst="0" data-movieid="1217023">
                                            <span></span>
                                        </div>
                                    </div>
                                    <h5 className="name line-ellipsis">{value.nm}</h5>
                                    <p className="date">{value.comingTitle}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </MostExpectWrap>
        )
    }
    
}
export default withRouter(MostExpect)
import React, { Component } from 'react'
import { BrandshopWrap } from './styledShop'
import { get } from 'utils/http'
// import { connect } from 'react-redux'
// import { GETLIST } from 'pages/home/action-types'
// const mapDispath = (dispatch) => {
//     return {
//         loadData(areaId, districtId) {
//             // console.log(reqId);
//             dispatch({
//                 type: GETLIST,
//                 url: `/api/ajax/cinemaList`,
//                 params: {
//                     areaId,
//                     districtId,
//                 }
//             })
//         }
//     }
// }


let isUmmount = false
// @connect(null, mapDispath)
class Brandshop extends Component {

    constructor(props){
        super(props)
    }
    

    state = {
        datasource: {},
        currentItem: 0,
        count: 0,
        districtId: -1,
        areaId: -1,
        lineId: -1,
        stationId: -1, 
    }

    async componentDidMount() {

        let result = await get({
            url: '/api/ajax/filterCinemas?ci=1&optimus_uuid=B2C6B1B0E28311E999F36DF42CFF7219228B0E2F2A3B46419E009285BC35D23C&optimus_risk_level=71&optimus_code=10'
        })

        if (!isUmmount) this.setState({
            datasource: result,
            index: 0
        })
        // console.log(this.state.datasource);
    }

    handleItemClick = (item, id) => {
        
        let obj=null
        if(this.props.type==='district')obj={
            currentItem: item,
            areaId:id,
            count:0
        }
        else obj={
            currentItem: item,
            lineId:id,
            count:0
        }

        return () => {
            this.setState(obj)
        }

    }

    handleCountClick = (index, id) => {
        let obj=null
        if(this.props.type==='district')obj={
            count: index,
            districtId:id
           
        }
        else obj={
            count: index,
            stationId :id
        }

        return () => {
            this.setState(obj, () => {
                this.props.handleChoose({  
                    districtId: this.state.districtId,
                    areaId: this.state.areaId,
                    lineId: this.state.lineId,
                    stationId:this.state.stationId
                 })
                
            }

            )
        }
    }



    render() {
        isUmmount = false;

        let arr = this.state.datasource[this.props.type] ? this.state.datasource[this.props.type].subItems : []
        let item = arr[this.state.currentItem] ? arr[this.state.currentItem].subItems : []

        return (
            <BrandshopWrap>
                <div>
                    <ul>
                        {
                            arr.map((value, index) => {
                                return (
                                    this.state.currentItem === index
                                        ? <li className="chosen" key={value.id}>{value.name}({value.count})</li>
                                        : <li key={value.id} onClick={this.handleItemClick(index, value.id)}>{value.name}({value.count})</li>
                                )
                            }
                            )
                        }
                    </ul>
                </div>
                <div>
                    <ul>
                        {
                            item.map((value, index) => {
                                return (
                                    this.state.count === index
                                        ? <li className="chosen" key={value.id}><span className="item-name">{value.name}</span><span className="item-count">{value.count}</span></li>
                                        : <li key={value.id} onClick={this.handleCountClick(index, value.id)}><span className="item-name">{value.name}</span><span className="item-count">{value.count}</span></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </BrandshopWrap>
        )
    }
    componentWillUnmount() {
        isUmmount = true
    }
}

export default Brandshop
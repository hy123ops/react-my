import React, { Component } from 'react'
import { BrandWrap } from './styleCinema'
import { get } from 'utils/http'

let isUmmount=false
export default class Brand extends Component {

    state = {
        brand: [],
        isshow: false,
        current: 0,
        brandId:null
    }

    async componentDidMount() {
        let result = await get({
            url: '/api/ajax/filterCinemas?ci=1&optimus_uuid=B2C6B1B0E28311E999F36DF42CFF7219228B0E2F2A3B46419E009285BC35D23C&optimus_risk_level=71&optimus_code=10'
        })

        if(!isUmmount) this.setState({
            brand: result.brand.subItems
        })
    }

    handleClick = (index,brandId) => {
        return () => {
            this.setState({
                current: index,
                brandId
            },()=>{
                this.props.handleChoose({brandId})
            })
        }
    }

    render() {
        isUmmount = false;
        return (
            <BrandWrap>
                {this.state.brand.length && this.state.brand.map((value, index) => {
                    return (
                        this.state.current === index
                            ? <div className="item brand-list chosen" key={value.id} data-type="brand"><span className="brand-name ">{value.name}</span><span className="brand-count">{value.count}</span></div>
                            : <div className="item brand-list" key={value.id} data-type="brand" onClick={this.handleClick(index,value.id)}><span className="brand-name ">{value.name}</span><span className="brand-count">{value.count}</span></div>
                    )
                }
                )}
            </BrandWrap>
        )
    }
    componentWillUnmount(){
        isUmmount=true
    }
}

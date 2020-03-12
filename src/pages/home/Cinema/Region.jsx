import React, { Component } from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { RegionWrap } from './styleCinema'
import Brandshop from '@/Brandshop'
import Subway from '@/Brandshop'

const tabs = [
  { title: '商区' },
  { title: '地铁站' },
];

export default class Region extends Component {
    render() {
        return (
            <RegionWrap style={{height:'100%'}}>
            <WhiteSpace />
            <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false} tabBarActiveTextColor={ '#f03d37'} >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                <Brandshop
                  currentItem="0"
                  type="district"
                ></Brandshop>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                <Subway
                  count="0"
                  type="subway"
                ></Subway>
              </div>
            </Tabs>
            <WhiteSpace />
          </RegionWrap>
        )
    }
}

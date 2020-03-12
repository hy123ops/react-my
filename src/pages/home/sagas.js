import { put } from 'redux-saga/effects'

import * as types from './action-types'

import { get } from 'utils/http'

function* loadData({url,params={}}) {
  
        var date = new Date()
        var year=date.getFullYear()
        var month=date.getMonth()+1
        var day=date.getDate()
        var rq=year+"-"+month+"-"+day
        var reqId=date.getTime()

  try {
    const result = yield get({
      url,
      params: {
        day: rq,//当前日期
        offset: 0,
        limit: 20,
        item: '',
        districtId: -1,//商区右
        lineId: -1,//地铁全部左
        stationId: -1,//地铁右 
        hallType: -1,//特殊厅
        serviceId: -1,//特色功能
        brandId: -1,//品牌
        areaId: -1,//商区左
        updateShowDay: false,
        reqId: reqId,//毫秒数
        cityId: 1,
        optimus_uuid: 'B90114E0256211EA804541E666C3725863A07AC4E4E646D9BDF82F01C01DE42B',
        optimus_risk_level: 71,
        optimus_code: 10,
        ...params,
    }
    
    
    })
    // console.log(result);
    yield put({type: types.LOADDATA, data: result.cinemas});
  } catch (e) {
    
  }
}

export {
  types,
  loadData as action
}
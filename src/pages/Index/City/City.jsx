import React, { Component } from 'react'
import { CityWrap } from './styleCity'
import { get } from 'utils/http'

export default class City extends Component {

  state = {
    list: []
  }

  async componentDidMount() {
    let result = await get({
      url: '/api/dianying/cities.json'
    })
    // console.log(result.cts);
    this.setState({
      list: result.cts
    })
    this.floor()

  }

  render() {
    let list = this.state.list.length === 0 ? [] : this.state.list
    let arrFont = [];
    list.forEach(list => {
      let num = list.py.substr(0, 1).charCodeAt() - 97;
      //console.log(arrFont[num]);
      if (!arrFont[num]) {
        arrFont[num] = {};
        arrFont[num].city = [];
        arrFont[num].code = String.fromCharCode(list.py.substr(0, 1).charCodeAt() - 32);
      };
      arrFont[num].city.push(list);
    })
    // console.log(arrFont);

    return (
      <CityWrap>
        <div className="citiesChoose" >
          <div id="locate" className="city-title cityPos">
            定位城市
          </div>
          <div className="city-inline">
            <div className="city-item">定位失败，请点击重试</div>
          </div>
          <div id="history" className="city-title cityPos">
            最近访问城市
          </div>
          <div className="city-inline">
            {
              list.splice(0, 1).map((value) => {
                return (
                  <div className="city-item" key={value.id}>
                    {value.nm}
                  </div>
                )
              }
              )
            }
          </div>
          <div id="hot" className="city-title cityPos" >
            热门城市
          </div>
          <div className="city-inline2">
            {
              list.splice(0, 11).map((value, index) => {
                return (
                  <div className="city-item" key={value.id}>
                    {value.nm}
                  </div>
                )
              }
              )
            }
          </div>
          <div className="city-list">
            {
              arrFont.map((value, index) => {
                return (
                  <div key={value.code} className="cityPos">
                    <div className="city-title2">
                      {value.code}
                    </div>
                    <ul className="city-inline2">
                      {
                        value.city.map((val, index) => {
                          return (
                            <li key={val.id} className="city-item2">
                              {val.nm}
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              }
              )
            }
          </div>
          <ul className="nav">
            <li className="  nav-item" id="locate">
              定位
            </li>

            <li className="  nav-item" id="history">
              最近
            </li>

            <li className="  nav-item" id="hot">
              热门
            </li>
            {
              arrFont.map((value, index) => {
                return (
                  <li className="nav-letter  nav-item" key={value.code}>
                    {value.code}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </CityWrap>
    )
  }

  floor() {

    function hasClass(elements, cName) {
      return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)")); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断 
  };
  function removeClass(elements, cName) {
      if (hasClass(elements, cName)) {
          elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " "); // replace方法是替换 
      };
  };
  function addClass(elements, cName) {
    if (!hasClass(elements, cName)) {
        elements.className += " " + cName;
    };
  }

    let lis = document.getElementsByClassName('nav-item')
    let divs = document.getElementsByClassName('cityPos')
    for (var i = 0; i < lis.length; i++) {
      lis[i].index = i;
      lis[i].onclick = function () {
        for (var i = 0; i < lis.length; i++) {
          removeClass(lis[i],'active');
        }
        addClass(this,'active')
        setScroll(this.index);
      };
    }



    let citiesChoose = document.getElementsByClassName('citiesChoose')
    // console.log(citiesChoose[0]);

    citiesChoose[0].onscroll = function () {
      //console.log($('.citiesChoose'));

      let scroll = citiesChoose[0].scrollTop;
      // console.log(scroll);

      for (var i = 0; i < divs.length; i++) {

        if (i === divs.length - 1) {
          if (divs[i].offsetTop < scroll + 100) {
            for (var j = 0; j < lis.length; j++) {
              removeClass(lis[j],'active');
            }
            addClass(lis[i],'active')
          }
          break;
        }


        if (divs[i].offsetTop < scroll + 100 && divs[i + 1].offsetTop > scroll + 100) {

          for (let j = 0; j < lis.length; j++) {
            removeClass(lis[j],'active');
          }
          addClass(lis[i],'active')
        }
      }

    }

    function setScroll(index) {
      citiesChoose[0].scrollTop = divs[index].offsetTop;
      // console.log(citiesChoose[0].scrollTop);

    }
  }
}

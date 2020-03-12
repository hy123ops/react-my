import React, { Component } from "react";
import { PageListWrap, PageHeaderWrap } from "./styleCinema";
// import { get } from 'utils/http'
// import Region from "./Region";
import Brand from "./Brand";
import Special from "./Special";
import { connect } from "react-redux";
import { GETLIST } from "../action-types";
import { withRouter } from "react-router-dom";
import { Tabs, WhiteSpace } from "antd-mobile";
import { RegionWrap } from "./styleCinema";
import Brandshop from "@/Brandshop";
import Subway from "@/Brandshop";
import Nothing from 'assets/images/nothing.png'

const tabs = [{ title: "商区" }, { title: "地铁站" }];

//订阅
const mapState = state => {
  // console.log(state.home);

  return {
    list: state.home.list
  };
};

//派发任务,ajax请求
const mapDispatch = dispatch => ({
  loadData(obj) {
    // console.log(reqId);
    dispatch({
      type: GETLIST,
      url: `/api/ajax/cinemaList`,
      params: obj
    });
  }
});

@connect(mapState, mapDispatch)
class PageList extends Component {
  state = {
    // cineList: [],
    isshow: [false, false, false],
    current: null,
    isClick: false,
    params: {
      districtId: -1,//商区右
      lineId: -1,//地铁全部左
      hallType: -1,//特殊厅
      brandId: -1,//品牌
      serviceId: -1,//特色功能
      areaId: -1,//商区左
      stationId: -1,//地铁右 
    }
  };



  handleChoose = (obj) => {
    this.setState(() => {
      return {
        params: {
          ...this.state.params,
          ...obj
        }
      }
    }, () => {

      this.props.loadData(this.state.params)
      this.setState({
        isClick: false
      }, () => {
        console.log(this.state.isClick)
      })
    })
  }

  componentDidMount() {
    this.props.loadData();
  }

  handleClick = index => () => {
    if (this.state.current === index) {
      this.setState({
        isshow: [false, false, false],
        current: null
      });
    } else {
      if (this.state.current !== null) {
        var flag = !this.state.isshow[this.state.current];
      }
      let onoff = !this.state.isshow[index];
      let arr = this.state.isshow;
      arr.splice(this.state.current, 1, flag);
      arr.splice(index, 1, onoff);
      this.setState({
        current: index,
        isshow: arr,
        isClick: true
      });
    }
  };

  hangleCinema = id => () => {
    this.props.history.push({ pathname: "/index/cinemadetail/" + id });
  };


  render() {
    return (
      <>
        <PageHeaderWrap className="nav-wrap filter-nav-wrap">
          <div className="tab mb-line-b">
            <div
              className={`item ${this.state.isshow[0] && this.state.isClick ? "active" : ""}`}
              data-tab="region"
              ref="true"
              onClick={this.handleClick(0)}
            >
              全城<span className="drop"></span>
            </div>
            <div
              className={`item ${this.state.isshow[1] && this.state.isClick ? "active" : ""}`}
              data-tab="brand"
              ref="true"
              onClick={this.handleClick(1)}
            >
              品牌<span className="drop"></span>
            </div>
            <div
              className={`item ${this.state.isshow[2] && this.state.isClick ? "active" : ""}`}
              data-tab="special"
              ref="true"
              onClick={this.handleClick(2)}
            >
              特色<span className="drop"></span>
            </div>
          </div>
        </PageHeaderWrap>
        <div
          className="zhezhao"
          style={{
            background: "rgba(0, 0, 0, .6)",
            display: `${
              (this.state.isshow[0] ||
                this.state.isshow[1] ||
                this.state.isshow[2]) &&
                this.state.isClick
                ? "block"
                : "none"
              }`,
            height: "100%",
            width: "100%",
            position: "absolute",
            top: "0",
            zIndex: "9",
          }}
        >
          <div
            className="close close1"
            style={{
              display: `${this.state.isshow[0] ? "block" : "none"}`,
              zIndex: "99",
              position: "absolute",
              top: ".4rem",
              height: "55%",
              width: "100%",
              background: "#fff"
            }}
          >
            <RegionWrap style={{ height: "100%" }}>
              <WhiteSpace />
              <Tabs
                tabs={tabs}
                initialPage={0}
                animated={false}
                useOnPan={false}
                tabBarActiveTextColor={"#f03d37"}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    backgroundColor: "#fff"
                  }}
                >
                  <Brandshop currentItem="0" type="district" handleChoose={this.handleChoose} ></Brandshop>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    backgroundColor: "#fff"
                  }}
                >
                  <Subway count="0" type="subway" handleChoose={this.handleChoose}></Subway>
                </div>
              </Tabs>
              <WhiteSpace />
            </RegionWrap>
          </div>
          <div
            className="close close2"
            style={{
              display: `${this.state.isshow[1] ? "block" : "none"}`,
              zIndex: "99",
              position: "absolute",
              top: ".4rem",
              height: "55%",
              width: "100%",
              background: "#fff",
              overflow: "scroll"
            }}
          >
            <Brand handleChoose={this.handleChoose}></Brand>
          </div>
          <div
            className="close close3"
            style={{
              display: `${this.state.isshow[2] ? "block" : "none"}`,
              zIndex: "99",
              position: "absolute",
              top: ".4rem",
              height: "55%",
              width: "100%",
              background: "#fff"
            }}
          >
            <Special handleChoose={this.handleChoose} ></Special>
          </div>
        </div>
        <PageListWrap>
          <div className="cinema-list">
            {
              this.props.list.length !== 0
                ? <div className="list-wrap">
                  {this.props.list.map(value => (
                    <div
                      className="item mb-line-b"
                      key={value.id}
                      onClick={this.hangleCinema(value.id)}
                    >
                      <div className="title-block box-flex middle">
                        <div className="title line-ellipsis">
                          <span>{value.nm}</span>
                          <span className="price-block">
                            <span className="price">{value.sellPrice}</span>
                            <span className="q">元起</span>
                          </span>
                        </div>
                        <div className="location-block box-flex">
                          <div className="flex line-ellipsis">{value.addr}</div>
                          <div className="distance">{value.distance}</div>
                        </div>
                        {value.tag.endorse === 0 &&
                          value.tag.allowRefund === 0 &&
                          value.tag.snack === 0 &&
                          value.tag.vipTag === "" ? null : (
                            <div className="label-block">
                              {value.tag.allowRefund === 1 ? (
                                <div className="allowRefund">退</div>
                              ) : null}
                              {value.tag.endorse === 1 ? (
                                <div className="endorse">改签</div>
                              ) : null}
                              {value.tag.snack === 1 ? (
                                <div className="snack">小吃</div>
                              ) : null}
                              {value.tag.vipTag === "折扣卡" ? (
                                <div className="vipTag">折扣卡</div>
                              ) : null}
                              {value.tag.hallTypeVOList[0] ? (
                                <div className="hallType">
                                  {value.tag.hallTypeVOList[0].name}
                                </div>
                              ) : null}
                              {value.tag.hallTypeVOList[1] ? (
                                <div className="hallType">
                                  {value.tag.hallTypeVOList[1].name}
                                </div>
                              ) : null}
                              {value.tag.hallTypeVOList[2] ? (
                                <div className="hallType">
                                  {value.tag.hallTypeVOList[2].name}
                                </div>
                              ) : null}
                            </div>
                          )}
                        {value.promotion.cardPromotionTag === "" ? null : (
                          <div className="discount-block">
                            <div>
                              <div className="discount-label normal card">
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                                  alt=""
                                />
                              </div>
                              <div className="discount-label-text">
                                {value.promotion.cardPromotionTag}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                : <div className="nothing" style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "50vh" }}>
                  <img src={Nothing} alt="" style={{ width: "87px", height: "100px" }} />
                </div>
            }
          </div>
        </PageListWrap>
      </>
    );
  }
}

export default withRouter(PageList);

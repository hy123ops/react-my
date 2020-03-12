import styled from 'styled-components'

export const HeaderWrap = styled.div `
  height: .5rem;
  background: #e54847;
  font-size: .18rem;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #fff;
  text-align: center;
  line-height: .5rem;
  position:absolute;
  top:0;
  z-index:9;
  width:100%;
`

export const NavWrap= styled.div`
    /* margin-top:.5rem; */
    height: 0.44rem;
    border-bottom:1px solid #e6e6e6;
    display: flex;
    background:#fff;
    >div:first-child {
      flex: 80;
      padding-left: 0.16rem;
      font-size: 0.16rem;
      line-height: 0.44rem;
      display: flex;
      align-items: center;
      color: #666;
      overflow hidden
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box !important;
        -webkit-line-clamp: $line-clamp;
        flex-direction: column;
      }
    }

    >div:nth-child(2) {
      flex: 215;

      ul {
        width: 100%;
        height: 100%;
        display: flex;

        li {
          flex: 1;
          text-align: center;
          line-height: 0.44rem;
          color: #666;
          font-size: .15rem;
          font-weight: 700;
          margin: 0 0.05rem;
          transition:all 0.1s ease-in;
          &.active {
            border-bottom: solid 0.02rem #e54847;
            color: #e54847;
          }
        }
      }
    }

    >div:last-child {
      flex: 80;
      padding-right: 0.16rem;
      line-height: 0.44rem;
      font-size: 0.18rem;
      text-align: right;
      color: #e54847;
    }
`

export const AdWrap = styled.div`
    position: relative;
    height: .63rem;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    margin-top:.5rem;
    img.logo {
    position: absolute;
    left: 15px;
    top: 11px;
    width: .44rem;
    height: .44rem;
    }

    .app-name-desc {
    position: absolute;
    left: 66px;
    top: 13px;

    .app-name {
    font-size: 17px;
    color: #222;
    line-height: .23rem;
    }

    .app-desc {
    font-size: 12px;
    color: #999;
    }
  }

  .btn-open-app {
    position: absolute;
    right: 15px;
    top: 17px;
    width: .68rem;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    background: #ef4238;
    border-radius: 3px;
    font-size: 13px;
    color: #fff;
  }
`
export const HotMovie = styled.div`
  background-color: #fff;
  
  .item {
    margin-left: .15rem;
    margin-right: .15rem;
    background-color: #fff;
    border-bottom:1px solid #e6e6e6;

    .main-block {
      position: relative;
      width: 100%;

      .avatar {
        width: .64rem;
        height: .9rem;
        position: relative;
        margin-top: .12rem;
        float: left;

        &:before {
            content: "";
            display: block;
            position: absolute;
            width: .46rem;
            height: .46rem;
            background-repeat: no-repeat;
            background-size: contain;
        }

        .default-img-bg {
            background-color: #e1e1e1;
            background-size: 100% 100%;

            img {
              background-color: transparent;
              height: .9rem;
              width: 100%;
          }
        }
      }

      .content-wrapper {
          padding: .12rem .14rem .12rem 0;
          margin-left: .74rem;
          height: .9rem;
          max-height: .9rem;
          position: relative;
          .content {
            padding-right: .05rem;
            margin-right: .48rem;
            overflow: hidden;
            .movie-title {
              max-height: .24rem;
              margin-bottom: .07rem;
              line-height: .24rem;
              overflow: hidden;
              display:flex;
              .title {
                font-size: .17rem;
                color: #333;
                font-weight: 700;
                padding-right: .05rem;
                flex-shrink: 1;
              }
              .version{
                color: #fff;
                background: #589daf;
                font-size: .08rem;
                height: .14rem;
                 width: .17rem;
                 line-height: .14rem;
                  text-align: center;
              }
              .max{
                color: #589daf;
                background: #fff;
                font-size: .08rem;
                height: .12rem;
                line-height: .12rem;
                text-align: center;
                border: .01rem solid #589daf;
              }
              .dian{
                width: .23rem;
                height: .14rem;
                color:#fff;
                background:#faaf00;
                font-size: 8px;
                line-height: .14rem;
                text-align: center;
                margin-right: .03rem;
              }
            }
            .line-ellipsis {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .detail {
                box-sizing: border-box;
                line-height: 1;
                overflow: hidden;
                color: #666;
                .score {
                  font-size: 13px;
                  color: #666;
                  .grade {
                    font-weight: 700;
                    color: #faaf00;
                    font-size: 15px;
                  }
                }
                .actor,.show-info{
                  font-size: 13px;
                  color: #666;
                  margin-top: .06rem;
                  line-height: .15rem;
                }
                .wantsee .person {
                    color: #faaf00;
                    font-size: 15px;
                    font-weight: 600;
                }
                .wantsee .p-suffix {
                  font-size: 13px;
                  margin-left: -2px;
                  display: inline-block;
                  color: #666;
              }
            }
          }
        .button-block {
            font-size: 12px;
            position: absolute;
            right: 14px;
            top: 0;
            bottom: 0;
            height: .27rem;
            margin: auto;
            .btn {
              width: .47rem;
              height: .27rem;
              line-height: .27rem;
              text-align: center;
              box-sizing: border-box;
              background-color: #f03d37;
              color: #fff;
              border-radius: 4px;
              white-space: nowrap;
              font-size: 12px;
              cursor: pointer;
          }
          .yu{
            width: .47rem;
              height: .27rem;
              line-height: .27rem;
              text-align: center;
              box-sizing: border-box;
              background-color: #3c9fe6;
              color: #fff;
              border-radius: 4px;
              white-space: nowrap;
              font-size: 12px;
              cursor: pointer;
          }
          .look{
            width: .47rem;
              height: .27rem;
              line-height: .27rem;
              text-align: center;
              box-sizing: border-box;
              background-color: #faaf00;
              color: #fff;
              border-radius: 4px;
              white-space: nowrap;
              font-size: 12px;
              cursor: pointer;
          }
        }
      }
    }
  }
`

export const MostExpectWrap = styled.div `
  .most-expected {
    padding: 12px 0 12px 15px;
    background-color: #fff;
    margin-bottom: 10px;
    .title {
      margin: 0;
      font-size: 14px;
      color: #333;
      margin-bottom: 12px;
    }
    p {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
    .most-expected-list {
      overflow: scroll;
      white-space: nowrap;
      .expected-item {
        display: inline-block;
        width: 85px;
        overflow: hidden;
        margin-right: 10px;
        .poster {
            width: 85px;
            height: 115px;
            position: relative;
            margin-bottom: 6px;
            img {
              height: 100%;
              width: 100%;
              display: block;
          }
          .wish-bg {
              display: inline-block;
              width: 100%;
              height: 35px;
              position: absolute;
              bottom: 0;
              /* background-image: -webkit-linear-gradient(top,rgba(77,77,77,0),#000); */
              background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
          }
          .wish {
              position: absolute;
              left: 4px;
              bottom: 2px;
              color: #faaf00;
              font-size: 11px;
              font-weight: 600;
          }
          .toggle-wish {
              width: 28px;
              line-height: 28px;
              background: rgba(61,63,71,.6);
              text-align: center;
              border-bottom-right-radius: 10px;
              position: absolute;
              top: 0;
              left: 0;
              span {
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAABGdBTUEAALGPC/xhBQAAAytJREFUWAnVmLtrFFEUh3cWFAtRE5FEEUREsFAkooUIgl3+CUEU7LVR1LBIMERCLFLZRG1CrFJYpLBQENRGC4n4wBeKRUQ2PlAQX+v3m70z7MzemZ3HZp05cPbce86553w7O7Mzc51KjDQaDYfwDvSAseux69Cv6Ef0LXoHXXAc5y82UqhVJbgLPYhuQTega9DPaB19ht6VpVYDaxUBWYUGewkcQzdbE4LOJabXaHQ76G7OqHWI0RG0v+mJ/XxPdJpaD2xZbcAUX0XiSXS/bUEH3yPil2imL1Chln6RE+huzVPKffJV60frugAwDfoI1tBtrUkpx4vknzVrLmAHU65vTX/F5DzQnzynDwzsCpwX0e1eMIfV+S3ReZpXXlDgFNC/VEgXgifHGXQDVvUE2g1Y1RKT2FxxgTm6cg4bXxHNsGH0j/DhIlKGmFzGKuSbCAyFgkWcDsG6UaeE/m/LIvsEvKcstGIV8ECJgAcErJtFWaRPwCvLQitWAbv3/ZJALwlYj3ZlkbqA9YBRFnkp4HtloRWrgJ+g/uNbgeHF+LTKY5tebWYLDOqhzYpVR1hyE33njor5ITYxNp/WIP/DeBINvI4ooQAipknD6D9eVnC8JjCOxr799vgLiGXcsLmtvVPCnRB4yGDanRTjQ2/PYvIlACwvCTcwM37G/xvMGJYAQRuwoiRex8wFMns7mTMMbV2twMpiwVXMfNuK5XfMm97WTpHAJvsy9pZ15fI41Us9IyUWmG+qPa4ptBe3b/WYMj2zAWsVBfQfPYEGrlbFuiiqPWF6xZaNPcLeSgr9ZjyGLni+LlrVHDM9OpZNBKwqFPyJGUWfa94lUa1RUztRSX9vLVE2SewNrMboaG9NuiYi7w3+M8B+i4hb3amBVQXotRjdxpPsHWtJWLQHfBrYL+FAp3kmYBUFWnu/2u1Mu03wgTXajaxjU0tmYHUCehAj6H7NE4ggBSvoTJL4orNVp/Eifm1eJ/lplXMuD6wYcgGrAAA6H0fQ75pHiGIjJjciJZk7N7DaAKIrvobarnj5aiaHYT7JdQ6HW5sL8Sj+nSb2GHsF2EwXWLi+5v8ArR6xIZ+h44wAAAAASUVORK5CYII=);
                display: inline-block;
                width: 10px;
                height: 10px;
                background-size: 100%;
                background-repeat: no-repeat;
                text-align: center;
                line-height: 28px;
            }
          }
        }
        .default-img-bg {
            background-color: #e1e1e1;
            background-size: 100% 100%;
        }
        .name {
            margin: 0;
            font-size: 13px;
            color: #222;
            margin-bottom: 3px;
        }
        .line-ellipsis {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        .date {
            margin: 0;
            font-size: 12px;
            color: #999;
        }
      }
    }
  }
`

export const ListWrap=styled.div `
  .sticky-list .sticky-container .am-list-item { padding-left: 0; }
.sticky-list .sticky-container .am-list-line { padding-right: 0; }
.sticky-list .sticky-container .am-list-line .am-list-content { padding-top: 0; padding-bottom: 0; }
.sticky-list .sticky-container .sticky { padding: 7px 15px; transform: none; }
`
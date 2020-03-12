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

export const NavWrap=styled.div `
  border-bottom: 1px solid #e6e6e6;
  height: .44rem;
  margin-top:.5rem;
  background: #f5f5f5;
  display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
  >div:first-child {
    padding-left: .15rem;
    font-size: .16rem;
    color: #666;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
      span {
        max-width: 19.2vw;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box !important;
        -webkit-line-clamp: $line-clamp;
        flex-direction: column;
      }
    }
    .search-input {
      -webkit-box-flex: 1;
      flex-grow: 1;
      display: flex;
      background-color: #fff;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      height: .28rem;
      font-size: .12rem;
      color: #b2b2b2;
      margin-left: .18rem;
      border: .5px solid #e6e6e6;
      border-radius: 5px;
      margin-right: .15rem;
      img {
            display:block;
            width: .14rem;
            height: .14rem;
            margin-left: .03rem;
            margin-right: .04rem;
        }
    }
`

export const PageWrap=styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    /* overflow: auto; */
    margin-top:0;
`

export const PageHeaderWrap =styled.div `
    width: 100%;
    height: .4rem;
    z-index: 10;
    background-color: #fff;
    font-size: .14rem;
    color: #777;
    border-bottom:1px solid #e8e8e8;
    position:fixed;
    .tab {
        display: flex;
        .item {
          -webkit-box-flex: 1;
          flex: 1;
          text-align: center;
          line-height: .4rem;
          position: relative;
          white-space: nowrap;
          overflow: hidden;
          font-size: .13rem;
          text-overflow: ellipsis;
          .drop {
            display: inline-block;
            position: absolute;
            top: 18px;
            width: 0;
            height: 0;
            margin-left: .04rem;
            border: 4px solid transparent;
            border-top-color: #b0b0b0;
        }
        +.item:before {
            content: "";
            display: block;
            position: absolute;
            height: .2rem;
            top: 10px;
            left: 0;
            border-left: 1px solid #e8e8e8;
        }
      }
      .active{
        color: #e54847;
        .drop {
          border-bottom-color: #f03d37;
          border-top-color: transparent;
          top: 14px;
        }
    }
  .nav-wrap {
    position: relative;
  }
  }
`

export const PageListWrap=styled.div `
    margin-bottom: .55rem;
    font-size:.14rem;
    color: #777;
    margin-top: .4rem;
    padding-bottom: .4rem;
    height: 100%;
    overflow: auto;
    .list-wrap{
      background-color: #fff;
      .line-ellipsis {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }   
      .item {
          padding: .13rem .15rem .13rem 0;
          margin-left: .15rem;
          margin-right: .15rem;
          background-color: #fff;
          position: relative;
          overflow: hidden;
          border-bottom:.01rem solid #e8e8e8;
      }
      .title-block {
          display: block;
          line-height: 1.5;
          .title {
            height: .23rem;
            line-height: .23rem;
            font-size: .16rem;
            color: #000;
        }
      .price-block {
        padding-top: .09rem;
        padding-left: .1rem;
        .price {
            font-size: .18rem;
            color: #f03d37;
        }
        .q {
          font-size: .11rem;
            color: #f03d37;
            margin-left: .03rem;
        }
      }
      
      .location-block {
          margin-top: .06rem;
          font-size: .13rem;
          color: #666;
          line-height: 1.5;
          display: flex;
          .flex{
            flex:1;
          }
          .distance{
            margin-left: .05rem;
          }
        }
        .label-block {
            height: .17rem;
            line-height: .17rem;
            margin-top: 4px;
            margin-bottom: 4px;
            overflow: hidden;
            font-size: 0;
            flex-shrink: 0;
            .allowRefund,.endorse,.hallType{
              color: #589daf;
              border: .01rem solid #589daf;
            }
            .snack,.vipTag{
              color: #f90;
              border: .01rem solid #f90;
            }
            >div {
              position: relative;
              display: inline-block;
              padding: 0 3px;
              height: .15rem;
              line-height: .15rem;
              border-radius: 2px;
              font-size: .08rem;
              +div {
                margin-left: 5px;
            }
          }
        }
        .discount-block {
            color: #999;
            margin-bottom: 4px;
            .discount-label {
              display: -webkit-inline-box;
              width: .15rem;
              height: .14rem;
              position: relative;
              top: 3px;
              img {
                  width: 100%;
                  display:block;
              }
          }
          .discount-label-text {
            margin-left: 0;
            font-size: 11px;
            display: inline-block;
          }
        }
      }
    }
`

export const RegionWrap=styled.div `
  .am-tabs-default-bar.am-tabs-default-bar-top{
    background-color:rgba(255, 255, 255,0) !important;
  }
  .am-tabs-default-bar-underline{
    border:1px solid #f03d37;
  }
  .am-whitespace.am-whitespace-md{
    height:0 !important;
  }

`
export const BrandWrap = styled.div `
  padding:0 .12rem;
  .chosen{
    .brand-name,.brand-count{
      color: #dd403b;
    }
    :before {
      content: "";
      display: block;
      position: absolute;
      left: 8px;
      top: 18px;
      width: 11.5px;
      height: 8px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAA9rOU8AAAABGdBTUEAALGPC/xhBQAABFlJREFUSA3dlltoXFUUhtda+8zMmUnStJPLSSdiUmwrSbAIuZEmNo3RQkFEX0pffBIEfVCkgvRmM7ShWk2q9FkQFF+ib1JNWyQXm5BOhpRACpKHIpZQTYg2t5k5c85erpM6YUhTY0aSgPtl7zP79s2/1/r3Rtimwh0dtDB0rTi1pPcoQhsocFdtEwu8nbhXwI7/ZUUQRdYtQHrS2A4Yrqw05wPhV1HjOwzwrEac15prtxzGA/mzwmryMb4PxFWaMaWBB9HlW7SVyngg98uXQU4SYhUDppC411HOxV2RiiHcKpip2kgoFKpoUuCeRMR2Zkxo5D4G/qTQqujHnh53S45pKhIJ7TD3NDPqqAJqchgcB3SvgHwctipHPBBPlE1XhkWRxeCTBxnhjEHQqgVEYmRcs/vmjsHRmABIDD8smxoz9w8cyJsLlh9i4rNE3GozpGXn8bSL3TvaXxrNBvFwNk0ZD6SgKNgKaYqi4rq05rSIcDsButMqG/0Oe2D5aP4WZbky+DAY09M1ZolppjAelwn/vUzu3RsI7vS3ug6d9gmIy5xGxjFHDM4aGP1+tSKZHWnebqg3wwVvzQaMtl+bmoKZjlxrD8TaXVxnsO+MIn0wzWzLAYylye3aZY30Pg7E248cws9Nwo8MhV/lk3tsqrY2lCvIXfGRJ8qK6iUQu8Q/miRSbQnP2BK55648H/tmraPJ3stAoBkHICWNEo3UnRdELUDfRuLxpeyB67VZVF0wjAYXnKgibpSASBHSrSVXn7cGY9ehb70VRBki/brNfJUQbCII+4guBYP+4xtRaKKmJn/Op9skWa7I0SxnjePqIZedqHVz5Pr6GA9HUOHAyCRo9z0xon4UIIl4i1B3BoLGcS8j1luIxdCscH67wXTBR/BMmtEh5jtJggs7B2M/rjc/u38ltaeb6572KbxsomoTPzBR82/imGeXHqS+LhsfX8yelGl7sL5w3nMBB7qU4moxNMlgvpNAOFU6MHI1M+7f1iumV3Jz9Gc/5b2RdPUPPvIuMLQMNDr9heZraynEcjRG2HxRQLqRdLVkTVpi73bCyA3EA15RJkOfbGnZ76Dzmby+2uRfBlytp7Xic/bM0pelExML3rjfBSS/KHREszovj6Nql8F2NY8nyTltDcSvZdbaaP0IjNg1zTbXV8kV/2FQUbutwfOeWXHRD/JnE1/cm53V4ad2v+Bqo8tHvM/LGnkYxRJKR62+2I2NAmSPfwTG6xQgfHCooRJcvBgw8BUJ7gAB/mGDHVWsfgFQlwzU+1zEFLs8aiv1bnH/UCx74Vzaa8JkAyngT31oHBFLNyU658QCkgqh1HsYMUM8CXiqZHC4P5fNV895LEwGaKa5eb8P7E7TUEflfRiS9Ad5xSc16OF54I7IQGxg9aK5fv8jTAYocbixPJnmzoCiYy6yIZfeYMKPJ0pvDI/luvFa89aFyQAtNjaWOn44wYgRR/Plkp9G4mst+L/57S+eQuIEp8oPOAAAAABJRU5ErkJggg==);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
  .brand-list {
    position: relative;
    line-height: 44px;
    height: 44px;
    padding: 0 15px 0 26px;
    border-bottom: 1px solid #e5e5e5;
    color: #333;
    font-size: 15px;
    span {
        display: inline-block;
        width: 49%;
    }
    .brand-count {
        text-align: right;
        /* color: #8f9296; */
        font-size: 12px;
    }
  }
`

export const SpecialWrap = styled.div `
    position: relative;
    width: 100%;
    font-size: 15px;
    color: #777;
    .special-content{
      min-height: 150px;
      .item-title {
          margin-left: 12px;
          margin-top: 11px;
          font-size: 15px;
      }
      .item-list {
          margin: 0 12px 12px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          .item.chosen {
            background: #fcf0f0;
            color: #f03d37;
            border: 1px solid #f03d37;
        }
        .item {
            width: 21.3%;
            height: 30px;
            padding: 3px 0;
            margin-right: 3%;
            margin-top: 10px;
            line-height: 30px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: center;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: .12rem; 
        }
      }
    }
    .special-btn{
      height: 60px;
      width: 100%;
      border-top: 1px solid #e5e5e5;
      margin-top: 10px;
      position: relative;
      .btn {
          display: inline-block;
          height: 34px;
          width: 21.3%;
          margin: 13px 11px;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
      }
      #confirm-btn {
        background: #f03d37;
        border: 1px solid #f03d37;
        color: #fff;
        position: absolute;
        right: 10px;
      }
    }
`
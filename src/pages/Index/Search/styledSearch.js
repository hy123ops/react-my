import styled from 'styled-components'

export const HearderWrap =styled.div `
    height: 50.5px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    display: -webkit-box;
    position: relative;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    .nav-wrap-left {
        height: 50.5px;
        line-height: 50.5px;
        .back {
            height: 50px;
            width: 22.5px;
            line-height: 50px;
            padding: 0 15px;
            .icon-back {
                display: inline-block;
                width: 22.5px;
                height: 22.5px;
                vertical-align: middle;
                position: relative;
                &:before {
                    content: "";
                    display: block;
                    position: absolute;
                    top: 0;
                    width: 16px;
                    height: 16px;
                    border-bottom: 2px solid #fff;
                    border-left: 2px solid #fff;
                    transform: rotate(45deg);
                }
            }
        }
    }
    h1.nav-header {
        display: block;
        -webkit-box-flex: 1;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        line-height: 50px;
        margin: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-right: 52.5px;
    }
`

export const SearchWrap = styled.div `
    .search-wrapper{
        background-color: #f5f5f5;
        height: 100vh;
        /* overflow-y: scroll; */
        .search-header{
            display: flex;
            align-items: center;
            padding: 8px 0 8px 10px;
            background-color: #f5f5f5;
            border-bottom: 1px solid #e5e5e5;
            width: 100%;
            @include ellipsis();
            overflow: hidden;
            z-index: 1;
            position: relative;
            .input-wrapper{
                padding: 0 10px;
                @include border(1px 1px 1px 1px,#e6e6e6);
                border-radius: 5px;
                background-color: #fff;
                flex-grow: 1;
                position: relative;
                @include ellipsis();
                overflow: hidden;
                .search-icon{
                    width: 15px;
                    height: 15px;
                    margin-right: 6px;
                    position: relative;
                }
                .search-input{
                    width: 80%;
                    border: none;
                    font-size: 13px;
                    color: #333;
                    line-height: .2rem;
                    padding: 4px 0;
                }
                .del-input{
                    width: .15rem;
                    height: .15rem;
                    line-height: .2rem;
                    top: 6px;
                    right: 2px;
                    position: absolute;
                }
            }
            .cancel{
                height: .3rem;
                line-height: .3rem;
                padding: 0 10px;
                font-size: 16px;
                color: #f03d37;
                margin-right:10px;
            }
            #suggest{
                position: absolute;
                top:100px;
                z-index: 2;
            }
        }
        .cinemaSerachMod {
            width: 100%;
            height: 100%;
            .play{
                margin-bottom: 10px;
                background-color: #fff;
                h3 {
                    font-size: 15px;
                    color: #999;
                    padding: 9px 15px;
                    font-weight: 400;
                }
                .list {
                    padding-left: 15px;
                     border-top: 1px solid #e6e6e6;
                     .movie {
                        padding: 12px 0;
                        min-height: 90px;
                        .poster {
                            display: block;
                            background-color: #eee;
                            width: 64px;
                            height: 90px;
                            float: left;
                            margin-right: 10px;
                        }
                        .info {
                            margin-right: 15px;
                            margin-top: 1px;
                            font-size: 14px;
                            color: #777;
                            .name-score {
                                font-size: 16px;
                                color: #222;
                                display: -webkit-box;
                                display: flex;
                                -webkit-box-pack: justify;
                                justify-content: space-between;
                                margin-bottom: 2px;
                                .name {
                                    display: flex;
                                    -webkit-box-align: center;
                                    align-items: center;
                                    -webkit-box-flex: 1;
                                    flex-grow: 1;
                                    max-height: 24px;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    .one-line {
                                        display: inline-block;
                                        font-weight: 700;
                                        font-size: 17px;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                        overflow: hidden;
                                        color: #222;
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
                                }
                                .wish {
                                    color: #fa0;
                                    font-size: 10px;
                                    flex-shrink: 0;
                                    padding-left: 5px;
                                    .num {
                                        font-size: 16px;
                                    }
                                }
                                .score {
                                    color: #fa0;
                                    font-size: 10px;
                                    flex-shrink: 0;
                                    padding-left: 5px;
                                    .num {
                                        font-size: 16px;
                                        color: #fa0;
                                    }
                                }
                            }
                            .detail-section {
                                position: relative;
                                .detail-items {
                                    -webkit-box-flex: 1;
                                    flex-grow: 1;
                                    overflow: hidden;
                                    padding-right: 10px;
                                    margin-right: 48px;
                                    min-height: 27px;
                                    font-size:13px;
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
                                .presale {
                                    background-color: #3c9fe6;
                                }
                                .buy-btn {
                                    color: #fff;
                                    border-radius: 4px;
                                    font-size: 12px;
                                    margin-bottom: 7px;
                                    align-self: flex-end;
                                    flex-shrink: 0;
                                    width: 48px;
                                    text-align: center;
                                    height: 27px;
                                    line-height: 27px;
                                    right: 0;
                                    position: absolute;
                                    top: 0;
                                    bottom: 0;
                                    margin: auto;
                                }
                            }
                        }
                    }
                    .cell{
                        border-bottom: 1px solid #e6e6e6;
                    }
                }
                .more-result {
                    font-size: 15px;
                    color: #ef4238;
                    line-height: 44px;
                    height: 44px;
                    text-align: center;
                }
            }
            .dy{
                margin-bottom: 10px;
            }
            .searchResult{
                width: 100%;
                background: #fff;
                height:100%;
                h3{
                    font-size: .15rem;
                    color: #999;
                    padding: .1rem .15rem;
                }
                .C-list{
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    padding: .13rem .15rem .13rem 0;
                    margin-left: .15rem;
                    margin-right: .15rem;
                    background-color: #fff;
                    position: relative;
                    overflow: hidden;
                    border-bottom:.01rem solid #e8e8e8;
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
                }
                .more-result{
                        font-size: 15px;
                        color: #ef4238;
                        line-height: 44px;
                        height: 44px;
                        text-align: center;
                    }
            }
        }
`
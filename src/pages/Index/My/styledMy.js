import styled from 'styled-components'

export const MyorderWrap = styled.div `
    font-size: 14px;
    color: #777;
    overflow:auto;
    .order-list{
        .order-item{
            background-color: #fff;
            margin-bottom: 10px;
            .order-title {
                display: flex;
                padding: 0 15px;
                .cinema-name {
                    display: inline-block;
                    text-align: left;
                    -webkit-box-flex: 1;
                    flex: 1 1 auto;
                    line-height: 38px;
                    height: 38px;
                    font-size: 13px;
                    color: #666;
                    margin-right: 6px;
                    &:after {
                        display: inline-block;
                        content: "";
                        width: 7px;
                        height: 7px;
                        border-left: 1px solid #777;
                        border-top: 1px solid #777;
                        transform: rotate(135deg);
                    }
                }
            }
            .order-detail-link{
                .order-info{
                    margin: 12px 15px;
                    overflow: hidden;
                    position: relative;
                    display: flex;
                    img {
                        -webkit-box-flex: 0;
                        flex: 0 0 auto;
                        width: 57px;
                        height: 80px;
                        display:block;
                    }
                    .order-desc{
                        -webkit-box-flex: 1;
                        flex: 1 1 auto;
                        margin-left: 12px;
                        margin-top: 4px;
                        overflow: hidden;
                        .movie-name {
                            font-size: 15px;
                            color: #000;
                            line-height: 21px;
                            height: 21px;
                        }
                        .showTime {
                            font-size: 12px;
                            color: #888;
                            line-height: 18px;
                            height: 18px;
                            margin-top: 5px;
                        }
                        .position{
                            font-size: 12px;
                            color: #888;
                            line-height: 18px;
                            height: 18px;
                            span{
                                margin-left:5px;
                            }
                        }
                    }
                }
            }
            .mb-line-t {
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjOMDAAAACRADBQq93fQAAAABJRU5ErkJggg==) 0 top repeat-x;
                background-size: 1px 1px;
            }
            .order-more {
                margin-left: 15px;
                padding: 0 15px 0 0;
                position: relative;
                .price{
                    line-height: 42px;
                    height: 42px;
                    font-size: 13px;
                    color: #888;
                    display: inline-block;
                }
                .status {
                    color: #333;
                    line-height: 42px;
                    height: 42px;
                    font-size: 13px;
                    display: inline-block;
                    position: absolute;
                    right: 10px;
                }
            }
        }
        .mb-line-b{
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==) 0 bottom repeat-x;
            background-size: 1px 1px;
        }
        .line-ellipsis {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
`

export const NoCard = styled.div `
    text-align: center;
    padding-top: 1.56rem;
    img {
        width: .96rem;
        height: .96rem;
    }
    div {
        text-align: center;
        font-size: .16rem;
        color: #999;
    }
    .btn {
        margin-top: .1rem;
        padding: .15rem;
        font-size: .28rem;
        color: #f34d41;
        background: #fff;
        border: 1px solid #f34d41;
        display: inline-block;
        text-align: center;
        border-radius: 4px;
        line-height: 1;
        span{
            color: #f34d41;
            font-size:16px;
        }
    }
`

export const CouponWrap = styled.div `
    .coupon {
        padding: 15px 15px 0 20px;
        display: flex;
        .input-wrapper {
            width: 80%;
            border: 1px solid #ccc;
            border-radius: 5px;
            display: inline-block;
            box-sizing: border-box;
            input {
                display: block;
                padding: 5px 0 5px 5px;
                width: calc(100% - 5px);
                border: none;
                border-radius: 5px;
            }
        }
        .add-coupon{
            margin-left: 10px;
            color: #f03d37;
        }
    }
    .container{
        -webkit-box-flex: 1;
        flex: 1;
        .coupon-list {
            padding-bottom: 15px;
            .coupon-item.outTime {
                background-image: url(https://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycoupon/img/expired.png);
            }
            .coupon-item {
                background-size: 65px 65px;
                background-position: top 7px right 7px;
                background-repeat: no-repeat;
                background-color: #fff;
                border: 1px solid #d8d8d8;
                border-radius: 8px;
                margin: 15px 15px 0;
                display: flex;
                position: relative;
                overflow: hidden;
            }
            .coupon-left{
                -webkit-box-flex: 0;
                flex: 0 0 auto;
                min-height: 125px;
                width: 108px;
                background-color: #c3c3c3;
                color: #fff;
                .left-wrapper {
                    position: absolute;
                    top: 50%;
                    margin-top: -33px;
                    font-weight: 700;
                    text-align: center;
                    line-height: 1.2;
                    width: 108px;
                    .desc {
                        font-size: 35px;
                        span {
                            font-size: 18px;
                        }
                    }
                    .type {
                        display: inline-block;
                        padding: 6px 12px 0;
                        font-size: 14px;
                        font-weight: 400;
                        border-top: 1px solid rgba(0,0,0,.08);
                    }
                }
            }
            .coupon-right {
                border-left: 1px dashed #c3c3c3;
                -webkit-box-flex: 1;
                flex: 1 1 auto;
                overflow: hidden;
                position: relative;
                .title {
                    margin-top: 10px;
                    padding: 0 16px;
                    font-size: 16px;
                    line-height: 24px;
                    height: 24px;
                    color: #333;
                }
                .limitDesc {
                    margin-top: 6px;
                    padding: 0 16px;
                    font-size: 12px;
                    line-height: 14px;
                    color: #999;
                    margin-bottom: 36px;
                }
                .range-status-container {
                    position: relative;
                    width: 100%;
                    border-top: 1px solid #d8d8d8;
                    .range-status {
                        position: relative;
                        line-height: 22px;
                        font-size: 12px;
                        text-align: right;
                        padding: 0 16px;
                        white-space: pre-wrap;
                        color: #777;
                    }
                }
            }
            .business-tag {
                border-right: 20px solid #c3c3c3;
                border-top: 20px solid #c3c3c3;
            }
            .business-tag {
                position: absolute;
                top: 0;
                right: 0;
                color: #fff;
                /* border-right: 20px solid #91cbfa;
                border-top: 20px solid #91cbfa; */
                border-left: 20px solid transparent;
                border-bottom: 20px solid transparent;
                width: 0;
                height: 0;
                span {
                    position: absolute;
                    font-size: 12px;
                    right: -25px;
                    top: -10px;
                    line-height: 1;
                    transform: rotate(45deg);
                    width: 30px;
                }
            }
            .line-ellipsis {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        }
    }
`
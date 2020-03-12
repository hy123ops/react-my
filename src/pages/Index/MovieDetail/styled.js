import styled from 'styled-components'

export const DetailWrap = styled.div `
    .bscroll-wrapper{
        height: 100%;
    }
    .movhome {
        width: 100%;
        position: relative;
        .cinemaShow-head{
            width: 100%;
            height: .5rem;
            color: #fff;
            background: #e54847;
            display: flex;
            flex-direction: row;
            overflow: hidden;
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
            .nav-head{
                display: block;
                width: 100%;
                font-size: 18px;
                font-weight: 400;
                text-align: center;
                line-height: .5rem;
                margin-right: 50px;
            }
            h1{
                margin:0;
            }
        }

        .movie_box_t {
            display: flex;
            position: relative;
            height: 1.88rem;
            height: 1.38rem;
            top: .19rem;
            left: .15rem;
            z-index: 3;
            color: #fff;
            .movie_img img {
                width: 1.1rem;
                height: 1.6rem;
            }

            .movie_cont {
                width: 60%;
                height: 1.55rem;
                margin-left: .125rem;
                font-size: .12rem;
                overflow: hidden;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                .movie_cnm {
                    padding:.02rem 0;
                    font-size: .2rem;
                    overflow: hidden;
                    font-weight: 700;
                }

                .movie_enm {
                    padding:.02rem 0;
                    width:100%;
                    font-size: .12rem;
                    opacity: .6;
                }

                .movie_cat {
                    padding:.02rem 0;
                    width:100%;
                    opacity: .6;
                    font-size: .12rem;
                    overflow: hidden;
                    margin: 0;
                }

                .movie_star {
                    padding:.02rem 0;
                    width: 100%;
                    opacity: .6;
                    font-size: .12rem;
                    overflow: hidden;
                }
                .movie_dayrime{
                    width: 100%;
                    opacity: .6;
                    font-size: .12rem;
                    overflow: hidden;
                    padding: .02rem 0;
                }
            .watch-wrap{
                display: flex;
                flex-direction: row;;
                .want-to-watch,.looked {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: hsla(0,0%,100%,.35);
                    box-shadow: 0 0.02rem 0.08rem 0 rgba(0,0,0,.1);
                    border-radius: .08rem;
                    font-size: .20rem;
                    width: 50%;
                    color: #fff;
                    padding: .1rem 0;
                    margin-right: .2rem;
                    img{
                        width: .15rem;
                        height: .15rem;
                        margin-right: .12rem;
                    }
                    span{
                        font-size: .14rem;
                    }
                }
            }
                

            }


        }

        .WOM {
            background-color: rgba(0, 0, 0, .2);
            box-shadow: 0 0 0.06rem 0 hsla(0, 0%, 100%, .03);
            border-radius: .12rem;
            margin-top: .5rem;
            padding: .2rem .24rem;
            border-bottom: 1px solid;
            margin-left: .2rem;
             margin-right: .2rem;
            .look-p {
                text-align: center;
                padding: .2rem 0;
                .movie_people {
                    font-size: .18rem;
                    font-weight: 700;
                    color: #fc0;
                    margin-top: .11rem;
                    @include border(0 0 1px 0, #e8e8e8);
                }
                .look {
                    font-size: .12rem;
                    color: #fff;
                    
                }
            }

            .wom {
                display: flex;
                color: #fff;
                justify-content: space-between;
                align-items: center;
            }
            .welcome{
                color: #ffe4a2;
            }
        }

        .shichang {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: .1rem 0;
            padding: .15rem;
            color: #fff;
            border-bottom: 1px solid;
        }

        .brief {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .jianjie {
                color: #fff;
                font-size: .15rem;
                padding: .1rem .15rem;
                align-items: center;
            }

            .zhengwen {
                color: #fff;
                font-size: .15rem;
                padding: .15rem;

            }
        }
        .actors{
            border: none;
            padding: .2rem 0;
            span{
                color: #fff;
                font-size: .15rem;
                padding: .1rem .15rem;
                align-items: center;
            }
            .actor-wrap{
                .actor-list{
                    background: none;
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    
                    .left-margin{
                        border: none;
                        width: 1rem;
                        height: 1rem;
                        display: block;
                        background: none;
                        margin: .1rem .1rem;
                    }
                }
            }
        }
        .jutiphoto{
            
            span{
                color: #fff;
                font-size: .15rem;
                padding: .15rem .15rem;
                align-items: center;
                margin: .1rem 0;
            }
            .swiper-wrapper{
                padding-bottom: 100px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                .swiper-slide{
                    margin: .2rem .2rem;
                    img{
                        width: 1.2rem;
                        height: .8rem;
                        margin-right: .04rem;
                        margin-bottom: .05rem;
                    }
                }
            }
        }
    }
    .buy-ticket-btn {
        background-color: #fff;
        height: .8rem;
        width: 100%;
        border-top-left-radius: .1rem;
        border-top-right-radius: .1rem;
        overflow: hidden;
        margin: 0;
        bottom: 0;
        left: 0;
        position: absolute;
        z-index: 9;
        .buy-wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            img{
                margin-left: .48rem;
                margin-right: .1rem;
                width: .2rem;
                height: .2rem;
            }
            .goto-ticket {
                flex: 1;
                height: .3rem;
                background-image: linear-gradient(-90deg, #fb3333, #ff5269);
                box-shadow: 0 0.06rem 0.12rem 0 rgba(251, 51, 51, 0.3);
                border-radius: .5rem;
                font-size: .2rem;
                color: #fff;
                text-align: center;
                line-height: .3rem;
                margin: 0 .2rem;
            }
        }
    }
        
`

export const CinemaDetailWrap = styled.div `
    .cinemaShow-head{
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
        h1{
            display: block;
            -webkit-box-flex: 1;
            font-size: .18rem;
            font-weight: 400;
            text-align: center;
            line-height: 50px;
            margin: 0;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin-right: 52.5px;
        }
    }

    .body-wrap{
        height: 100%;
        margin-bottom: 25px;
        overflow: auto;
        overflow-x:hidden;

        .cinema-wrap{
            background-color: #fff;
            padding-bottom:.1rem;
            .cinema-block{
                .cinema-info{
                    padding-right: 90px;
                    position: relative;
                    padding: 15px;
                    overflow: hidden;
                    .title {
                        width: 75%;
                        font-size: 17px;
                        line-height: 24px;
                        font-weight: 700;
                        color: #333;
                    }
                    .location {
                        width: 80%;
                        margin-top: 2px;
                        font-size: 13px;
                        line-height: 18.5px;
                        color: #999;
                    }
                    .location-icon {
                        position: absolute;
                        right: 0;
                        top: 50%;
                        width: .7rem;
                        height: .31rem;
                        transform: translateY(-50%);
                        border-left: 1px solid #d8d8d8;
                        text-align: center;
                        img {
                            display: inline-block;
                            width: 19px;
                            height: 22px;
                            margin-top: 5px;
                        }
                    }
                }
            }
        }
        .cinema-nav{
            .movlist {
                width: 100%;
                height: 1.45rem;
                .swiper-container {
                    width: 100%;
                    height: 100%;
                    position: relative;
            
                    .box-z {
                        position: absolute;
                        width: 100%;
                        height: 1.88rem;
                        background-color: #333;
                    }
            
                    .box {
                        width: 100%;
                        height: 1.88rem;
                        position: absolute;
                        justify-content: center;
                        filter: blur(.2rem);
                        opacity: .55;
                        z-index: 1;
                        background-size: cover;
                        background-repeat:no-repeat;
                    }
            
                    .post{
                        border:2px solid #fff;
                        &:after {
                            content: "";
                            position: absolute;
                            bottom: -6px;
                            left: 50%;
                            -webkit-transform: translateX(-50%);
                            transform: translateX(-50%);
                            width: 10px;
                            height: 5px;
                            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMwODIyNEEwNTkwRDExRTZBNkMwOTE1NDA0RjA5MDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMwODIyNEExNTkwRDExRTZBNkMwOTE1NDA0RjA5MDA3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzA4MjI0OUU1OTBEMTFFNkE2QzA5MTU0MDRGMDkwMDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzA4MjI0OUY1OTBEMTFFNkE2QzA5MTU0MDRGMDkwMDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7kjYk3AAAAVUlEQVR42qzMMQ7AIAwEwSvy8P25EwokZNkYCFcgCu/IzLB7Q9+jS2gz1MG/KN0ZwVOU0fDgLorvI3AVJWozsELJuhmYocyaCvQo1f2jeiT/cK8AAwBzvH2t7aaajQAAAABJRU5ErkJggg==") no-repeat;
                            background-size: contain;
                        }
                    }
                    .swiper-slide {
                        position: absolute;
                        z-index: 5;
                        text-align: center;
                        font-size: 18px;
                        width: 75px;
                        height: 109.24px;
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: 300ms;
                        transform: scale(0.8);
                        padding-top: .3rem;
                    }
            
                    .swiper-slide img {
                        height: 110px;
                        width: 75px;
            
                    }
            
                    .swiper-slide-active,
                    .swiper-slide-duplicate-active {
                        transform: scale(1);
                    }
            }
        }
    }
        .movdes{
            padding-top: .1rem;
            .movde {
                width: 100%;
                height: .6rem;
                background: #fff;
                padding: .11rem .15rem;
                text-align: center;
                line-height: .6rem;
                margin-top: 40px;
                border-bottom: 1px solid #ccc;
                &.active{
                    display:block ;
                }
                .movnm {
                    height: .24rem;
                    line-height: .24rem;
                    font-size: .17rem;
                    color: #333;
                    font-weight: 700;
            
                    .pf {
                        color: #ffb400;
                        font-size: .16rem;
                    }
                    .fen{
                        color: #ffb400;
                        font-size: .12rem;
                    }
                }
                .movDel{
                    margin-top: .02rem;
                    height: .185rem;
                    line-height: .185rem;
                    font-size:.13rem;
                    color: #999;
                }
            }
            .showDays{
                width: 100%;
                height: 45px;
                background: #fff;
                .detail-data{
                    width: 100%;
                    /* height: 100%; */
                    overflow-x: auto;
                    .a{
                        width: 480px;
                    }
                    .today{
                        display: inline-block;
                        width: 1.1rem;
                        height: 100%;
                        line-height: .45rem;
                        margin-left: 4.5px;
                        font-size: 14px;
                        text-align: center;
                        color: #777;
                    }
                    .chosen{
                        border-bottom: 2px solid #f03d37;
                        color: #f03d37;
                    }
                }
            }
            .zhekou{
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                background-color: #fff5ea;
                padding: 10px 0;
                align-self:baseline;
                .zhekouFont{
                    margin-left:10px;
                    background-color:#ff941a;
                    color: #fff;
                    padding: 1px;
                    font-size: 10px;
                    line-height: .15rem;
                    height: .15rem;
                    width: .34rem;
                    text-align: center;
                }
                .lijian{
                    flex: 1;
                    text-align: left;
                    color: #fa9600;
                    font-size: 12px;
                    padding-left: 15px;
                }
                .kaika{
                    margin-right:10px;
                    flex: 0 0 auto;
                    color: #999;
                    font-size: 12px;
                }
            }
            .seat-inner-wrap{
                width:100%;
                position: relative;
                min-height: 40px;
                .no-seat {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 230px;
                    background-color: #f0f0f0;
                    .icon {
                        width: 77.5px;
                        img {
                            width: 100%;
                        }
                    }
                    .text {
                        margin-top: 12px;
                        line-height: 1;
                        font-size: 16px;
                        color: #acacac;
                    }
                }
            }
            .ListUl{
                padding: 0 15px;
                background: #fff;
                .ListLi{
                    display: flex;
                    flex-direction:row;
                    align-items: center;
                    padding:8px 0;
                    /* border-bottom:1px solid #777; */
                    &:last-child{
                        @include border(0 0 0 0);
                    }
                    .ListTime{
                        flex: 1.5;
                        .startTime{
                            font-size: .16rem;
                            color: #333;
                            white-space: nowrap;
                        }
                        .endTime{
                            color: #999;
                            font-size: 11px;
                            white-space: nowrap;
                        }
                    }
                    .Lange{
                        margin-left: 17px;
                        flex: 2;
                        .LangeDetail{
                            margin-top: 6px;
                            line-height: 18px;
                            font-size: 13px;
                            color: #333;
                            white-space: normal;
                        }
                        .cinemaNumber{
                            margin-top: 6px;
                            font-size: 11px;
                            color: #999;
                            white-space: normal;
                        }
                    }
                    .price{
                        flex:3;
                        font-size: 10px;
                        .priceNumber{
                            .priceNumberf{
                                font-size: 19px;
                                color: #f03d37;
                                margin-top: 1px;
                            }
                            .priceFont{
                                font-size: 11px;
                                color: #f03d37;
                                margin-top: 1px;
                            }
                        }
                        .zhekouk{
                            flex: 2;
                            display: inline-block;
                            line-height: 15px;
                            height: 15px;
                            transform: scale(.8);
                            transform-origin: left;
                            margin-right: -16px;
                            border: 1px solid #ff9000;
                            border-radius: 2px;
                            font-size: 12px;
                            .zhekouka{
                                color: #fff;
                                background-color: #f90;
                                transform: scale(.8);
                            }
                            
                            .zhekoujia{
                                background-color: #fff;
                                color: #f90;
                                margin-left: -4px;;
                                @include border(1px, #f90);
                                transform: scale(.8);
                            }
                        }
                        .zhekouyouhui{
                            margin-top: 2px;
                            font-size: 11px;
                            color: #999;
                        }
                        }
                        
                    }
                    
                    .buyprice{
                        margin-right:10px;
                        flex:1;
                        top: 50%;
                        padding:5px 0;
                        font-size: 12px;
                        background-color: #f03d37;
                        color: #fff;
                        border-radius: 4px;
                        text-align: center;
                    }
                
                }
                .taocan{
                    margin-top: 20px;
                    background: #fff;
                    padding:0 15px ;
                    .taocanTitle{
                        height: .45rem;
                        line-height:.45rem ;
                        line-height: 45px;
                        font-size: 15px;
                        color: #666;
                        @include border(0 0 1px 0, #777);
                    }
                        .taocanUl{
                            .taocanLi{
                                padding:15px 0;
                                width: 100%;
                                display: flex;
                                flex-direction: row;
                                justify-content: left;
                                .taocanLiLeft{
                                    width:92px;
                                    height:92px;
                                    margin-right:15px ;
                                    position: relative;
                                    #taocanPicture{
                                        display: block;
                                        width:100%;
                                    }
                                    .hot-tag {
                                        position: absolute;
                                        left: 0;
                                        top: 0;
                                        display: inline-block;
                                        height: 18px;
                                        line-height: 18px;
                                        background-color: #fa5939;
                                        font-size: 12px;
                                        padding: 0 5px;
                                        color: #fff;
                                        border-bottom-right-radius: 2px;
                                    }
                                }
                                .taocanLiRight{
                                    flex:1;
                                    display: flex;
                                    flex-direction: column;
                                    position: relative;
                                    /* margin: 0 15px 0 102px; */
                                    height: 100%;
                                    overflow: hidden;
                                    .taocanLiRightTop{
                                        .taocanNum{
                                            display: inline-block;
                                            vertical-align: top;
                                            margin-top: 1px;
                                            margin-right: 7px;
                                            padding: 0 4px;
                                            font-size: 10px;
                                            line-height: 15px;
                                            height: 15px;
                                            background: #f90;
                                            border-radius: 2px;
                                            color: #fff;
                                        }
                                    }
                                    .taocanLiRightCenter{
                                        color: #777;
                                        font-size: 12px;
                                        text-align: right;
                                        /* padding-right: 2px; */
                                        margin: .1rem;
                                    }
                                    .taocanLiRightBottom{
                                        display: flex;
                                        justify-content: space-between;
                                        .taocanPrice{
                                            font-size: 17px;
                                            color: #f03d37;
                                        }
                                        .taocanButton{
                                            display: inline-block;
                                            padding: 0 8px;
                                            margin-right:15px;
                                            height: 27px;
                                            line-height: 27px;
                                            font-size: 12px;
                                            border-radius: 3px;
                                            color: #fff;
                                            background-color: #f03d37;
                                        }
                                    }
                                }
                            }
                        }
                    }
        }
    }
`
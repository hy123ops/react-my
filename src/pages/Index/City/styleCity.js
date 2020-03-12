import styled from 'styled-components'

export const CityWrap = styled.div `
        background: #ebebeb;
        height:100%;
    .citiesChoose{
        height: 100%;
        overflow-y: scroll;
        .city-title{
            padding-left: 15px;
            line-height: 30px;
            font-size: 14px;
            color: #333;
            @include ellipsis();
        }
        .city-inline{
            display: flex;
            flex-direction: row;
            background-color: #f5f5f5;
            padding-bottom: 8px;
            font-size: 14px;
            color: #333;
            margin-right: 20px;
            @include ellipsis();
            .city-item{
                padding: 0 20px;
                background: #fff;
                height: 33px;
                margin-top: 15px;
                margin-left: 4%;
                border: 1px solid #e6e6e6;
                border-radius: 3px;
                line-height: 33px;
                text-align: center;
                @include ellipsis();
            }
        }
        .city-inline2{
            background-color: #f5f5f5;
            padding-bottom: 8px;
            padding-right: 30px;
            font-size: 14px;
            color: #333;
            margin-right: 20px;
            .city-item{
                display: inline-block;
                width: 20%;
                padding: 0 20px;
                background: #fff;
                height: 33px;
                margin-top: 15px;
                margin-left: 5px;
                border: 1px solid #e6e6e6;
                border-radius: 3px;
                line-height: 33px;
                text-align: center;
                @include ellipsis();
            }
        }
        .city-list{
            display: block;
            .city-title2{
                padding-left: 15px;
                line-height: 30px;
                font-size: 14px;
                color: #333;
                @include ellipsis();
            }
            .city-inline2{
        
                padding-bottom: 8px;
                font-size: 14px;
                color: #333;
                @include ellipsis();
                .city-item2{
                    border-bottom: .01rem solid #c8c7cc;
                    height: 33px;
                    margin-top: 15px;
                    margin-left: 4%;
                    line-height: 33px;
                    text-align: left;
                    @include ellipsis();
                }
            }
        }
        .nav{
            position: fixed;
            top: 11vh;
            right: 0;
            width: 35px;
            z-index: 10;
            text-align: center;
            font-size: 12px;
            background: transparent;
            padding: 0 0;
            .nav-item{
                padding: 0 0;
            }
            .active{
                background: #e6e6e6;
            }
            li{
                padding: 0 0;
            }
        }
    }
`
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

export const MyMainWrap =styled.div `
    margin-top:.5rem;
    .my-center {
        min-height: 100%;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        .header {
            background-color: #f03d37;
            background-image: url(https://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycenter/img/bg.png);
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: 100% 150px;
            height: 150px;
            overflow: hidden;
            text-align: center;
            img {
                display: inline-block;
                margin-top: .3rem;
                width: .6rem;
                height: .6rem;
                border-radius: .6rem;
                border: 3px solid #fff;
            }
            .name {
                margin-top: .07rem;
                font-size: .16rem;
                line-height: 22.5px;
                color: #fff;
            }
        }
        .container{
            -webkit-box-flex: 1;
            flex: 1;
            .group {
                margin-top: .1rem;
                background: #fff;
                .orders{
                    padding: 0 .15remx;
                    position: relative;
                    overflow: hidden;
                    text-align: center;
                    .title {
                        position: relative;
                        margin: .13rem 0 0;
                        font-size: .15rem;
                        line-height: .21rem;
                        height: .21rem;
                        color: #333;
                        z-index: 9;
                        display: inline-block;
                        width: .8rem;
                        background-color: #fff;
                    }
                    .title-line {
                        position: absolute;
                        top: 23px;
                        left: 50%;
                        margin-left: -.8rem;
                        width: 1.6rem;
                        height: .01rem;
                    }
                    .mb-outline-b {
                        background-size: 1px 1px;
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==) 0 bottom repeat-x;
                    }
                    .mb-line-b {
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==) 0 bottom repeat-x;
                    }
                    .list {
                        display: flex;
                         flex-direction: row;
                        overflow: hidden;
                        .order-item {
                            width: 50%;
                            height: .97rem;
                            background-repeat: no-repeat;
                            background-position: top;
                            background-size: 42px auto;
                            margin-top: .18rem;
                            .dy,.sc{
                                height:.9rem;
                                p {
                                    position: relative;
                                    top: 53px;
                                    text-align: center;
                                    font-size: 15px;
                                    line-height: 21px;
                                    height: 21px;
                                    margin: 0;
                                    color: #333;
                                }
                            }
                        }
                        .movie {
                            background-image: url(https://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycenter/img/movie.png);
                        }
                        .store {
                            background-image: url(https://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycenter/img/store.png);
                        }
                    }
                }
                .item {
                    position: relative;
                    height: 44px;
                    line-height: 44px;
                    font-size: 15px;
                    margin-left: 15px;
                    padding-right: 15px;
                    color: #333;
                    &:after {
                        position: absolute;
                        right: 15px;
                        top: 18px;
                        display: inline-block;
                        content: "";
                        width: 8px;
                        height: 8px;
                        border-left: 1px solid #ccc;
                        border-top: 1px solid #ccc;
                        transform: rotate(135deg);
                    }
                }
            }
        }
    }
`
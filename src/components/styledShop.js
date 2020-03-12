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

export const BrandshopWrap = styled.div `
    width:100%;
    height:100%;
    display:flex;
    > div:first-child{
        width:25%;
        overflow: auto;
        >ul{
            li{
                height: 44px;
                padding-left: 10px;
                line-height: 44px;
                font-size: 14px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                color: #777;
            }
            .chosen{
                color: #f03d37;
                background: #f5f5f5;
            }
        }
    }

    > div:last-child{
        flex:1;
        width:65%;
        background: #f5f5f5;
        color: #777;
        font-size: 15px;
        margin-right:.2rem;
        overflow: auto;
        >ul{
            padding: 0 .2rem;
            li{
                position: relative;
                height: 45px;
                line-height: 45px;
                padding: 0 0 0 25px;
                .item-name {
                    width: 80%;
                    font-size: 14px;
                    color: #333;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                .item-count {
                    /* float: right; */
                    width: 20px;
                    margin-right: 10px;
                    color: #8f9296;
                    font-size: 12px;
                    text-align: right;
                    position: absolute;
                    right: 0;
                }
            }
            .chosen{
                .item-name,.item-count{
                    color: #f03d37;
                }
                &:before {
                    content: "";
                    display: block;
                    position: absolute;
                    left: 8px;
                    top: 19px;
                    width: 11.5px;
                    height: 8px;
                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAA9rOU8AAAABGdBTUEAALGPC/xhBQAABFlJREFUSA3dlltoXFUUhtda+8zMmUnStJPLSSdiUmwrSbAIuZEmNo3RQkFEX0pffBIEfVCkgvRmM7ShWk2q9FkQFF+ib1JNWyQXm5BOhpRACpKHIpZQTYg2t5k5c85erpM6YUhTY0aSgPtl7zP79s2/1/r3Rtimwh0dtDB0rTi1pPcoQhsocFdtEwu8nbhXwI7/ZUUQRdYtQHrS2A4Yrqw05wPhV1HjOwzwrEac15prtxzGA/mzwmryMb4PxFWaMaWBB9HlW7SVyngg98uXQU4SYhUDppC411HOxV2RiiHcKpip2kgoFKpoUuCeRMR2Zkxo5D4G/qTQqujHnh53S45pKhIJ7TD3NDPqqAJqchgcB3SvgHwctipHPBBPlE1XhkWRxeCTBxnhjEHQqgVEYmRcs/vmjsHRmABIDD8smxoz9w8cyJsLlh9i4rNE3GozpGXn8bSL3TvaXxrNBvFwNk0ZD6SgKNgKaYqi4rq05rSIcDsButMqG/0Oe2D5aP4WZbky+DAY09M1ZolppjAelwn/vUzu3RsI7vS3ug6d9gmIy5xGxjFHDM4aGP1+tSKZHWnebqg3wwVvzQaMtl+bmoKZjlxrD8TaXVxnsO+MIn0wzWzLAYylye3aZY30Pg7E248cws9Nwo8MhV/lk3tsqrY2lCvIXfGRJ8qK6iUQu8Q/miRSbQnP2BK55648H/tmraPJ3stAoBkHICWNEo3UnRdELUDfRuLxpeyB67VZVF0wjAYXnKgibpSASBHSrSVXn7cGY9ehb70VRBki/brNfJUQbCII+4guBYP+4xtRaKKmJn/Op9skWa7I0SxnjePqIZedqHVz5Pr6GA9HUOHAyCRo9z0xon4UIIl4i1B3BoLGcS8j1luIxdCscH67wXTBR/BMmtEh5jtJggs7B2M/rjc/u38ltaeb6572KbxsomoTPzBR82/imGeXHqS+LhsfX8yelGl7sL5w3nMBB7qU4moxNMlgvpNAOFU6MHI1M+7f1iumV3Jz9Gc/5b2RdPUPPvIuMLQMNDr9heZraynEcjRG2HxRQLqRdLVkTVpi73bCyA3EA15RJkOfbGnZ76Dzmby+2uRfBlytp7Xic/bM0pelExML3rjfBSS/KHREszovj6Nql8F2NY8nyTltDcSvZdbaaP0IjNg1zTbXV8kV/2FQUbutwfOeWXHRD/JnE1/cm53V4ad2v+Bqo8tHvM/LGnkYxRJKR62+2I2NAmSPfwTG6xQgfHCooRJcvBgw8BUJ7gAB/mGDHVWsfgFQlwzU+1zEFLs8aiv1bnH/UCx74Vzaa8JkAyngT31oHBFLNyU658QCkgqh1HsYMUM8CXiqZHC4P5fNV895LEwGaKa5eb8P7E7TUEflfRiS9Ad5xSc16OF54I7IQGxg9aK5fv8jTAYocbixPJnmzoCiYy6yIZfeYMKPJ0pvDI/luvFa89aFyQAtNjaWOn44wYgRR/Plkp9G4mst+L/57S+eQuIEp8oPOAAAAABJRU5ErkJggg==);
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                }
            }
        }
    }
`
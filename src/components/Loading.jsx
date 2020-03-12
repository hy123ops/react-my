import React, { Component } from 'react'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

function loadingToast() {
    Toast.loading('Loading...', 1, () => {
        console.log('Load complete !!!');
    });
}

export default class Loading extends Component {
    componentDidMount() {
        Toast.loading('Loading...', 30, () => {
            console.log('Load complete !!!');
        });

        setTimeout(() => {
            Toast.hide();
        }, 3000);
    }
    render() {
        return (
            <WingBlank>
                <WhiteSpace />
                <Button onClick={loadingToast}>loading</Button>
                <WhiteSpace />
            </WingBlank>
        );
    }
}

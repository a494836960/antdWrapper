/**
 * moneyInput 只能输入金额输入框的 HOC
 */
import React, {Component} from 'react';
import {Util} from 'vendor/common';

const WrapperMoneyInput = (WrapperComponent) => class Index extends Component {

    handleChange = (e) => {
        let {onChange, max, type} = this.props;

        let value = e.target.value;

        //let reg = /(^[0-9]*$)|(^[0-9]*\.\d{0,2}$)/;
        let reg = /(^[1-9][0-9]*$)|(^[1-9][0-9]*\.\d{0,2}$)|^0(?!\d)\.?\d{0,2}$|^[1-9]?$/;
        if (type == 'int') {
            reg = /(^0?$|^[1-9][0-9]*$)/;
        }
        if (!(reg.test(value))) {
            return;
        }

        if (!Util.isEmpty(max) && parseFloat(value) > max) { //max
            return;
        }

        onChange && onChange(e);
    }

    render() {
        return (
            <WrapperComponent {...this.props} onChange={this.handleChange} maxLength={12}>
            </WrapperComponent>
        );
    }
}

export default WrapperMoneyInput;
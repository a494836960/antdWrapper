/*
* 只允许输入数字 必须要有onChange事件
* */

import React, {Component} from 'react';
import {Input} from 'antd';
import {Util, Reg} from 'vendor/common';


let WrapperNumberInput = (WrapperComponent) => class NumberInput extends Component {
    handleChange = (e) => {
        let {onChange, maxLength, max, min} = this.props;
        let value = e.target.value;
        max = parseFloat(max);
        if ((maxLength && value.length > maxLength) || (max && value > max) || (min && value && value < min)) {
            return;
        }
        if (Reg.number.test(value) || Util.isEmpty(value)) {
            onChange && onChange(e);
        }
    }

    render() {
        let {maxLength, ...other} = this.props;
        return (
            <WrapperComponent {...other} onChange={this.handleChange}></WrapperComponent>
        )
    }
}

export default WrapperNumberInput;
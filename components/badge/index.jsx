import React, {Component} from 'react';
import {Badge} from 'antd';

export default class MyBadge extends Component {
    render() {
        let {list, target} = this.props;
        let obj = {};
        list && list.map(item => {
            if (item.code === target) {
                obj = item;
            }
        })
        return <Badge text={obj.name} status={obj.style||'s'}></Badge>
    }
}

import React, {Component} from 'react';

// 用来包装 span
export default class Span extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps!= this.props;
    }

    render() {
        return <span {...this.props}>{this.props.children}</span>
    }
}
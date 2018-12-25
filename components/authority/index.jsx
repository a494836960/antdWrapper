/*
* 权限管理
* */
import React, {Component} from 'react';
import {Util} from 'vendor/common';
import {Span} from './Span';

let wrapAuth = ComposedComponent => class WrapComponent extends Component {

    static propTypes = {
        auth: React.PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        let {authType = ''} = this.props;
        this.state.isOnlyRead = authType.indexOf('onlyRead') != -1;
    }

    componentDidMount() {

    }

    render() {
        let {auth, authType, ...other} = this.props;
        let {isOnlyRead} = this.state;

        return <ComposedComponent {...other}/>
        if (Util.checkAuth(auth)) {
            return <ComposedComponent {...other}/>
        } else if (isOnlyRead) {
            return <ComposedComponent {...other} onClick={() => {
                alert('你没有权限进行此操作，请联系管理员');
            }}>{this.props.children}</ComposedComponent>
        } else {
            return null;
        }
    }
}

wrapAuth.Span = Span;

export default wrapAuth;
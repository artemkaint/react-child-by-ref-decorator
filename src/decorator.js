import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import _ from 'lodash';

export default function childByRefWrapper(ComposedComponent) {
  return class ChildByRefWrapper extends Component {
    static propTypes = {
      children: PropTypes.node
    };

    render() {
      const byRef = _.groupBy(React.Children.toArray(this.props.children), 'ref');
      return React.createElement( ComposedComponent, {
        ...this.props,
        childrenByRef: byRef
      });
    }

    static displayName = `ChildByRefWrapper(${ComposedComponent.displayName || ComposedComponent.name || 'Component'})`
  };
}

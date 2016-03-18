import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

export default function childByRefWrapper(ComposedComponent) {
  return class ChildByRefWrapper extends Component {
    static propTypes = {
      children: PropTypes.node
    };

    render() {
      const byRef = _.keyBy(React.Children.toArray(this.props.children), 'ref');
      return <ComposedComponent {...this.props} childrenByRef={byRef}/>;
    }

    displayName = `ChildByRefWrapper(${ComposedComponent.displayName || ComposedComponent.name || 'Component'})`
  };
}

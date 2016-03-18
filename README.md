# react-child-by-ref-decorator
ECMA-6 Decorator for separate React children by ref property

Micro decorator allows you to access child node by `ref` property. 
Decorator wraps base component into component and transmits associated object through `childrenByRef` property into base component

## Example
```
// Inner component
import childByRefWrapper from 'react-child-by-ref-decorator';

@childByRefWrapper
export default class Switcher extends React.Component {

  render() {
    return <div>
      <div>{this.props.childrenByRef.refA}</div>
      <div>{this.props.childrenByRef.refB}</div>
    </div>;
  }
}


// Main component
import Switcher from 'Switcher';
export default class Main extends React.Component {

  render() {
    return <Switcher>
      <div ref="refA"></div>
      <div ref="refB"></div>
      <div ref="refC"></div>
    </Switcher>;
  }
}

```

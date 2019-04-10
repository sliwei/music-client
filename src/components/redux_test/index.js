import React from 'react';
import {connect} from 'react-redux'
import playAction from "../../actions/playAction";

@connect(state => {
  return {...state}
}, playAction)
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  add = () => {
    this.props.addSinger({
      singerId: 'xx',
      hash: 'xx'
    })
  };

  render() {
    return <div>
      <b>{JSON.stringify(this.props)}</b>
      <button onClick={this.add}>add</button>
    </div>
  }
}

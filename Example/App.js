import React from 'react';
import {
  Text,
  View,
  YellowBox,
} from 'react-native';

import { SharedValue, Worklet } from 'react-native-reanimated';
import { EventEmitter } from '../src/Animated';


YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);
// refers to bug in React Navigation which should be fixed soon
// https://github.com/react-navigation/react-navigation/issues/3956

class MainScreen extends React.Component {
  static navigationOptions = {
    title: '🎬 Reanimated Examples',
  };

  constructor(props) {
    super(props);

    this.eeMessage = 'deal'
    this.eeSharedValue = new SharedValue(this.eeMessage)
    this.eeObject = new EventEmitter()
    this.numval = new SharedValue(3)
    this.flag = new SharedValue(0)

    this.eeWorklet = new Worklet(function(v, n, f) {
      'worklet'
      this.log(v.get())
      this.log(n.get())
      if (f.get() === 0) {
        this.message(v.get())
        f.set(1)
      }
      return (n.get() >= 5)
    })
  }

  componentDidMount() {
    var t = this
    this.eeObject.addListener(this.eeMessage, function() {
      t.numval.set(11)
      t.numval.set(11)
      t.numval.set(11)
    })
    this.release = this.eeWorklet.apply([this.eeSharedValue, this.numval, this.flag]);
  }

  componentWillUnmount() {
    this.eeWorklet.release();
  }

  render() {
    return (
      <View>
        <Text>OK</Text>
      </View>
    );
  }

}


export default MainScreen;

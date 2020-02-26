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

    this.eeWorklet = new Worklet(function(v) {
      'worklet'
      this.log(v.get())
      this.message(v.get())
      return true
    })
  }

  componentDidMount() {
    this.eeObject.addListener(this.eeMessage, function() {
      return 'hello EE'
    })
    this.release = this.eeWorklet.apply([this.eeSharedValue]);
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

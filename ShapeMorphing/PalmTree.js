import React from "react";
import { Button, Image, TouchableOpacity, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from "react-native-reanimated";
import { addCurve, createPath, interpolatePath } from "react-native-redash";
import Svg, { Path } from "react-native-svg";
import * as Helper from '../helper'
import { polygonPath, starPath } from "./path";
const AnimatedPath = Animated.createAnimatedComponent(Path);
const PalmTree = ({ progress }) => {
  const translate = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    transform: [{
      rotateZ: translate.value
    },
    // { origin: { x: 'bottom' } }
    ],
  }));
  const configTiming = {
    duration: 1000,
    easing: Easing.bounce,
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
      <Animated.View
        style={[style]}
      >
        <Image source={require('./pineTree.png')} style={{ height: 300, width: 200 }} />
      </Animated.View>

      <TouchableOpacity
        style={{ height: 50, width: 50, backgroundColor: 'red', marginTop: 70 }}
        onPress={() => (translate.value = withRepeat(
          withSequence(
            withTiming(0.5, configTiming)
            ,
            withTiming(-0.5, configTiming)
          ), 1, true,
          (finised) => {

            translate.value = withTiming(0, configTiming)
          }
        ))}
      ></TouchableOpacity>
    </View >
  );
};

export default PalmTree;

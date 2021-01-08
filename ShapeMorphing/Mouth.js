import React from "react";
import { Button, Image, TouchableOpacity, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { addCurve, createPath, interpolatePath } from "react-native-redash";
import Svg, { Path } from "react-native-svg";
import * as Helper from '../helper'
import { polygonPath, starPath } from "./path";
const AnimatedPath = Animated.createAnimatedComponent(Path);
const Mouth = ({ progress }) => {
  const translate = useSharedValue(-25);

  const animatedProps2 = useAnimatedProps(() => ({
    d: Helper.interpolatePath(
      progress.value,
      [0, 0.5, 1],
      [
        {
          move: { x: 0, y: 25 },
          lineTo: [
            { x: 80, y: 25 },
            { x: 80, y: 50 },
            { x: 0, y: 50 },
          ]
        },
        {
          move: { x: 0, y: 25 },
          lineTo: [
            { x: 80, y: 25 },
            { x: 60, y: 50 },
            { x: 0, y: 50 },
          ]
        },
        {
          move: { x: 0, y: 25 },
          lineTo: [
            { x: 80, y: 25 },
            { x: 0, y: 50 },
            { x: 0, y: 50 },
          ]
        }
      ]
    )
  }
  ));
  const animatedProps = useAnimatedProps(() => ({
    d: Helper.interpolatePath(
      progress.value,
      [0, 1],
      [
        polygonPath,
        starPath
      ]
    )
  }
  ));
  console.log('Mouth: ', animatedProps)
  const style = useAnimatedStyle(() => ({
    width: 50, height: 50,
    transform: [{
      translateX: translate.value
    }],
  }));
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Svg
        style={{ justifyContent: 'center', alignItems: 'center', width: 200, height: 200 }}

        viewBox="0 0 100 100"
      >

        <AnimatedPath
          fill="yellow"
          stroke="red"
          strokeWidth={1}
          animatedProps={animatedProps}
        />
      </Svg >
    </View >
  );
};

export default Mouth;

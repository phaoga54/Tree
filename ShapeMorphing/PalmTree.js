import React, { useEffect } from "react";
import { Button, Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { Easing, interpolate, useAnimatedProps, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from "react-native-reanimated";
import { addCurve, createPath, interpolatePath } from "react-native-redash";
import Svg, { Path } from "react-native-svg";
import * as Helper from '../helper'
import { polygonPath, starPath } from "./path";
import { withAnchorPoint } from 'react-native-anchor-point';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedImage = Animated.createAnimatedComponent(Image);
const { width, height } = Dimensions.get('window')
const IMAGE_HEIGHT = 300 * 1.2;
const MARGIN = IMAGE_HEIGHT * 0.1
const IMAGE_WIDTH = 230 * 1.2
const START_POINT_X = (width - IMAGE_WIDTH) / 2
const START_POINT_Y = (height - IMAGE_HEIGHT - MARGIN) / 2
const FROM_VALUE = -10
const TO_VALUE = 10
const ROTATE_VALUE = 360 * 3
const PalmTree = ({ progress }) => {
  const translate = useSharedValue(0);
  const decorTranslate = useSharedValue(0);
  const rotateBox = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    transform: [{
      rotateZ: `${translate.value.toString()}deg`
    }],
  }));
  const styleDecor1 = useAnimatedStyle(() => ({
    transform: [
      { rotateZ: `${interpolate(translate.value, [FROM_VALUE, TO_VALUE], [-15, 15]).toString()}deg` },
      // { translateX: interpolate(translate.value, [FROM_VALUE, TO_VALUE], [-10, 10]) }
    ],
  }));
  const styleDecor2 = useAnimatedStyle(() => ({
    transform: [
      { rotateZ: `${interpolate(translate.value, [FROM_VALUE, TO_VALUE], [-15, 15]).toString()}deg` },
      // { translateX: interpolate(translate.value, [FROM_VALUE, TO_VALUE], [-15, 15]) }
    ],
  }));
  const styleDecorBell = useAnimatedStyle(() => ({
    transform: [
      { rotateZ: `${interpolate(translate.value, [FROM_VALUE, TO_VALUE], [-15, 15]).toString()}deg` },
      { translateX: interpolate(translate.value, [FROM_VALUE, TO_VALUE], [-7, 7]) }
    ],
  }));
  const styleDecor4 = useAnimatedStyle(() => ({
    transform: [
      { rotateZ: `${interpolate(translate.value, [FROM_VALUE, TO_VALUE], [-15, 15]).toString()}deg` },
      // { translateX: interpolate(translate.value, [FROM_VALUE, TO_VALUE], [-15, 15]) }
    ],
  }));
  const styleBox1 = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(decorTranslate.value, [0, 30], [0, -50]) },

      { translateY: interpolate(decorTranslate.value, [0, 30, 100], [0, -300, 700]) }
    ],
  }));
  const styleBox2 = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(decorTranslate.value, [0, 30], [0, 60]) },

      { translateY: interpolate(decorTranslate.value, [0, 40, 100], [0, -400, 600]) }
    ],
  }));
  const styleBox3 = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(decorTranslate.value, [0, 10, 40], [0, -10, -80]) },

      { translateY: interpolate(decorTranslate.value, [0, 30, 100], [0, -450, 700]) }
    ],
  }));
  const styleBox4 = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(decorTranslate.value, [0, 30], [0, 90]) },

      { translateY: interpolate(decorTranslate.value, [0, 30, 100], [0, -300, 700]) }
    ],
  }));
  const rotateStyle = useAnimatedStyle(() => ({
    transform: [
      { rotateZ: `${rotateBox.value.toString()}deg` },
    ],
  }));
  const rotateStyle2 = useAnimatedStyle(() => ({
    transform: [
      { rotateZ: `${rotateBox.value.toString()}deg` },
    ],
  }));
  const rotateStyle3 = useAnimatedStyle(() => ({
    transform: [
      { rotateZ: `${rotateBox.value.toString()}deg` },
    ],
  }));
  const rotateStyle4 = useAnimatedStyle(() => ({
    transform: [
      { rotateZ: `${rotateBox.value.toString()}deg` },
    ],
  }));
  const configTiming = {
    duration: 250,
    easing: Easing.linear,
  }
  const decorConfig = {
    duration: 3000,
    easing: Easing.linear,
  }
  const onFinish = (finish, value) => {
    'worklet'
    if (finish) {
      value.value = 0
    }
  }
  useEffect(() => {
    // translateDecor.value = 
  }, [])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Animated.View style={[{
        width: 60, height: 60, borderRadius: 20, position: 'absolute',
        left: width / 2 - 30, top: height / 2 - 30
      }, styleBox1]} >
        <AnimatedImage source={require('./Box1.png')}
          style={[{ height: 60, width: 60 }, rotateStyle]}
        />
      </Animated.View>
      <Animated.View style={[{
        width: 60, height: 60, borderRadius: 20, position: 'absolute',
        left: width / 2 - 30, top: height / 2 - 30
      }, styleBox2]} >
        <AnimatedImage source={require('./Box1.png')}
          style={[{ height: 60, width: 60 }, rotateStyle2]}
        />
      </Animated.View>
      <Animated.View style={[{
        width: 60, height: 60, borderRadius: 20, position: 'absolute',
        left: width / 2 - 30, top: height / 2 - 30
      }, styleBox3]} >
        <AnimatedImage source={require('./Box1.png')}
          style={[{ height: 60, width: 60 }, rotateStyle3]}
        />
      </Animated.View>
      <Animated.View style={[{
        width: 60, height: 60, borderRadius: 20, position: 'absolute',
        left: width / 2 - 30, top: height / 2 - 30
      }, styleBox4]} >
        <AnimatedImage source={require('./Box1.png')}
          style={[{ height: 60, width: 60 }, rotateStyle4]}
        />
      </Animated.View>
      <Animated.View
        style={[style, {
          height: 600, position: 'absolute',
          top: (Dimensions.get('window').height - IMAGE_HEIGHT) / 2 - MARGIN
        }]}
      >
        <Image source={require('./pineTree2.png')} style={{ height: IMAGE_HEIGHT, width: IMAGE_WIDTH }} />

      </Animated.View>
      <Animated.View style={[{
        width: 18, height: 18, borderRadius: 20, position: 'absolute',
        left: START_POINT_X + (IMAGE_WIDTH / 2 - 40), top: START_POINT_Y + (IMAGE_HEIGHT / 2 - 35)
      }, styleDecor1
      ]} >
        <Image source={require('./Ball1.png')} style={{ height: 35, width: 25 }} />
      </Animated.View>
      <Animated.View style={[{
        width: 18, height: 18, borderRadius: 20, position: 'absolute',
        left: START_POINT_X + (IMAGE_WIDTH / 2 + 20), top: START_POINT_Y + (IMAGE_HEIGHT / 2 + 15)
      }, styleDecor2]} >
        <Image source={require('./Ball1.png')} style={{ height: 35, width: 25 }} />
      </Animated.View>
      <Animated.View style={[{
        width: 18, height: 18, borderRadius: 20, position: 'absolute',
        left: START_POINT_X + (IMAGE_WIDTH / 2 - 3), top: START_POINT_Y + (IMAGE_HEIGHT / 2 - 85)
      }, styleDecorBell]} >
        <Image source={require('./Bell2.png')} style={{ height: 40, width: 40 }} />
      </Animated.View>
      <Animated.View style={[{
        width: 18, height: 18, borderRadius: 20, position: 'absolute',
        left: START_POINT_X + (IMAGE_WIDTH / 2 - 65), top: START_POINT_Y + (IMAGE_HEIGHT / 2 + 15)
      }, styleDecor4]} >
        <Image source={require('./socks1.png')} style={{ height: 60, width: 60 }} />
      </Animated.View>

      <TouchableOpacity
        style={{ marginTop: 400 }}
        onPress={() => {
          translate.value = withRepeat(
            withSequence(
              withTiming(FROM_VALUE, configTiming)
              ,
              withTiming(TO_VALUE, configTiming)
            ), 2, true,
            (finised) => {
              if (finised) {
                translate.value = withTiming(0, configTiming)
                decorTranslate.value = withTiming(100, decorConfig, (finish) => onFinish(finish, decorTranslate))
                rotateBox.value = withTiming(ROTATE_VALUE, decorConfig, (finish) => {
                  if (finish) {
                    rotateBox.value = 0
                  }
                })
              }
            })
        }}
      >
        <Text>Rung cây nhận quà</Text>
      </TouchableOpacity>
    </View >
  );
};

export default PalmTree;

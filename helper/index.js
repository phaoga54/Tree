import Animated, { interpolate } from "react-native-reanimated";

export const serialize = (path) => {
    "worklet";
    console.log('path: ',path)
    console.log('D: ', `M${path.move.x},${path.move.y} ${path.lineTo
        .map((l) => `L${l.x},${l.y}`)
        .join(" ")}${path.close ? "Z" : ""}`)
    return `M${path.move.x},${path.move.y} ${path.lineTo
        .map((l) => `L${l.x},${l.y}`)
        .join(" ")}${path.close ? "Z" : ""}`;
};

export const interpolatePath = (
    value, inputRange, outputRange,
    extrapolate = Animated.Extrapolate.CLAMP
) => {
    "worklet";
    const path = {
        move: {
            x: interpolate(
                value,
                inputRange,
                outputRange.map((p) => p.move.x),
                extrapolate
            ),
            y: interpolate(
                value,
                inputRange,
                outputRange.map((p) => p.move.y),
                extrapolate
            ),
        },
        // curves: outputRange[0].curves.map((_, index) => ({
        //     c1: {
        //         x: interpolate(
        //             value,
        //             inputRange,
        //             outputRange.map((p) => p.curves[index].c1.x),
        //             extrapolate
        //         ),
        //         y: interpolate(
        //             value,
        //             inputRange,
        //             outputRange.map((p) => p.curves[index].c1.y),
        //             extrapolate
        //         ),
        //     },
        //     c2: {
        //         x: interpolate(
        //             value,
        //             inputRange,
        //             outputRange.map((p) => p.curves[index].c2.x),
        //             extrapolate
        //         ),
        //         y: interpolate(
        //             value,
        //             inputRange,
        //             outputRange.map((p) => p.curves[index].c2.y),
        //             extrapolate
        //         ),
        //     },
        //     to: {
        //         x: interpolate(
        //             value,
        //             inputRange,
        //             outputRange.map((p) => p.curves[index].to.x),
        //             extrapolate
        //         ),
        //         y: interpolate(
        //             value,
        //             inputRange,
        //             outputRange.map((p) => p.curves[index].to.y),
        //             extrapolate
        //         ),
        //     },
        // })),


        lineTo: outputRange[0].lineTo.map((_, index) => {
            return ({
                x: interpolate(
                    value,
                    inputRange,
                    outputRange.map((p) => p.lineTo[index].x),
                    extrapolate
                ),
                y: interpolate(
                    value,
                    inputRange,
                    outputRange.map((p) => p.lineTo[index].y),
                    extrapolate
                ),

            })
        }
        ),
        close: true,
    };
    return serialize(path);
};

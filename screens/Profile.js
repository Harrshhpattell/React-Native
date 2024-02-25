import React from "react";
import { Text, View } from "react-native";
import Animated, { RollInRight, BounceOutDown } from "react-native-reanimated";

const Profile = () => {
  return (
    <Animated.View
      entering={RollInRight}
      exiting={BounceOutDown}
      style={{ backgroundColor: "plum", flex: 1 }}
    >
      <Text>ProfileScreen</Text>
    </Animated.View>
  );
};

export default Profile;

// import * as React from "react";
// import { Text } from "react-native";
// import Animated from "react-native-reanimated";
// import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

// const Profile = () => {
//   const translateY = useSharedValue(100);

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ translateY: translateY.value }],
//     };
//   });

//   React.useEffect(() => {
//     translateY.value = withTiming(0, { duration: 500 });
//   }, []);

//   return (
//     <Animated.View style={[animatedStyle, {backgroundColor: "plum", flex: 1}]}>
//       <Text>ProfileScreen</Text>
//     </Animated.View>
//   );
// };

// export default Profile;

// import * as React from "react";
// import { Button, Text } from "react-native";
// import Animated from "react-native-reanimated";
// import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

// const Profile = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const translateY = useSharedValue(100);

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ translateY: translateY.value }],
//     };
//   });

//   React.useEffect(() => {
//     if (isOpen) {
//       translateY.value = withTiming(0, { duration: 500 });
//     } else {
//       translateY.value = withTiming(600, { duration: 500 });
//     }
//   }, [isOpen]);

//   return (
//     <Animated.View style={[animatedStyle, {backgroundColor: "plum", flex: 1}]}>
//       <Text>ProfileScreen</Text>
//       <Button title="Toggle Animation" onPress={() => setIsOpen(!isOpen)} />
//     </Animated.View>
//   );
// };

// export default Profile;

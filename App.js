import React, { useState, useEffect } from 'react';
import { View, Image, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import { Easing } from 'react-native-reanimated';

const images = [
  require('./assets/image1.jpg'),
  require('./assets/image2.jpg'),
  require('./assets/image3.jpg'),
  require('./assets/image4.jpg'),
];

const FadeInOutImage = ({ source }) => {
  const opacity = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();

    return () => {
      opacity.setValue(0); // Reset opacity when component unmounts or source changes
    };
  }, [source]); // Reset animation when source changes

  return (
    <Animated.View style={{ opacity }}>
      <Image source={source} style={{ width: '100%', height: '90%', resizeMode: 'cover' }} />
    </Animated.View>
  );
};

const Dot = ({ active }) => (
  <View style={[styles.dot, active && styles.activeDot]} />
);

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change to 10000 for every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDotPress = (index) => {
    setCurrentIndex(index);
  };

  return (
    <View style={{ flex: 1 }}>
      <FadeInOutImage source={images[currentIndex]} />
      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handleDotPress(index)}>
            <Dot active={index === currentIndex} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'black',
  },
});

export default App;

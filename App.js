import React, { useState, useEffect } from 'react';
import { View, Image, Animated, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Easing } from 'react-native-reanimated';

const images = [
  { source: require('./assets/image1.jpg'), buttonPosition: 'leftTop' },
  { source: require('./assets/image2.jpg'), buttonPosition: 'rightTop' },
  { source: require('./assets/image3.jpg'), buttonPosition: 'leftBottom' },
  { source: require('./assets/image4.jpg'), buttonPosition: 'rightBottom' },
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

const ShopButton = ({ position }) => (
  <TouchableOpacity style={[styles.shopButton, styles[position]]}>
    <Text style={styles.shopButtonText}>SHOP</Text>
  </TouchableOpacity>
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
      <FadeInOutImage source={images[currentIndex].source} />
      <ShopButton position={images[currentIndex].buttonPosition} />
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
  shopButton: {
    position: 'absolute',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  leftTop: {
    top: 0,
    left: 0,
  },
  rightTop: {
    top: 0,
    right: 0,
  },
  leftBottom: {
    bottom: 0,
    left: 0,
  },
  rightBottom: {
    bottom: 0,
    right: 0,
  },
  shopButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;

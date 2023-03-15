import { Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import AnimatedLoader from 'react-native-animated-loader';
import { StyleSheet } from 'react-native';

export default function Loader({visible, message='Please wait...'}) {
  return (
    <AnimatedLoader
      visible={visible}
      overlayColor="rgba(255,255,255,0.75)"
      animationStyle={styles.lottie}
      speed={1}>
      <Text h4>{message}</Text>
    </AnimatedLoader>
  );
}

Loader.propTypes = {
  visible : PropTypes.bool,
  message : PropTypes.string,
};

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  container: {
    flex: 1,
  },
};

const SimpleComponent = ({ title }) => (
  <View style={styles}>
    <Text>{title}</Text>
    <Text>Halo Bandung</Text>
  </View>
);

export default SimpleComponent;

SimpleComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import Button from 'react-native-button';

const config = {
  components: {
    button: {
      primaryColor: '#ffba00',
      secondaryColor: '#94A0A2',
      fontFamily: 'Futura',
    },
  },
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    fontSize: 18,
    fontFamily: config.components.button.fontFamily,
    width: '100%',
  },
  primary: {
    overflow: 'hidden',
    borderRadius: 24,
    backgroundColor: config.components.button.primaryColor,
    width: '100%',
  },
  secondary: {
    overflow: 'hidden',
    borderRadius: 24,
    borderColor: config.components.button.secondaryColor,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    width: '100%',
  },
});

export default function ButtonTc(props) {
  const { children, type } = props;
  return (
    <Button
      style={
        type === 'primary'
          ? { ...styles.button, color: 'white' }
          : { ...styles.button, color: config.components.button.secondaryColor }
      }
      styleDisabled={{ color: 'white' }}
      disabled={false}
      containerStyle={styles[type]}
      disabledContainerStyle={{ backgroundColor: 'pink' }}
    >
      {children}
    </Button>
  );
}

ButtonTc.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
};

ButtonTc.defaultProps = {
  type: 'primary',
};

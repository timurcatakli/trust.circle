import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffba00',
    width: 96,
    height: 96,
    borderRadius: 12,
  },
});

export default function Logo() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.logo}>
        <Ionicons name="md-radio-button-on" size={64} color="white" style={{ paddingTop: 6 }} />
      </View>
    </View>
  );
}

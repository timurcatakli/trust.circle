import React from 'react';
import { View, Image, Text, SafeAreaView, Dimensions } from 'react-native';
import ButtonTc from '../shared/components/Button';

export default function Welcome() {
  const screenWidth = Math.round(Dimensions.get('window').width);
  return (
    <SafeAreaView style={{ flex: 1, display: 'flex' }}>
      <View style={{ justifyContent: 'center' }}>
        <Image
          source={require('../assets/media/launch.jpeg')}
          style={{
            backgroundColor: 'red',
            width: screenWidth,
            height: screenWidth / 1.5,
          }}
        />
      </View>
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 48,
            fontWeight: 'bold',
            color: '#3E9dff',
            fontFamily: 'American Typewriter',
          }}
        >
          trust.circle
        </Text>
        <View style={{ marginVertical: '4%' }} />
        <Text
          style={{
            lineHeight: 24,
            fontSize: 16,
            fontWeight: '100',
            color: '#94a0a2',
            fontFamily: 'Futura',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a auctor ipsum. Phasellus
          in risus elit. Cras porttitor vestibulum neque, et luctus orci egestas cursus. Sed tempor
          purus urna, at posuere orci ultricies ac.
        </Text>
      </View>

      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 20,
        }}
      >
        <ButtonTc type="primary">Button Primary</ButtonTc>
        <View style={{ marginVertical: 6 }} />
        <ButtonTc type="secondary">Button secondary</ButtonTc>
      </View>
    </SafeAreaView>
  );
}

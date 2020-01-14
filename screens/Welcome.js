import React from 'react';
import { View, Image, Text, SafeAreaView, Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../shared/components/Button';
import Logo from '../shared/components/Logo';

export default function Welcome() {
  const screenWidth = Math.round(Dimensions.get('window').width);
  return (
    <ImageBackground
      source={require('../assets/media/launch.jpg')}
      style={{ width: '100%', height: '100%' }}
    >
      <LinearGradient
        colors={['rgba(148, 160, 162, 0.5)', 'rgba(148, 160, 162, 0)']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%',
        }}
      >
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: '10%',
            paddingRight: '10%',
          }}
        >
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: '10%',
              paddingRight: '10%',
              paddingTop: '20%',
              paddingBottom: '4%',
              borderRadius: 12,
              flexDirection: 'column',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.36,
              shadowRadius: 6.68,
              elevation: 11,
            }}
          >
            <Logo />
            <View style={{ marginVertical: 6 }} />
            <Text
              style={{
                fontSize: 36,
                fontWeight: 'bold',
                color: '#3E9dff',
                fontFamily: 'American Typewriter',
              }}
            >
              trust.circle
            </Text>
            <View style={{ marginVertical: 6 }} />
            <Text
              style={{
                lineHeight: 24,
                fontSize: 16,
                fontWeight: '100',
                color: '#94a0a2',
                fontFamily: 'Futura',
                textAlign: 'center',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a auctor ipsum.
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              paddingLeft: '10%',
              paddingRight: '10%',
            }}
          >
            <Button type="primary">Register</Button>
            <View style={{ marginVertical: 6 }} />
            <Button type="secondary">Login</Button>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

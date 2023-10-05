import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, SafeAreaSafeAreaView, TouchableWithoutFeedback, Keyboard, TextInput, Button, TouchableOpacity, Platform, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Inbox({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: '#fff'}} showsVerticalScrollIndicator={false} indicatorStyle="white">
        <View style={styles.content}>
          <Text style={styles.boldtext}>Test</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 24,
  },
  content: {
    flex: 1,
  },
  logocontainer: {
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 150,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  body:{
    fontSize: 24,
    color: 'black',
  },
  body1:{
    fontSize: 12,
    color: 'black',
  },
  body2:{
    fontSize: 16,
    color: 'grey',
  },
  box: {
    marginTop: 24,
    width: 340,
    height: 120,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
  },
  boldtext: {
    fontSize: 36,
    fontWeight: '900',
  }, 
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 24,
    height: 24,
  },
  boldtext: {
    fontSize: 40,
    fontWeight: '900',
  }, 
  boxcontact: {
    fontSize: 15,
    textAlign: 'right',
    color: '#004479',
    fontWeight: 500,
  },
  contactbg:{
    backgroundColor: '#cedff2',
    padding: 'auto',
    borderRadius: 15,
    width: 130,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import Mybutton from '@/components/Mybutton';


const Login = () => {
  return (
    <View>
      <Image source={{ uri: '../assets/images/zomato.jpg' }} />
      <Text style={style.text}>India's #1 Food Delivery and Dining App</Text>
      <Text style={style.log}>Log in or Sign up</Text>
      <View style={style.in}>
        <TextInput style={style.num} placeholder='+91' />
        <TextInput style={style.input} placeholder=" Enter phone number" />
      </View>
      <Mybutton />
      <Text style={style.log}>or</Text>
      <Text style={style.end}>By continuing ,you agree to our
        terms of service privacy policy content policy
      </Text>
    </View>
  )
}

export default Login
const style = StyleSheet.create({
  text: {
    marginTop: '80%',
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
    shadowColor: 'black',
    letterSpacing: 2,
  },
  input: {
    borderWidth: 3,
    borderRadius: 10,
    width: '50%',
    height: 50,
    textAlign: 'center',
    paddingHorizontal: 5,
    marginBottom: 20,
    marginRight: '20%',
    marginTop: 20,
  },
  view: {
    color: 'red',
  },
  log: {
    textAlign: 'center'
  },
  end: {
    padding: '30%'
  },
  num: {
    borderWidth: 3,
    borderRadius: 10,
    height: 50,
    margin: 20,
    marginLeft: '20%'
  },
  in: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'

  }
})
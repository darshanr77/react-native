import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import DarkLogo from '../assets/darklogo.png'
import LightLogo from '../assets/lightlogo.png'

const ThemedLogo = () => {

    const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image style={styles.image} source={logo} />
  )
}

export default ThemedLogo

const styles = StyleSheet.create({
    image:{
        width:125,
        height:125,
        backfaceVisibility : 'visible',
        marginBottom:10,
        borderRadius:10
    }
})
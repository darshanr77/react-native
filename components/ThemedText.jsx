import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

const ThemedText = () => {

    const colorScheme = useColorScheme()
    const text = colorScheme === 'dark' 

  return (
    <View>
      <Text>ThemedText</Text>
    </View>
  )
}

export default ThemedText

const styles = StyleSheet.create({})
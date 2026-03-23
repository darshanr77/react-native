import { View, useColorScheme } from 'react-native';
import React from 'react';
import { Colors } from '../app/constants/Colors';

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View
      style={[
        { backgroundColor: theme.uiBackground },
        style
      ]}
      {...props}
    />
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  card:{
    borderRadius : 5 ,
    padding : 20
  }
})
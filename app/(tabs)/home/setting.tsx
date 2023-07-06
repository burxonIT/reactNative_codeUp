import { View, Text, Image } from 'react-native'
import React from 'react'

const settings = () => {
  return (
    <View>
        <Image style={{width: '100%', height: 500}} source={require('../../img/photo_2023-07-04_13-48-23.jpg')} />
      <Text>settings</Text>
    </View>
  )
}

export default settings
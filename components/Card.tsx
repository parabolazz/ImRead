import React from 'react';
import { View, Text } from '../components/Themed';
import { StyleSheet, TouchableOpacity} from 'react-native'

export default function Card({
  url
}: {
  url: string
}) {
  return <View style={{width: '100%'}}>
    <View style={{flexDirection: 'row', position: 'relative'}}>
    <TouchableOpacity style={{flex: 1}}>
    <Text style={{fontSize: 18}}>{url}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{
      position: 'absolute',
      left: '100%'
    }}>
      <Text>删除</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{
      position: 'absolute',
      right: '100%'
    }}>
      <Text>完成√</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
  </View>
}


const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    height: 1,
    // width: '100%',
  },
});

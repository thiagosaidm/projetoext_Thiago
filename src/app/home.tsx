import { View, Text, StatusBar, Image, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FaixasComponent from './components/Faixas';

const { width, height } = Dimensions.get('window');

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-slate-100 flex space-y-5" edges={['top']}>
      <StatusBar barStyle={'default'}/>

      <View className="flex-row justify-between items-center mx-5 mt-5">
        <View className="space-y-2">
          <Text className="text-4xl md:text-5xl lg:text-6xl ">
            PRONTO PARA TREINAR?
          </Text>
        </View>
      </View>

      <View className="items-center mt-4">
        <View className="w-11/12 h-64 md:w-4/5 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            className="w-full h-full object-cover"
            source={require('../../assets/images/header.jpeg')}
          />
        </View>
      </View>

      <View className="flex-1">
        <FaixasComponent />
      </View>
    </SafeAreaView>
  );
}

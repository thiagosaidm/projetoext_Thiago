import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FaixasComponent from './components/Faixas';





export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-slate-100 flex space-y-5" edges={['top']}>
      <StatusBar barStyle={'default'}/>

        <View className="flex-row justify-between items-center mx-5">
            <View className="space-y-2">
                <Text className="text-6xl ">
                    PRONTO PARA TREINAR?
                </Text>
            </View>

        </View>



        <View className="items-center mt-4">
        <View className="w-4/5 h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            className="w-full h-full object-cover"
            source={require('../../assets/images/header.jpeg')}
          />
        </View>
      </View>

    <View className="flex-1">
        <FaixasComponent>

        </FaixasComponent>
    </View>



    </SafeAreaView>
  )
}
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useReducer } from 'react';
import { Faixas } from '@/constants/constants';
import { useRouter } from 'expo-router';

export default function FaixasComponent() {
      const router = useRouter();

  return (
    <View className="mx-4 mt-4">
      <Text className="text-3xl">
        Faixas
        </Text>

        <FlatList
        data={Faixas}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: "80%", paddingTop: "4%" }}
        renderItem={({ item, index }) => <FaixasCard router={router} index={index} item={item} />}
      />
    </View>
  );
}

const FaixasCard = ({ item, router, index }) => {
  return (
    <View style={{ width: '50%', height: '80%' }}>
      <TouchableOpacity
        onPress={() => {
          switch (item.name) {
            case 'Branca':
              router.push('/brancascreen');
              break;
            case 'Azul':
              router.push('/azulroxascreen');
              break;
            case 'Roxa':
              router.push('/azulroxascreen');
              break;
              case 'Marrom':
                router.push('/marrompretascreen');
                break;
              case 'Preta':
                router.push('/marrompretascreen');
                break;
                case 'Nogi':
                  router.push('/nogiscreen');
                  break;
            default:
              break;
          }
        }}
        className="flex justify-between p-2 mb-1"
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ width: '100%', height: '125%' }}
          className="rounded-[15px]"
        />
      </TouchableOpacity>
    </View>
  );
};



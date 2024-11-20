import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Faixas } from '@/constants/constants';
import { useRouter } from 'expo-router';

export default function FaixasComponent() {
  const router = useRouter();

  return (
    <View style={{ marginHorizontal: 16, marginTop: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold'  }}>Faixas</Text>

      <FlatList
        data={Faixas}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 80, paddingTop: 16, paddingHorizontal: 8 }}
        renderItem={({ item, index }) => <FaixasCard router={router} index={index} item={item} />}
      />
    </View>
  );
}

const FaixasCard = ({ item, router, index }) => {
  return (
    <View style={{ width: '50%', padding: 8 }}>
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
        style={{ flex: 1, justifyContent: 'space-between', padding: 8, marginBottom: 8 }}
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ width: '100%', height: 90, borderRadius: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
};

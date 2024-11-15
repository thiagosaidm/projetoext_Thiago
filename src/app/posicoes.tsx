import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

export default function Posicoes() {
  const router = useRouter();

  return (
    <View className="flex-1 p-4">
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Text className="text-xl text-blue-500">Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/brancascreen')}
        className="p-4 bg-gray-100 rounded-lg mb-2"
      >
        <Text className="text-2xl">Faixa Branca</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/azulroxascreen')}
        className="p-4 bg-gray-100 rounded-lg mb-2"
      >
        <Text className="text-2xl">Faixa Azul</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/azulroxascreen')}
        className="p-4 bg-gray-100 rounded-lg mb-2"
      >
        <Text className="text-2xl">Faixa Roxa</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/marrompretascreen')}
        className="p-4 bg-gray-100 rounded-lg mb-2"
      >
        <Text className="text-2xl">Faixa Marrom</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/marrompretascreen')}
        className="p-4 bg-gray-100 rounded-lg mb-2"
      >
        <Text className="text-2xl">Faixa Preta</Text>
      </TouchableOpacity>
    </View>
  );
}

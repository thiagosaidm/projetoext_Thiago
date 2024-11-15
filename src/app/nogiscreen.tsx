import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

export default function NogiScreen() {
  const router = useRouter(); 

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <TouchableOpacity 
        onPress={() => router.back()}
        className="p-4 bg-gray-100 rounded-lg mb-4">
        <Text className="text-xl">Voltar</Text>
      </TouchableOpacity>

      <Text className="text-3xl">Conteúdo da Sem Kimono</Text>
    </View>
  );
}

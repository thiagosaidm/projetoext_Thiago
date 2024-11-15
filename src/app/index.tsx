import { useRouter } from "expo-router";
import { StatusBar, Text, View, Image, TouchableOpacity, Pressable } from "react-native";


export default function Index() {
  
  const router = useRouter();
  return (
      
    <View className="flex-1 flex justify-end">
      <StatusBar barStyle={"default"}/>
      <Image className="h-full w-full absolute" source={require('../../assets/images/leob2.jpeg')} />


      <View className="flex items-center w-full bg-black p-4 shadow-lg">
            <Text className="text-yellow-300 text-4xl font-bold tracking-widest text-center">
              LEO BARÃO JIU-JITSU
            </Text>
         <TouchableOpacity 
                onPress={()=>router.push('/home')}
                className="flex items-center mt-10" >
                <Text className="bg-yellow-300 text-gray-800 font-bold tracking-widest text-4xl px-6 py-3 rounded-lg shadow-lg transition ease-in-out duration-300 mb-20">
                  INICIAR
                </Text>
         </TouchableOpacity>
      </View>


    </View>
  );
}

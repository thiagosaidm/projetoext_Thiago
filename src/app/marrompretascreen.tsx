import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
  import React, {useEffect} from 'react';
import { useRouter } from 'expo-router';
import { Video } from 'expo-av';
import { Audio } from 'expo-av';

export default function MarromPretaScreen() {
  const router = useRouter();

  useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      staysActiveInBackground: false,
      
    });
  }, []);

  const videos = [
    { id: 1, title: "Entrada de Meia Guarda Profunda", uri: "https://raw.githubusercontent.com/thiagosaidm/fpretavid/main/Entrada%20de%20meia%20guarda%20profunda.mp4" },
    { id: 2, title: "Finalização Leg Lock", uri: "https://raw.githubusercontent.com/thiagosaidm/fpretavid/main/Finalização%20de%20leg%20lock.mp4" },
    { id: 3, title: "Raspada de meia guarda levantando", uri: "https://raw.githubusercontent.com/thiagosaidm/fpretavid/main/Raspada%20de%20meia%20guarda%20levantando.mp4" },
    { id: 4, title: "Leg Lock (Variação)", uri: "https://raw.githubusercontent.com/thiagosaidm/fpretavid/main/leglock.mp4" },
    { id: 5, title: "Raspada Meia Guarda", uri: "https://raw.githubusercontent.com/thiagosaidm/fpretavid/main/raspadameiaguarda.mp4" },
 
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => router.back()}
        style={styles.backButton}>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Posições Azul e Roxa</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {videos.map((video) => (
          <View key={video.id} style={styles.videoContainer}>
            <Text style={styles.videoTitle}>{video.title}</Text>
            <Video
                source={{ uri: video.uri }}
                useNativeControls
                style={styles.videoPlayer}
                shouldPlay={false}
                isMuted={false}
                volume={1.0}
                rate={1.0}
                
              />

          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButton: {
    padding: 16,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    margin: 16,
    width: 100,
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  videoContainer: {
    marginBottom: 24,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  videoPlayer: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    backgroundColor: 'black',
  },
});

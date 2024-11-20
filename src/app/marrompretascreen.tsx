import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
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
    { id: 2, title: "Finalização Leg Lock", uri: "https://thiagosaidm.github.io/projetovid/Finaliza%C3%A7%C3%A3o_de_leglock.mp4" },
    { id: 3, title: "Raspada de meia guarda levantando", uri: "https://thiagosaidm.github.io/projetovid/Raspada_de_meia%20guarda_levantando.mp4" },
    { id: 4, title: "Leg Lock (Variação)", uri: "https://thiagosaidm.github.io/projetovid/leglock.mp4" },
    { id: 5, title: "Raspada Meia Guarda", uri: "https://thiagosaidm.github.io/projetovid/raspadameiaguarda.mp4" },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.backButton}>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Posições Marrom e Preta</Text>

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

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  backButton: {
    padding: 16,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    marginTop: '10%',
    marginBottom: 16,
    width: width * 0.3,
    alignItems: 'center',
    alignSelf: 'center',
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
    margin: 16,
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
    height: height * 0.25,
    borderRadius: 10,
    backgroundColor: 'black',
  },
});

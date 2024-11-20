import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { Video } from 'expo-av';
import { Audio } from 'expo-av';

export default function NogiScreen() {
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
    { id: 1, title: "Triângulo de Mão", uri: "https://thiagosaidm.github.io/projetovid/triangulodem%C3%A3o.mp4" },
    { id: 2, title: "Triângulo de Mão (Variação)", uri: "https://thiagosaidm.github.io/projetovid/triangulodemaoguilhotina.mp4" },
    { id: 3, title: "Katagatame Fase 1", uri: "https://thiagosaidm.github.io/projetovid/katagatame1.mp4" },
    { id: 4, title: "Katagatame Fase 2", uri: "https://thiagosaidm.github.io/projetovid/katagatame2.mp4" },
    { id: 5, title: "Katagatame Fase 3", uri: "https://thiagosaidm.github.io/projetovid/katagatame3.mp4" },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.backButton}>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>No Gi - Sem Kimono</Text>

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

import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
  import React, {useEffect} from 'react';
import { useRouter } from 'expo-router';
import { Video } from 'expo-av';
import { Audio } from 'expo-av';

export default function BrancaScreen() {
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
    { id: 1, title: "Defesa dos 50/50", uri: "https://raw.githubusercontent.com/thiagosaidm/projetovid/main/Defesa5050.mp4" },
    { id: 2, title: "Saída dos 100kg", uri: "https://raw.githubusercontent.com/thiagosaidm/projetovid/main/saída100kg.mp4" },
    { id: 3, title: "Saída do Norte Sul", uri: "https://raw.githubusercontent.com/thiagosaidm/projetovid/main/saidanortesul.mp4" },
    { id: 4, title: "Defesa da Montada", uri: "https://raw.githubusercontent.com/thiagosaidm/projetovid/main/defesamontada.mp4" },
    { id: 5, title: "Defesa das Costas", uri: "https://raw.githubusercontent.com/thiagosaidm/projetovid/main/defesacostas.mp4" },
 
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => router.back()}
        style={styles.backButton}>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Posições Faixa Branca</Text>

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

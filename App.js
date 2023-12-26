import { StatusBar, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.main}>Open up App.js to start working on your appasdasd!</Text>
        <StatusBar style="ligth" backgroundColor="#222222" barStyle="content-ligth" translucent={true} />
        <Image source={require('./assets/adaptive-icon.png')} style={{
          width: 100,
          height: 100,
          resizeMode: 'contain',
          alignSelf: 'center',
        }} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    color: 'white',
  }
})

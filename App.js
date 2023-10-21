import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, useColorScheme } from 'react-native'
import { Colors, Header } from 'react-native/Libraries/NewAppScreen'
import Config from 'react-native-config'

function App() {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Text style={{ textAlign: 'center', fontSize: 20, padding: 10}}>{Config.APP_ENV_MODE}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

import React from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput
} from 'react-native'
import colors from '../styles/colors'

const UserIdentification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

      <View style={styles.form}>
        <Text style={styles.emoji}>
          😁
        </Text>

        <TextInput 
          style={styles.input}
        />
      </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    width: '100%'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center'
  },
  emoji: {
    fontSize: 44
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    colors: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  }
})

export default UserIdentification
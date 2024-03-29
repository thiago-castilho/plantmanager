import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import { Feather } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from "@react-navigation/core";

export function Welcome() {

  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Text>

        <Image
          source={wateringImg}
          style={styles.image}
          resizeMode='contain'
        />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. {'\n'}
          Nós cuidamos de lembrar você sempre que precisar.
      </Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          {/* <Text style={styles.buttonText}> */}
          <Feather
            name="chevron-right"
            style={styles.buttonIcon}
          />
          {/* </Text> */}
        </TouchableOpacity>
        <Text />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingTop: 80
  },
  title: {
    // paddingTop: 80,
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 34
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 32,
  }
});
import React from "react";
import { SafeAreaView } from "react-native";
// @ts-ignore
import styles from './MainPage.styles'
import { NewsCard } from "./NewsCard";

interface MainPageProps {
  name: string,
}

export const MainPage: React.FC = ({navigation}) => {
  return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <NewsCard name={'News Card'} onNavigationPress={()=> navigation.navigate('Details')} />
      </SafeAreaView>
  );
};

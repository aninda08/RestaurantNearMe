import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ResultsDetails from './ResultsDetails';
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();
  if (!results) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ResultsShow', { id: item.id });
              }}
            >
              <ResultsDetails results={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});

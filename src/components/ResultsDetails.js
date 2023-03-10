import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ResultsDetails = ({ results }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: results.image_url }} />
      <Text style={styles.name}>{results.name}</Text>
      <Text>
        {results.rating}, {results.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultsDetails;

const styles = StyleSheet.create({
  container: { marginLeft: 15 },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

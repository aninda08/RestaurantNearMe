import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        searchText={searchText}
        onSearchTextChange={(searchText) => {
          setSearchText(searchText);
        }}
        onSearchSubmit={() => searchApi(searchText)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>{searchText}</Text>
      <ScrollView>
        <ResultList title="Cost Effective" results={filterResultByPrice('$')} />
        <ResultList title="Bit pricer" results={filterResultByPrice('$$')} />
        <ResultList title="Big spender" results={filterResultByPrice('$$$')} />
        <ResultList
          title="Biggest spender"
          results={filterResultByPrice('$$$')}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});

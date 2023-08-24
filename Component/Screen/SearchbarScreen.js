import * as React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { colorbg } from '../../DataBase';

const SearchbarScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (

    <Searchbar 
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      color="#fff"
      style={{width:"90%",backgroundColor:colorbg.bgLiteDark}}
      placeholderTextColor="#fff"
      textColor="#fff"
      iconColor="#fff"
      
    />

  );
};

export default SearchbarScreen;

import * as React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchbarScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (

    <Searchbar 
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      color="#6C95C6"
      style={{width:"90%",backgroundColor:"#e8f2fd"}}
      placeholderTextColor="#6C95C6"
      textColor="#6C95C6"
      iconColor="#6C95C6"
      
    />

  );
};

export default SearchbarScreen;

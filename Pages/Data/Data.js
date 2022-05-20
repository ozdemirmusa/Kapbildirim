import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Notification from '../../components/NotificationCart/Notification';
import style from './Data.style';

const Data = () => {
  const [first, setfirst] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.kap.org.tr/tr/api/disclosures');
      const json = await response.json();
      console.log(json);
      setfirst(json);
    } catch (error) {
      console.log('error', error);
    }
  };

  const renderItem = ({item}) => <Notification db={item} />;

  const ItemSeparator = () => {
    return (
      <View
        style={{
          height: 3,
          backgroundColor: '#607D8B',
        }}
      />
    );
  };

  return (
    <View style={style.container}>
      {first.length < 1 ? (
        <Text style={style.null_data}>KAYIT BULUNAMADI</Text>
      ) : (
        <FlatList
          keyExtractor={item => item.basic.disclosureIndex}
          data={first}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparator}
        />
      )}
    </View>
  );
};

export default Data;

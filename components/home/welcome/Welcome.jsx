import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants';

import styles from './welcome.style';

const jobTypes = ['Full-Time', 'Part-Time', 'Contractor',"Remote" , 'Hybrid'];

const Welcome = () => {
  const navigation = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-Time');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Karthick</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChangeText={() => { }}
            placeholder="What are you Looking for"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer }>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                navigation.push(`/search/${item}`);
              }}>
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Welcome;

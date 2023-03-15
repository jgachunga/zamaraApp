import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { createClient } from 'react-native-soap';

const ContinentsView = () => {
  const [continents, setContinents] = useState([]);

  const fetchContinents = async () => {
    const url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL';
    const client = await createClient(url);

    client.ListOfContinentsByName((err, result) => {
      if (err) console.error(err);

      const continents = result.ListOfContinentsByNameResult.tContinent.map(continent => ({
        code: continent.sCode,
        name: continent.sName,
      }));

      setContinents(continents);
    });
  };

  useEffect(() => {
    fetchContinents();
  }, []);

  return (
    <View>
      <FlatList
        data={continents}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.code}</Text>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ContinentsView;

import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
import { actionData } from '../data/fakeData';

const NavOptions = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={actionData}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          disabled={!origin}
        >
          <View style={tw`${!origin && 'opacity-20'}`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{
                uri: item.image,
              }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              type='antdesign'
              color='white'
              name='arrowright'
              tvParallaxProperties={undefined}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

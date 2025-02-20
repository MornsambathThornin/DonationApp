/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import {horizontalScale} from '../../assets/styles/scalling';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';
//import {resetCategories} from '../../redux/reducers/Categories';
// import {resetToInitialState} from '../../redux/reducers/user';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  const [catagoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, catagoryPage, categoryPageSize),
      setCategoryPage(prev => prev + 1),
    );
    setIsLoadingCategories(false);
  }, []);

  console.log('selected category id', categoryList.length);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  const loadMoreCategories = () => {
    if (isLoadingCategories) {
      return;
    }
    console.log('have reached end to page number ' + catagoryPage);
    setIsLoadingCategories(true);
    let newData = pagination(
      categories.categories,
      catagoryPage,
      categoryPageSize,
    );
    if (newData.length > 0) {
      setCategoryList(prevState => [...prevState, ...newData]);
      setCategoryPage(prev => prev + 1);
    }
    setIsLoadingCategories(false);
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello, </Text>
            <View style={style.username}>
              <Header title={user.firstName + ' ' + user.lastName[0] + '.👋'} />
            </View>
          </View>
          <Image
            source={{uri: user.profileImage}}
            style={style.profileImage}
            resizeMode="contain"
          />
        </View>
        <View style={style.searchBox}>
          <Search onSearch={() => {}} />
        </View>
        <Pressable style={style.highlightImageContainer}>
          <Image
            style={style.highlightImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode="contain"
          />
        </Pressable>
        <View style={style.catagoryHeader}>
          <Header title="Select Categories" types={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            contentContainerStyle={{paddingHorizontal: horizontalScale(24)}}
            ItemSeparatorComponent={() => <View style={{width: 10}} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => {
                    dispatch(updateSelectedCategoryId(value));
                  }}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
            onEndReached={loadMoreCategories}
            onEndReachedThreshold={0.5}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

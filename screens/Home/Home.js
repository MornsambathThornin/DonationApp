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

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import {horizontalScale} from '../../assets/styles/scalling';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {updateSelectedDonationId} from '../../redux/reducers/Donations';
import {Routes} from '../../navigation/Routes';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {resetToInitialState} from '../../redux/reducers/User';
import BackButton from '../../components/BackButton/BackButton';
import {logOut} from '../../api/user';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);

  const [donationItems, setDonationItems] = useState([]);
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  useEffect(() => {
    const items = donations.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(items);
  }, [categories.selectedCategoryId]);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

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

    setIsLoadingCategories(true);
    let newData = pagination(
      categories.categories,
      categoryPage,
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
              <Header title={user.displayName + ' 👋'} />
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={{uri: user.profileImage}}
              style={style.profileImage}
              resizeMode="contain"
            />
            <BackButton
              onPress={async () => {
                dispatch(resetToInitialState());
                await logOut();
                navigation.navigate(Routes.Login);
              }}
              icon={faArrowRightFromBracket}
              color="#156CF7"
            />
          </View>
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
        {donationItems.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItems.map(value => {
              const categoryInfomation = categories.categories.find(
                val => val.categoryId === categories.selectedCategoryId,
              );

              return (
                <View
                  key={value.donationItemId}
                  style={style.singleDonationItem}>
                  <SingleDonationItem
                    onPress={selectedDonationId => {
                      //it just depactach the selected donation id to the redux store
                      dispatch(updateSelectedDonationId(selectedDonationId));
                      navigation.navigate(Routes.SingleDonationScreen, {
                        categoryInfomation,
                      });
                    }}
                    donationItemId={value.donationItemId}
                    url={value.image}
                    donationTitle={value.name}
                    badgeTitle={categoryInfomation.name}
                    price={parseFloat(value.price)}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

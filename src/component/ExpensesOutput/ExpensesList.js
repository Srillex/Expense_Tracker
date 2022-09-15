//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ExpenseItem from './ExpenseItem';

// create a component

const renderExpenseItem = itemData => {
  return <ExpenseItem {...itemData.item} />;
};

const ExpensesList = ({expenses}) => {
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default ExpensesList;

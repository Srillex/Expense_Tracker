//import liraries
import React, {Component, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ExpensesOutput from '../component/ExpensesOutput/ExpensesOutput';
import {ExpenseContext} from '../store/expenses-context';

// create a component
const AllExpenses = () => {
  const expensesCtx = useContext(ExpenseContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensePeriod={'Total'}
      fallbackText={'No registered expense found'}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default AllExpenses;

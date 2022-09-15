//import liraries
import React, {Component, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ExpensesOutput from '../component/ExpensesOutput/ExpensesOutput';
import {ExpenseContext} from '../store/expenses-context';
import {getDateMinusDays} from '../util/date';

// create a component
const RecentExpenses = () => {
  const expensesCtx = useContext(ExpenseContext);
  const recentExpenses = expensesCtx.expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensePeriod={'Last 7 days'}
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
export default RecentExpenses;

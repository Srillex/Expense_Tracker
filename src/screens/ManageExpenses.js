//import liraries
import React, {useContext, useLayoutEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ExpenseForm from '../component/ManageExpense/ExpenseForm';
import Button from '../component/UI/Button';
import IconButton from '../component/UI/iconButton';

import {GlobalStyles} from '../constants/styles';
import {ExpenseContext} from '../store/expenses-context';

// create a component
const ManageExpense = ({route, navigation}) => {
  const expenseCtx = useContext(ExpenseContext);
  const editedExpenseId = route.params?.expensesId;
  // converting into boolean value falsy  (!! editedExpenseID )
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      // changing title by condition
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  // delete function when list is clicked
  const deleteExpensesHandler = () => {
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = expenseData => {
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      expenseCtx.addExpense(expenseData);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm />
      <View style={styles.buttons}>
        <Button mode={'flat'} onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={'trash'}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpensesHandler}
          />
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

//make this component available to the app
export default ManageExpense;

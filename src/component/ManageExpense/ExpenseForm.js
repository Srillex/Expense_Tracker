//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from './Input';

// create a component
const ExpenseForm = ({submitButtonLabel, onCancel, onSubmit}) => {
  const [InputValue, setInputValue] = useState({
    amount: '',
    date: '',
    description: '',
  });
  const inputChangedHandler = (enteredValue, inputIdentifier) => {
    setInputValue(curInputValues => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  };
  // console.log(InputValue);
  const submitHandler = () => {
    const expenseData = {
      amount: +InputValue.amount,
      date: new Date(InputValue.date),
      description: InputValue.description,
    };
    onSubmit(expenseData)
  };
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label={'Amount'}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: InputValue.amount,
          }}
        />
        <Input
          label={'Date'}
          style={styles.rowInput}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: InputValue.date,
          }}
        />
      </View>
      <View>
        <Input
          label={'Description'}
          textInputConfig={{
            multiline: true,
            onChangeText: inputChangedHandler.bind(this, 'description'),
            value: InputValue.description,
          }}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  inputRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginTop: 80,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 24,
    textAlign: 'center',
  },
});

//make this component available to the app
export default ExpenseForm;

//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from './Input';

// create a component
const ExpenseForm = () => {
  const amountInputHandler = () => {};
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label={'Amount'}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountInputHandler,
          }}
        />
        <Input
          label={'Date'}
          style={styles.rowInput}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <View>
        <Input label={'Description'} textInputConfig={{multiline: true}} />
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
  },
});

//make this component available to the app
export default ExpenseForm;

import {createContext, useReducer} from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.59,
    date: new Date('2022-09-10'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 34.6,
    date: new Date('2022-09-08'),
  },
  {
    id: 'e3',
    description: 'some banana',
    amount: 14.6,
    date: new Date('2022-03-05'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 34.6,
    date: new Date('2021-01-08'),
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 34.6,
    date: new Date('2021-01-08'),
  },
  {
    id: 'e6',
    description: 'A pair of shoes',
    amount: 59.59,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e7',
    description: 'A pair of trousers',
    amount: 34.6,
    date: new Date('2021-01-08'),
  },
  {
    id: 'e8',
    description: 'some banana',
    amount: 14.6,
    date: new Date('2022-03-05'),
  },
  {
    id: 'e9',
    description: 'A book',
    amount: 34.6,
    date: new Date('2021-01-08'),
  },
  {
    id: 'e10',
    description: 'Another book',
    amount: 34.6,
    date: new Date('2021-01-08'),
  },
];

export const ExpenseContext = createContext({
  expenses: [],

  addExpense: ({description, amount, date}) => {},
  deleteExpense: id => {},
  updateExpense: (id, {description, amount, date}) => {},
});

const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [...state, {...action.payload, id: id}, ...state];
    case 'UPDATE':
      const updatableExpensesIndex = state.findIndex(
        expense => expense.id === action.payload.id,
      );
      const updatableExpense = state[updatableExpensesIndex];
      const updatedItem = {...updatableExpense, ...action.payload.data};
      const updatedExpense = [...state];
      updatedExpense[updatableExpense] = updatedItem;
      return updatedExpense;
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpenseContextProvider = ({children}) => {
  const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  const addExpense = expenseData => {
    dispatch({type: 'ADD', payload: expenseData});
  };

  const deleteExpense = id => {
    dispatch({type: 'DELETE', payload: id});
  };
  const updateExpense = (id, expenseData) => {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};
export default ExpenseContextProvider;

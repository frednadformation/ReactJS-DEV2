import './App.css';
import styles from './appStyles.module.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import Form from './components/Form';
import Newsletter from './components/Newsletter';
import { React, useReducer } from 'react';
import DataFetchingOne from './components/DataFetchingOne';
import DataJson from './components/DataJson';


function App() {
  const initialState = 0;
  const reducer = (state, action) => {
    switch(action){
      case 'increment':
        return state +1
        case 'decrement':
          return state -1
          case 'reset':
            return initialState
            case 'default':
              return state
            }
          };
          const [count, dispatch] = useReducer(reducer, initialState);
        
          return (
            <div className="App">
      {/* <Greet name="Thomas" age= "23 ans">
        Thomas adore React !
      </Greet>
      <Greet name="Toto" age ="90 ans" />
      <Greet name="John" age ="33 ans" /> */}
      {/* <Greet name="Bruce" hero="Batman">
        This is children props !
      </Greet>
      <Greet name="Clark" hero="Superman"/>
      <Greet name="Diana" hero="Wonder woman"/> */}
      {/* <Welcome name="Thomas" age= "23 ans">
        Ceci est un test
      </Welcome>
      <Welcome name="Toto" age ="90 ans" />
      <Welcome name="John" age ="33 ans" /> */}
      {/* <Message />

      <Counter value={20} /> */}

      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <UserGreeting /> */}
      {/* <NameList />
      <StyleSheet primary={true}/>
      <Inline />
      <h1 className={styles.success}>Succès !! </h1> */}
      {/* <Form /> */}
      {/* <Newsletter /> */}
      {/* <DataFetchingOne /> */}
      <DataJson />

    </div> 
  );
} 


export default App;

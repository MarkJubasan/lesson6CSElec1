import React, {useEffect, useState} from 'react';
import { Button, Text, View } from 'react-native';
import Child from "./Child";
import {styles} from "./styles";

import LocalApiExample from './LocalApiExample';
import RestApiExample from './RestApiExample';

export default function App() {
  const [number,setNumber]=useState(0);
  const [isChildAlive,setIsChildAlive]=useState(false);

  const [count,setCount]=useState(0);
  const [theme,setTheme]=useState("Light");

  useEffect(()=>{
    console.log("1. [Mounted] Component just appeared on the screen!");
  },[]);
   useEffect(()=>{
    console.log(`2. [Updated] The counter state change to: ${count}`);
  },[count]);
  useEffect(()=>{
    console.log(`3. [Updated] Either count or theme change. Current theme: ${theme}`);
  },[count,theme]);


  return(
    <View style={styles.container}>

      <Text>Compoent LifeCycles</Text>
      <View style={styles.parentBox}>
        <Text>Parent Component</Text>
        <Text>Current Number:{number}</Text>

        <View style={styles.button}>
          <Button title="Change Number(Triger Update Phase)" onPress={() => setNumber(number + 1)}/>
        </View>
        <View style={styles.button}>
          <Button title="Reset Number(Triger Update Phase)" onPress={() => setNumber(0)}/>
        </View>
        <View style={styles.button}>
          <Button title={isChildAlive?"Destroy Child(Unmount)":"Create Child (Mount)"} onPress={() => setIsChildAlive(!isChildAlive)} />
        </View>
      </View>

      <View>{isChildAlive&& <Child receivedNumber={number}/>}</View>

      <Text>UseEffect and Dependency Arrays</Text>
      <View style={styles.box}>
          <Text>Curent Count: {count}</Text>
          <View style={styles.button}><Button title="Add 1 to Count" onPress={()=>setCount(count + 1)}/></View>
          <View style={styles.button}><Button title="Reset Count" onPress={()=>setCount(0)}/></View>
      </View>
      <View style={styles.box}>
          <Text>Curent Theme: {theme}</Text>
          <Button  title="Toggle Theme" onPress={()=>setTheme(theme==="Light"?"Dark":"Light")}/>
      </View>
    
    {/* <Text style={{fontSize: 18, marginBottom: 20}}>Data Fetching</Text> */}
    <Text>Data Fetching</Text>
    <LocalApiExample/>
    <RestApiExample/>

    </View>
  );
}


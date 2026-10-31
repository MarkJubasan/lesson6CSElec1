import React,{useState} from 'react';
import{View, Text, Button} from 'react-native';
import {styles} from './styles';

export default function LocalApiExample(){
    const[status,setStatus] = useState("waiting to order...");

    const simulationCoffeOrder = () => {
      return new Promise((resolve) => {
            setTimeout(()=>{
                resolve("Coffee is ready!");
            }, 2000);
        });
    };

    const handleOrder = async() => {
        setStatus("Brewing coffee.... (App is not frozen!)");
        const result = await simulationCoffeOrder();
        setStatus(result);
    };

    return(
        <View style={styles.box}>
            <Text style={{fontweight:'bold'}}>Example 1: Local promise(Not REST)</Text>
            <Text>Status:{status}</Text>
            <Button title="Order Coffee" onPress={handleOrder}/>
        </View>
    );


}
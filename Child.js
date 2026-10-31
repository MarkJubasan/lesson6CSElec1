import React from "react";
import{View, Text} from 'react-native';
import{styles} from './styles';

export default function Child({receivedNumber}){

console.log("--> Child function is running! Prop received",receivedNumber);

return(
    <View style={styles.childBox}>
        <Text>I am a Child Component.</Text>
        <Text>My parent gave me number:{receivedNumber}</Text>
    </View>
);

}
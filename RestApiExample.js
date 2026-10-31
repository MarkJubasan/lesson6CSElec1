import React,{useState} from 'react';
import{View, Text, Button} from 'react-native';
import {styles} from './styles';

export default function restApiExample(){
    const [userData, setUserData] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    const fetchUserData = async () => {
        setIsLoading(true);

        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await response.json();
            setUserData(data);
        } catch(error){
            console.log("Error fetching data:",error);
        } finally {
            setIsLoading(false);
        }
      };

      return(
        <View style={styles.box}>
            <Text style={{fontWeight: 'bold'}}>Example 2: External REST API</Text>
            {isLoading?(
                <Text>Downloading data from the internet...</Text>
            ):userData?(
            <View>
                <Text>Name: {userData.name}</Text>
                <Text>Email: {userData.email}</Text>
            </View>
            ):(
                <Text>No data fetched yet.</Text>
            )}  
            <Button title="Fetch User Data" onPress={fetchUserData}/>
        </View>
      );
}

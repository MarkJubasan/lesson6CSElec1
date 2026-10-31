import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 40,
        marginTop: 20,
        justifyContent: 'center',
    },

    parentBox:{
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 20,
    },

    childBox:{
        borderWidth: 2,
        borderColor: 'blue',
        padding: 20,
        marginBottom: 20,
    },

    box:{
        borderWidth: 1,
        borderBlockColor: 'black',
        padding: 20,
        marginBottom: 20,
        alignItems: 'center',
    },

    button:{
        margin: 5,
    }
});
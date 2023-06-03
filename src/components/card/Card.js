import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './Card.Style';

function Card (props){
    return(
        <View style={styles.container}>
            <View style={styles.text_area}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <TouchableOpacity style={styles.touchbale} onPress={()=>Alert.alert("alert")}>
                <Text style={styles.touchbale_text}>
                    I LIKED
                </Text>
            </TouchableOpacity>
        </View>
    );
}


export default Card;
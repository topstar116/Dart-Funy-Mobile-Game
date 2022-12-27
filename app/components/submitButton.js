/**
 * Created by Max on 2/3/2018.
 */

import React from 'react';
import {TouchableOpacity, View, ImageBackground, Text, StyleSheet} from 'react-native';
import store from '../store';
import { withNavigation } from 'react-navigation';



class SubmitButton extends React.Component {

    onSelect = () => {

        let data = store.getState();
        let multiplier = data.updateMultiplier[0];
        let selection = data.updateSelection;
        let currentCheckout = data.updateCurrentCheckout;
        let turns = data.updateTurns;
        let label = data.updateMultiplier[1];
        const {navigate} = this.props.navigation;
        if(multiplier === [] || selection === []){
            return null
        }
        else if(turns ===1 && label !== 'D'){
            return null
        }
        else if (selection > 0){
            this.props.submitButtonPressed(multiplier,selection,currentCheckout, turns, label);
        }
        //these are updated data variables. And can be used as such.
        let data1 = store.getState();
        let turns1 = data1.updateTurns;
        let currentCheckout1 = data1.updateCurrentCheckout;
    };

    playSound = () => {
        try {
            const { soundObject, status } =  Expo.Audio.Sound.create(
                require('../assets/sounds/Submit.mp3'),
                { shouldPlay: true }
            );
            // Your sound is playing!
        } catch (error) {
            // An error occurred!
        }
    };



    render(){
        return(


        <TouchableOpacity onPress = {() => {this.onSelect(); this.playSound();}}>
            <View style={styles.test}>
                <ImageBackground style={styles.submitImage} source={require('../assets/btn_submit.png')}/>
            </View>
        </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    submitImage: {
        width: 195,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,

    },
    test: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default withNavigation(SubmitButton);

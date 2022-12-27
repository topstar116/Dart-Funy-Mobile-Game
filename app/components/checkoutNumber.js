/**
 * Created by Max on 1/29/2018.
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TurnsLeft from '../containers/turnsLeft'

class CheckoutNumber extends React.Component {

    componentDidMount(){
        this.props.getCheckoutNumber();

    }
    render(){
        return (
          <View style={styles.containeR}>
              <Text style={styles.textSize}>{this.props.checkoutNum}</Text>
              <TurnsLeft/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    textSize: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    containeR:{
        justifyContent:"center",
        alignItems: 'center',
    }
});

export default CheckoutNumber;
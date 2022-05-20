import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import style from './Modals.style';
import {WebView} from 'react-native-webview';

const Modals = props => {
  return (
    <Modal
      hasBackdrop={false}
      isVisible={props.visible}
      deviceHeight={Dimensions.get('window').height}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 9}}>
          <WebView
            source={{uri: 'https://www.kap.org.tr/tr/Bildirim/' + props.id}}
            style={{marginTop: 20}}
          />
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'grey',margin:10}} onPress={()=>{props.setVisible(false)}}>
          <Text style={{fontSize:24,fontWeight:'bold'}}>KAPAT</Text>
          </TouchableOpacity>
         


        </View>
      </View>
    </Modal>
  );
};

export default Modals;

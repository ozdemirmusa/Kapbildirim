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
      <View style={style.container}>
        <View style={style.left}>
          <WebView
            source={{uri: 'https://www.kap.org.tr/tr/Bildirim/' + props.id}}
            style={{marginTop: 20}}
          />
        </View>
        <View style={style.down}>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              props.setVisible(false);
            }}>
            <Text style={style.button_text}>KAPAT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Modals;

import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import style from './Notification.style';
import Modals from '../ModalCart/Modals';

const Notification = props => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={style.container}
        onPress={() => setVisible(true)}>
        <View style={style.left}>
          <Text>{props.db.basic.publishDate}</Text>
        </View>
        <View style={style.rigth}>
          <Text style={style.companyName}>{props.db.basic.companyName}</Text>
          <Text style={style.title}>{props.db.basic.title}</Text>
        </View>
      </TouchableOpacity>
      <Modals
        visible={visible}
        setVisible={setVisible}
        id={props.db.basic.disclosureIndex}
      />
    </View>
  );
};

export default Notification;

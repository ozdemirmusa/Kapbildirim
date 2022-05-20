import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'#B1BCE6',
    height:80,

  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rigth: {
    flex: 4,
    justifyContent: 'center',
  },
  companyName:{
      fontSize:18,
      fontWeight:'bold',
  },
  title:{
      fontStyle:'italic'
  }
});

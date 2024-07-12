import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  goback: {
    color: colors.white,
    width: 50,
  },
  containerBack: {
    margin: 20,
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.white,
  },
  subTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.gray,
  },
  containerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  text: {
    color: colors.gray,
  },
});

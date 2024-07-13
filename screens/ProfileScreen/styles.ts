import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? height - 360 : height - 315,
    marginTop: 20,
    paddingHorizontal: 5,
  },
  containerAvatar: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginVertical: 15,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.white,
    textAlign: 'center',
    marginVertical: 10,
  },
  containerSecondary: {
    width: '100%',
    height: '90%',
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
});

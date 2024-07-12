import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 45,
    color: colors.white,
  },
});

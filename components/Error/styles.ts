import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: colors.gray,
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 20,
  },
  containerError: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

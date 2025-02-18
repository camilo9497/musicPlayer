import {StyleSheet, Dimensions, Platform} from 'react-native';
import {colors} from '../../utils/colors';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginBottom: 90,
  },
  title: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  constainerList: {
    height: Platform.OS === 'ios' ? height - 190 : height - 135,
    paddingHorizontal: 5,
  },
});

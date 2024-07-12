import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: 'black',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  containerImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginRight: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  containerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '65%',
  },
  containerIconFav: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  songName: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 18,
  },
  listeners: {
    color: colors.gray,
  },
  text: {
    color: colors.gray,
  },
});

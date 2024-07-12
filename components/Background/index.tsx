import React, {ReactNode} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../utils/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  children: ReactNode;
}

const Background: React.FC<Props> = ({children}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: '#0e1726',
      }}>
      <LinearGradient
        colors={[colors.principalBlue, colors.secondaryBlue]}
        start={{x: 0.3, y: 0.6}}
        end={{x: 1, y: 0.5}}>
        {children}
      </LinearGradient>
    </View>
  );
};

export default Background;

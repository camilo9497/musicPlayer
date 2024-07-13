import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PauseIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <Path d="M4 4h10v24H4zm14 0h10v24H18z" fill={'white'} />
  </Svg>
);
export default PauseIcon;

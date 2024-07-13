import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackwardIcons = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <Path d="M18 5v10L28 5v22L18 17v10L7 16z" />
  </Svg>
);
export default BackwardIcons;

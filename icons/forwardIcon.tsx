import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ForwardIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <Path d="M16 27V17L6 27V5l10 10V5l11 11z" fill={props.color}/>
  </Svg>
);
export default ForwardIcon;

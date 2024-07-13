import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlayIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <Path d="m6 4 20 12L6 28z" fill={'white'} />
  </Svg>
);
export default PlayIcon;

import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const HomeIcon = ({color, ...props}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <Path
      d="M32 18.451 16 6.031 0 18.451v-5.064L16 .967l16 12.42zM28 18v12h-8v-8h-8v8H4V18l12-9z"
      fill={color}
    />
  </Svg>
);
export default HomeIcon;

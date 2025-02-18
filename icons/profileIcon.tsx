import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ProfileIcon = ({color, ...props}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <Path
      d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649C7.216 22.637 2 25.97 2 30h28c0-4.03-5.216-7.364-12-7.918z"
      fill={color}
    />
  </Svg>
);
export default ProfileIcon;

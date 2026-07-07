import { Image, StyleSheet } from 'react-native';
import { Images } from '../../assets/images';

interface Props {
  size?: number;
}

export default function AppLogo({
  size = 100,
}: Props) {
  return (
    <Image
      source={Images.logo}
      resizeMode="contain"
      style={[
        styles.logo,
        {
          width: size,
          height: size,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
  },
});
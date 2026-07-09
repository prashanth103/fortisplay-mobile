import { StyleSheet, View, ViewProps } from 'react-native';
import Svg, { Defs, Pattern, Rect } from 'react-native-svg';

interface StripedBackgroundProps extends ViewProps {
  color1?: string;
  color2?: string;
  stripeWidth?: number;
}

export default function StripedBackground({
  color1 = '#191919',
  color2 = '#222222',
  stripeWidth = 14,
  style,
  ...props
}: StripedBackgroundProps) {
  const boxSize = stripeWidth * 2;

  return (
    <View style={[StyleSheet.absoluteFill, style]} {...props}>
      <Svg width="100%" height="100%">
        <Defs>
          <Pattern id="stripes" patternUnits="userSpaceOnUse" width={boxSize} height={boxSize} patternTransform="rotate(45)">
            <Rect width={boxSize} height={boxSize} fill={color1} />
            <Rect width={stripeWidth} height={boxSize} fill={color2} />
          </Pattern>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#stripes)" />
      </Svg>
    </View>
  );
}

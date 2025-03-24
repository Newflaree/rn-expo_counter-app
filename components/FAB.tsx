import {
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';


interface Props {
  label: string;
  position?: 'left' | 'right';
  // Methods
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({
  label,
  onPress,
  onLongPress,
  position = 'right'
}: Props) {
  return (
    <Pressable
      style={[ styles.floatingButton, (position === 'right') ? styles.positionRight : styles.positionLeft ]}
      onPress={ onPress }
      onLongPress={ onLongPress }
    >
      <Text style={{ color: 'white', fontSize: 20 }}>{ label }</Text>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#65558F',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 3,
    shadowOpacity: 0.3,
    elevation: 3
  },
  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  }
});

import React, { useState ,useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import Spacer from './components/Spacer';
import Spacer2 from './components/Spacer2';
import { Context as AuthContext } from './context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const {state, signup} = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h2>Signup for Tracker</Text>
      </Spacer>
      <Spacer2>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer2>
      <Spacer2>
        <Input
          secureTextEntry
          label="Password"
          alue={password}
          onChangeText={setpassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer2>
      {state.errorMessage ? <Text>{state.errorMessage}</Text> : null}
      <Spacer>
        <Button title="Signup" onPress={() => signup({email,password})} />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
});

export default SignupScreen;

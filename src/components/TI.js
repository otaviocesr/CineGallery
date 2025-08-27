import { styles } from "../styles/styles";

import { TextInput } from "react-native"

export default function TI({ TextoDoPlaceholder, ProtegerSenha }) {
  return (
    <TextInput style={styles.input}
      placeholder={TextoDoPlaceholder}
      secureTextEntry={ProtegerSenha} />
  );
}

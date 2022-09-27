import React from "react";

import { View, Text, TextInput, Button } from "react-native";

export function Profile() {
  return (
    <View>
      <Text testID="text-title">Perfil</Text>

      <TextInput
        value="Rodrigo"
        testID="input-name"
        placeholder="Nome"
        autoCorrect={false}
      />

      <TextInput
        value="Santos"
        testID="input-surname"
        placeholder="Sobrenome"
      />

      <Button title="Salvar" onPress={() => {}} />
    </View>
  );
}

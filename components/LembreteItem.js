import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const LembreteItem = (props) => {
    return (
      <TouchableOpacity onLongPress={props.onDelete.bind(this, props.chave)}>
        <View style={estilos.itemNaLista}>
          <Text>{props.lembrete}</Text>
        </View>
      </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    itemNaLista: {
        padding: 12,
        backgroundColor: '#CCC',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 8,
        borderRadius: 8
    }
});

export default LembreteItem;
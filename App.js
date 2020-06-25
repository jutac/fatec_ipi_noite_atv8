import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, ScrollView, FlatList, Text } from 'react-native';
import LembreteItem from './components/LembreteItem';
import LembreteInput from './components/LembreteInput';

export default function App() {
  // const [lembrete, setLembrete] = useState('');
  const [lembretes, setLembretes] = useState([]);
  const [contadorLembretes, setContadorLembretes] = useState(0);

  const adicionarLembrete = (lembrete) => {
    setLembretes((lembretes) => {
      setContadorLembretes(contadorLembretes+1);
      return [...lembretes, {key: contadorLembretes.toString(), value: lembrete}];
      // return [...lembretes, lembrete];
    });
    console.log(lembrete);
  };

  const apagarlembretes = () => {
    setLembretes([]);
  }

  const removerLembrete = (keyASerRemovida) => {
    setLembretes(lembretes => {
      return lembretes.filter(l => (l.key != keyASerRemovida));
    })
  }

  return (
    <View style={styles.telaPrincipalView}>
      <LembreteInput onAdicionarLembrete={adicionarLembrete} onApagarTudo={apagarlembretes} />
      {/* aqui sera exibida a lista de lembretes */}
      {/* <ScrollView>
        {lembretes.map((lembrete => 
          <View key={lembrete} style={styles.itemNaLista}>
            <Text>{lembrete}</Text>
          </View>
        ))}
      </ScrollView> */}
      {/*substuir o ScrollView e todo o seu conteúdo*/}
      <FlatList
        data={lembretes}/*coleção de lembretes */
        renderItem={ /*mapeamento*/ 
          (lembrete) => ( /*dado um lembrete, gera uma view*/ 
            <LembreteItem
              chave={lembrete.item.key}
              lembrete={lembrete.item.value}
              onDelete={removerLembrete} />
          )
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 50,
  },
  lembreteView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  lembreteTextInput: {
    width: '80%',
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 4,
  },
  itemNaLista: {
    padding: 16,
    backgroundColor: '#EEE',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 12,
    width: '80%',
  }
});

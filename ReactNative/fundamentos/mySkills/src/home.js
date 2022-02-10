import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  FlatList,
} from 'react-native';
import {Button} from './components/Button';
import {SkillCard} from './components/SkillCard';

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greatting, setGreetting] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreetting('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetting('Good Afternoon');
    } else {
      setGreetting('Good night');
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Rodney!</Text>
      <Text style={styles.greatting}>{greatting}</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill} />
      <FlatList
        data={mySkills}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#121015',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    marginTop: 15,
    backgroundColor: '#1F1E25',
    color: 'white',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 8,
  },
  greatting: {
    color: 'white',
  },
});

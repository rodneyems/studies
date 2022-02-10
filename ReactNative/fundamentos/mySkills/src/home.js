import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button} from './components/Button';
import {SkillCard} from './components/SkillCard';

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Rodney!</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill} />
      {mySkills.map((skill, i) => (
        <SkillCard skill={skill} index={i} />
      ))}
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
});

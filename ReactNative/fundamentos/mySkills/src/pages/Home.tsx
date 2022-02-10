import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export interface SkillData {
  skill: String;
}
interface Greatting {
  greatting: String;
}

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greatting, setGreetting] = useState<Greatting>({greatting : ''});

  function handleAddNewSkill() {
    const data = {
      skill: newSkill,
    };
    setMySkills(oldState => [...oldState, data]);
  }
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreetting({greatting : 'Good Morning'});
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetting({greatting : 'Good Afternoon'});
    } else {
      setGreetting({greatting : 'Good Night'});
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Rodney!</Text>
      <Text style={styles.greatting}>{greatting.greatting}</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button title={"Add"} onPress={handleAddNewSkill} />
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

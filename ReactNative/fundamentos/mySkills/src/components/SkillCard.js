import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function SkillCard({skill, index}) {
  return (
    <TouchableOpacity key={index} style={styles.skill}>
      <Text style={styles.title}>{skill}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  skill: {
    marginTop: 20,
    backgroundColor: '#1F1E25',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

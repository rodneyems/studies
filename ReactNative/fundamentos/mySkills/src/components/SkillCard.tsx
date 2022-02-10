import React from 'react';
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';
import { SkillData } from '../pages/Home';

interface SkillCardProps extends TouchableOpacityProps {
  skill: SkillData;
}

export function SkillCard({skill, ...rest} : SkillCardProps) {
  return (
    <TouchableOpacity style={styles.skill}>
      <Text style={styles.title} {...rest} >{skill.skill}</Text>
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

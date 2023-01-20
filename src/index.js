import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Questionnaire = () => {
  const [genre, setGenre] = useState('');
  const [mood, setMood] = useState('');

  const handleSubmit = () => {
    // Logic to recommend movies and TV shows based on genre and mood
    let recommendations = [];
    if (genre === 'action' && mood === 'happy') {
      recommendations = ['The Avengers', 'Guardians of the Galaxy', 'Deadpool'];
    } else if (genre === 'comedy' && mood === 'sad') {
      recommendations = ['Parks and Recreation', 'Brooklyn Nine-Nine', 'The Office'];
    }
    // Display recommendations
    return (
      <View>
        <Text>Recommended Movies and TV Shows:</Text>
        {recommendations.map((item) => (
          <Text key={item}>{item}</Text>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>What genre of movies and TV shows do you prefer?</Text>
      <Button title="Action" onPress={() => setGenre('action')} />
      <Button title="Comedy" onPress={() => setGenre('comedy')} />
      <Button title="Drama" onPress={() => setGenre('drama')} />
      <Text>What is your current mood?</Text>
      <Button title="Happy" onPress={() => setMood('happy')} />
      <Button title="Sad" onPress={() => setMood('sad')} />
      <Button title="Neutral" onPress={() => setMood('neutral')} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Questionnaire;

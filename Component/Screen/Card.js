import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';
import { AntDesign } from '@expo/vector-icons'; 
import { colorbg } from '../../DataBase';
import { useNavigation } from '@react-navigation/native';

const Card = ({ title, description, imageSource }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
        <StarRating
        disabled={false}
        fullStar={"star"}
        maxStars={5}
        fullStarColor={'gold'}
        starSize={20}
        containerStyle={styles.ratingContainer}
        
      />
            <TouchableOpacity style={styles.enrollButton} onPress={()=> navigation.navigate('LectureScreen')}>
        <Text style={styles.enrollButtonText}>Enroll</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colorbg.bgLiteDark,
    borderRadius: 8,
    shadowColor: '#fff',
    shadowRadius: 2,
    elevation: 14,
    flexDirection: 'row',
    alignItems: 'center',
    
    marginVertical:"2%",
  
  },
  ratingContainer: {
    alignSelf: 'flex-start',
    marginVertical:"5%",
   
  },
  enrollButton: {
    backgroundColor: colorbg.bgdarkpro,
    paddingVertical: 6,
    paddingHorizontal: 15,
    marginHorizontal:5,
    marginVertical:5,
    borderRadius:10,
    elevation:22,
    alignSelf: 'flex-end',
  },
  enrollButtonText: {
    fontSize:13,
    color: "#fff",
    fontWeight: '400',},
  cardImage: {
    flex:0.5,
    width: 0,
    height: 150,
    borderRadius: 8,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
    
  },
  cardTitle: {
    color:"#49688D",
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 13,
    color: '#888',
  },
});

export default Card;

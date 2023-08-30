import React, { useState } from 'react';
import { StyleSheet, ToastAndroid } from 'react-native';
import { View, Text, TouchableOpacity ,ImageBackground} from 'react-native';
import { colorbg } from '../../DataBase';
import { Image } from 'react-native';
import { auth } from '../../Firebase';
import { ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper';

const PythonLectureScreen = ({ navigation }) => {
  const [isDropdownOpenWeek1, setIsDropdownOpenweek1] = useState(false);
  const [isDropdownOpenWeek2, setIsDropdownOpenweek2] = useState(false);
  const [completedText, setCompleteText] = useState("");
  const [checkedLecture, setCheckedLecture] = useState(false);
  const [checkedQuiz, setCheckedQuiz] = useState(false);
  const [checkedProject, setCheckedProject] = useState(false);
  const [checkedAssignment, setCheckedAssignment] = useState(false);
  const [Showdisable, setdisableCardButton] = useState(false);
  const toggleDropdownWeek1 = () => {
    setIsDropdownOpenweek1(!isDropdownOpenWeek1);
  };
  const toggleDropdownWeek2 = () => {
    setIsDropdownOpenweek2(!isDropdownOpenWeek2);
  };

 

  const handleComplete = () => {
    // Perform any completion logic here
    if(checkedProject && checkedLecture && checkedAssignment && checkedQuiz){
   
    setIsDropdownOpenweek1(false);
    const text  = "Course of week one is completed"
    setCompleteText(text)
   if(isDropdownOpenWeek1){
    setdisableCardButton(!Showdisable)}
    }else{
      showToast()
       function showToast(){
        return(
      ToastAndroid.show('Plz complete the Required check', ToastAndroid.SHORT))};
      setIsDropdownOpenweek1(true);
    }
  };

  const handleQuiz =()=>{

  }
  const handleLecture=()=>{
    
  }
  const handleProject =()=>{
    
  }
  const handleAssignment =()=>{
    
  }
 

  return (
    <ImageBackground
      source={require("../../assets/bg2.png")}
      style={{ flex: 1 }}
    >
      <View
        style={{
          backgroundColor: colorbg.bgdark,
          borderBottomEndRadius: 30,
          borderBottomLeftRadius: 30,
        }}
      >
        <Text style={styles.heroText}>Welcome to </Text>
        <Text
          style={{
            alignItems: "center",
            alignSelf: "center",
            color: "#49688D",
            fontSize: 28,
            fontWeight: "300",
            paddingVertical: 16,
          }}
        >
          Python Learning Course 😍
        </Text>
      </View>
      <View
        style={{
          marginTop: 17,
          backgroundColor: colorbg.bgdarkpro,
          borderRadius: 20,
          marginHorizontal: 16,
          flexDirection: "row",
        }}
      >
        <View style={{ paddingLeft: 15, justifyContent: "center" }}>
          <Image
            style={{ width: 70, height: 70 }}
            source={require("../../assets/svg.png")}
          />
        </View>
        <View style={{ paddingHorizontal: 16, flex: 1 }}>
          <Text
            style={{
              alignSelf: "flex-start",
              color: "#fff",
              fontSize: 22,
              fontWeight: "300",
              paddingVertical: 15,
            }}
          >
            Ahmad Safiullah
          </Text>
          <Text
            style={{
              alignSelf: "flex-start",
              color: "#49688D",
              fontSize: 20,
              fontWeight: "300",
              paddingBottom: 15,
            }}
          >
          ahmadsafiullah@gmail.com
            {/* {auth.currentUser.email} */}
          </Text>
        </View>
      </View>
      <Text style={styles.StudyText}>Let's Being studying</Text>
      <ScrollView>
        <TouchableOpacity disable={Showdisable}  onPress={toggleDropdownWeek1}>
          <View
            style={{
              marginTop: 17,
              backgroundColor: colorbg.bgLiteDark,
              borderRadius: 10,
              marginHorizontal: 8,
              flexDirection: "row",
            }}
          >
            <View style={{ justifyContent: "center" }}>
              <Image
                style={{ width: 110, height: 110 }}
                source={require("../../assets/python.webp")}
              />
            </View>
            <View style={{ alignItems: "flex-start", flex: 1 }}>
              <Text style={styles.CardText}>Week 01</Text>
              <Text style={styles.CardTextDis}>Learn Python Tutorials</Text>
            </View>
          </View>
          {isDropdownOpenWeek1 && (
            <View
              style={{
                flex: 1,
                backgroundColor: "#FFBB1C",
                borderBottomEndRadius: 30,
                borderBottomLeftRadius: 30,
                marginHorizontal: "6%",
                borderWidth: 1,
                borderRightColor: "#fff",
                borderLeftColor: "#fff",
                borderBottomColor: "#fff",
                borderTopColor: "#FFBB1C",
                padding: 16,
              }}
            >
              <TouchableOpacity style={styles.checkButton} onPress={() => handleLecture("Lecture")}>
               <Text style={styles.NextedCardText}>Lecture</Text>
                  <Checkbox
                    status={checkedLecture ? "checked" : "unchecked"}
                    onPress={() => {
                      setCheckedLecture(!checkedLecture);
                    }}
                  />
               </TouchableOpacity>
              <TouchableOpacity style={styles.checkButton}  onPress={() => handleProject("Project")}>
                <Text style={styles.NextedCardText}>Project</Text>
                <Checkbox
                    status={checkedProject ? "checked" : "unchecked"}
                    onPress={() => {
                      setCheckedProject(!checkedProject);
                    }}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.checkButton} onPress={() => handleAssignment("Assignment")}>
                <Text style={styles.NextedCardText}>Assignment</Text>
                <Checkbox
                    status={checkedAssignment ? "checked" : "unchecked"}
                    onPress={() => {
                      setCheckedAssignment(!checkedAssignment);
                    }}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.checkButton} onPress={() => handleQuiz("Quiz")}>
                <Text style={styles.NextedCardText}>Quiz</Text>
                <Checkbox
                    status={checkedQuiz ? "checked" : "unchecked"}
                    onPress={() => {
                      setCheckedQuiz(!checkedQuiz);
                    }}
                  />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={handleComplete}
              >
                <Text style={{ color: "#fff", fontSize: 20 }}>Complete</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
         <TouchableOpacity  onPress={toggleDropdownWeek2}>
          <View
            style={{
              marginTop: 17,
              backgroundColor: colorbg.bgLiteDark,
              borderRadius: 10,
              marginHorizontal: 8,
              flexDirection: "row",
            }}
          >
            <View style={{ justifyContent: "center" }}>
              <Image
                style={{ width: 110, height: 110 }}
                source={require("../../assets/python.webp")}
              />
            </View>
            <View style={{ alignItems: "flex-start", flex: 1 }}>
              <Text style={styles.CardText}>Week 02</Text>
              <Text style={styles.CardTextDis}>Variable and Constant</Text>
            </View>
          </View>
          {isDropdownOpenWeek2 && (
            <View
              style={{
                flex: 1,
                backgroundColor: "#FFBB1C",
                borderBottomEndRadius: 30,
                borderBottomLeftRadius: 30,
                marginHorizontal: "6%",
                borderWidth: 1,
                borderRightColor: "#fff",
                borderLeftColor: "#fff",
                borderBottomColor: "#fff",
                borderTopColor: "#FFBB1C",
                padding: 16,
              }}
            >
              <TouchableOpacity style={styles.checkButton} onPress={() => handleLecture("Lecture")}>
               <Text style={styles.NextedCardText}>Lecture</Text>
                  <Checkbox
                    status={checkedLecture ? "checked" : "unchecked"}
                    onPress={() => {
                      setCheckedLecture(!checkedLecture);
                    }}
                  />
               </TouchableOpacity>
              <TouchableOpacity style={styles.checkButton}  onPress={() => handleProject("Project")}>
                <Text style={styles.NextedCardText}>Project</Text>
                <Checkbox
                    status={checkedProject ? "checked" : "unchecked"}
                    onPress={() => {
                      setCheckedProject(!checkedProject);
                    }}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.checkButton} onPress={() => handleAssignment("Assignment")}>
                <Text style={styles.NextedCardText}>Assignment</Text>
                <Checkbox
                    status={checkedAssignment ? "checked" : "unchecked"}
                    onPress={() => {
                      setCheckedAssignment(!checkedAssignment);
                    }}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.checkButton} onPress={() => handleQuiz("Quiz")}>
                <Text style={styles.NextedCardText}>Quiz</Text>
                <Checkbox
                    status={checkedQuiz ? "checked" : "unchecked"}
                    onPress={() => {
                      setCheckedQuiz(!checkedQuiz);
                    }}
                  />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={handleComplete}
              >
                <Text style={{ color: "#fff", fontSize: 20 }}>Complete</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
       
       
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  heroText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignSelf: "center",
  },
  StudyText: {
    marginTop: 26,
    color: "black",
    fontSize: 24,
    fontWeight: "500",

    paddingHorizontal: "10%",
  },
  CardText: {
    marginVertical: 15,
    color: "#49688D",
    paddingHorizontal: 16,
    fontSize: 22,
    fontWeight: "700",
  },
  NextedCardText: {
    
    color: "#49688D",
    paddingHorizontal: 14,
    fontSize: 17,
    fontWeight: "500",
  },
  CardTextDis: {
    color: "#fff",
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: "300",
  },
  checkButton: {
    marginVertical: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginBtn: {
    marginTop: 10,
    width: "100%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorbg.bgdarkpro,
    elevation: 40,
  },
});
export default PythonLectureScreen;

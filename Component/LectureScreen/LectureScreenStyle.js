import React, { useState } from "react";
import { StyleSheet, ToastAndroid } from "react-native";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { colorbg } from "../../DataBase";
import { Image } from "react-native";
import { auth } from "../../Firebase";
import { ScrollView } from "react-native";
import { Checkbox } from "react-native-paper";
import { AntDesign,Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";

const LectureScreenStyle = ({ image , name}) => {
  const navigation = useNavigation()
  const [isDropdownOpenWeek1, setIsDropdownOpenweek1] = useState(false);
  const [isDropdownOpenWeek2, setIsDropdownOpenweek2] = useState(false);
  const [isDropdownOpenWeek3, setIsDropdownOpenweek3] = useState(false);
  const [isDropdownOpenWeek4, setIsDropdownOpenweek4] = useState(false);
  const [isDropdownOpenWeek5, setIsDropdownOpenweek5] = useState(false);
  const [isDropdownOpenWeek6, setIsDropdownOpenweek6] = useState(false);
  const [isDropdownOpenWeek7, setIsDropdownOpenweek7] = useState(false);
  const [completedText, setCompleteText] = useState("");
  const [checkedLecture, setCheckedLecture] = useState(false);
  const [checkedQuiz, setCheckedQuiz] = useState(false);
  const [checkedProject, setCheckedProject] = useState(false);
  const [checkedAssignment, setCheckedAssignment] = useState(false);
  const [button1Disabled, setButton1Disabled] = useState(false);
  const [button2Disabled, setButton2Disabled] = useState(false);
  const [button3Disabled, setButton3Disabled] = useState(false);
  const [button4Disabled, setButton4Disabled] = useState(false);
  const [button5Disabled, setButton5Disabled] = useState(false);
  const [button6Disabled, setButton6Disabled] = useState(false);
  const [button7Disabled, setButton7Disabled] = useState(false);
  const [button8Disabled, setButton8Disabled] = useState(true);


  
  const completeTask = (buttonNumber , text) => {
    switch (buttonNumber) {
      case 1:
        setButton1Disabled(true);
        setCompleteText(text);
        break;
      case 2:
        setButton2Disabled(true);
        setCompleteText(text);
        break;
      case 3:
        setButton3Disabled(true);
        setCompleteText(text);
        break;
        case 4:
        setButton4Disabled(true);
        setCompleteText(text);
        break;
        case 5:
        setButton5Disabled(true);
        setCompleteText(text);
        break;
        case 6:
        setButton6Disabled(true);
        setCompleteText(text);
        break;
        case 7:
          setButton7Disabled(true);
          setCompleteText(text);
          break;
      default:
       
    }
    
    
  }
  const toggleDropdownWeek1 = () => {
    setIsDropdownOpenweek1(!isDropdownOpenWeek1);
  };
  const toggleDropdownWeek2 = () => {
    setIsDropdownOpenweek2(!isDropdownOpenWeek2);
   
  };
  const toggleDropdownWeek3 = () => {
    setIsDropdownOpenweek3(!isDropdownOpenWeek3);
  };
  const toggleDropdownWeek4 = () => {
    setIsDropdownOpenweek4(!isDropdownOpenWeek4);
  };
  const toggleDropdownWeek5 = () => {
    setIsDropdownOpenweek5(!isDropdownOpenWeek5);
  };
  const toggleDropdownWeek6 = () => {
    setIsDropdownOpenweek6(!isDropdownOpenWeek6);
  };
  const toggleDropdownWeek7 = () => {
    setIsDropdownOpenweek7(!isDropdownOpenWeek7);
    
  };

  const handleComplete1 = () => {
    // Perform any completion logic here
    if (checkedProject && checkedLecture && checkedAssignment && checkedQuiz) {
      setIsDropdownOpenweek1(false);
      const text = (
        <Text> Completed Course Successfully  {"  "}
          <AntDesign name="checkcircle" size={18} color="green" />
        </Text>
      );
      completeTask(1,text)
      
      setCheckedProject(false)
      setCheckedLecture(false)
      setCheckedAssignment(false)
      setCheckedQuiz(false)
    } else {
      showToast();
      function showToast() {
        return ToastAndroid.show(
          "Plz complete the Required check",
          ToastAndroid.SHORT
        );
      }
      setIsDropdownOpenweek1(true);
    }
  };
  const handleComplete2 = () => {
    // Perform any completion logic here
    if (checkedProject && checkedLecture && checkedAssignment && checkedQuiz) {
      setIsDropdownOpenweek2(false);
      const text = (
        <Text> Completed Course Successfully {"  "}
          <AntDesign name="checkcircle" size={18} color="green" />
        </Text>
      );
      completeTask(2,text)
      
      setCheckedProject(false)
      setCheckedLecture(false)
      setCheckedAssignment(false)
      setCheckedQuiz(false)
    
    } else {
      showToast();
      function showToast() {
        return ToastAndroid.show(
          "Plz complete the Required check",
          ToastAndroid.SHORT
        );
      }
      setIsDropdownOpenweek2(true);
    }
  };
  const handleComplete3 = () => {
    // Perform any completion logic here
    if (checkedProject && checkedLecture && checkedAssignment && checkedQuiz) {
      setIsDropdownOpenweek3(false);
      const text = (
        <Text> Completed Course Successfully {"  "}
          <AntDesign name="checkcircle" size={18} color="green" />
        </Text>
      );
      completeTask(3,text)
     
      setCheckedProject(false)
      setCheckedLecture(false)
      setCheckedAssignment(false)
      setCheckedQuiz(false)
    } else {
      showToast();
      function showToast() {
        return ToastAndroid.show(
          "Plz complete the Required check",
          ToastAndroid.SHORT
        );
      }
      setIsDropdownOpenweek3(true);
    }
  };
  const handleComplete4 = () => {
    // Perform any completion logic here
    if (checkedProject && checkedLecture && checkedAssignment && checkedQuiz) {
      setIsDropdownOpenweek4(false);
      const text = (
        <Text> Completed Course Successfully {"  "}
          <AntDesign name="checkcircle" size={18} color="green" />
        </Text>
      );
      completeTask(4,text)
      
      setCheckedProject(false)
      setCheckedLecture(false)
      setCheckedAssignment(false)
      setCheckedQuiz(false)
    } else {
      showToast();
      function showToast() {
        return ToastAndroid.show(
          "Plz complete the Required check",
          ToastAndroid.SHORT
        );
      }
      setIsDropdownOpenweek4(true);
    }
  };
  const handleComplete5 = () => {
    // Perform any completion logic here
    if (checkedProject && checkedLecture && checkedAssignment && checkedQuiz) {
      setIsDropdownOpenweek5(false);
      const text = (
        <Text> Completed Course Successfully {"  "}
          <AntDesign name="checkcircle" size={18} color="green" />
        </Text>
      );
      completeTask(5,text)
      
      setCheckedProject(false)
      setCheckedLecture(false)
      setCheckedAssignment(false)
      setCheckedQuiz(false)
    } else {
      showToast();
      function showToast() {
        return ToastAndroid.show(
          "Plz complete the Required check",
          ToastAndroid.SHORT
        );
      }
      setIsDropdownOpenweek5(true);
    }
  };
  const handleComplete6 = () => {
    // Perform any completion logic here
    if (checkedProject && checkedLecture && checkedAssignment && checkedQuiz) {
      setIsDropdownOpenweek6(false);
      const text = (
        <Text> Completed Course Successfully {"  "}
          <AntDesign name="checkcircle" size={18} color="green" />
        </Text>
      );
      completeTask(6,text)
     
      setCheckedProject(false)
      setCheckedLecture(false)
      setCheckedAssignment(false)
      setCheckedQuiz(false)
    } else {
      showToast();
      function showToast() {
        return ToastAndroid.show(
          "Plz complete the Required check",
          ToastAndroid.SHORT
        );
      }
      setIsDropdownOpenweek6(true);
    }
  };
  const handleComplete7= () => {
    // Perform any completion logic here
    if (checkedProject && checkedLecture && checkedAssignment && checkedQuiz) {
      setIsDropdownOpenweek7(false);
      const text = (
        <Text> Completed Course Successfully {"  "}
          <AntDesign name="checkcircle" size={18} color="green" />
        </Text>
      );
      completeTask(7,text)
     
      setCheckedProject(false)
      setCheckedLecture(false)
      setCheckedAssignment(false)
      setCheckedQuiz(false)
    } else {
      showToast();
      function showToast() {
        return ToastAndroid.show(
          "Plz complete the Required check",
          ToastAndroid.SHORT
        );
      }
      setIsDropdownOpenweek7(true);
    }
  };

  const handleQuiz = () => {};
  const handleLecture = () => {
    navigation.navigate("ProgramLec")
  }
  const handleProject = () => {};
  const handleAssignment = () => {};
 var x =  button1Disabled && button2Disabled && button3Disabled && button4Disabled && button5Disabled && button6Disabled && button7Disabled
  return (
    <ImageBackground
      source={require("../../assets/bckg2.jpg")}
      style={{ flex: 1 }}
    >
   
      <View
        style={{
          backgroundColor: colorbg.bgdarkpro,
          borderBottomEndRadius: 30,
          borderBottomLeftRadius: 30,
        }}
      >
       <TouchableOpacity style={{padding:18, position:"absolute"}} onPress={()=> navigation.goBack()}>
      <Ionicons name="arrow-back" size={34} color="#e8f2fd" />
      </TouchableOpacity>
        <Text style={styles.heroText}>Welcome to </Text>
        <Text
          style={{
            alignItems: "center",
            alignSelf: "center",
            color: "#49688D",
            fontSize: 26,
            fontWeight: "300",
            paddingVertical: 16,
          }}
        >
          {name} Learning Course 😍
        </Text>
      </View>
      <View
        style={{
          marginTop: 17,
          backgroundColor: colorbg.bgdark,
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
      <ScrollView style={{marginBottom:12}}>
      
        <TouchableOpacity disabled={button1Disabled}  onPress={toggleDropdownWeek1}>
          <View
            style={[
              styles.ButtonStyle, button1Disabled && styles.DisableButton
            ]}
          >
            <View style={{ justifyContent: "center" }}>
              <Image
                style={styles.CardImage}
                source = {image}
              />
            </View>
            <View style={{ alignItems: "flex-start", flex: 1 }}>
              <Text style={styles.CardText}>Week 01</Text>
              <Text style={styles.CardTextDis}>Learn {name} Tutorials</Text>
            {button1Disabled &&
              <Text style={styles.completeText}>{completedText}</Text>}
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
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleLecture("Lecture")}
              >
                <Text style={styles.NextedCardText}>Lecture</Text>
                <Checkbox
                  status={checkedLecture ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedLecture(!checkedLecture);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleProject("Project")}
              >
                <Text style={styles.NextedCardText}>Project</Text>
                <Checkbox
                  status={checkedProject ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedProject(!checkedProject);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleAssignment("Assignment")}
              >
                <Text style={styles.NextedCardText}>Assignment</Text>
                <Checkbox
                  status={checkedAssignment ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedAssignment(!checkedAssignment);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleQuiz("Quiz")}
              >
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
                onPress={handleComplete1}
              >
                <Text style={{ color: "#fff", fontSize: 20 }}>Complete</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity disabled={button2Disabled} onPress={toggleDropdownWeek2}>
          <View
            style={[
              styles.ButtonStyle, button2Disabled && styles.DisableButton
            ]}
          >
            <View style={{ justifyContent: "center" }}>
              <Image
                style={styles.CardImage}
                source = {image}
              />
            </View>
            <View style={{ alignItems: "flex-start", flex: 1 }}>
              <Text style={styles.CardText}>Week 02</Text>
              <Text style={styles.CardTextDis}>Variable and Constant</Text>
              {button2Disabled &&
              <Text style={styles.completeText}>{completedText}</Text>}
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
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleLecture("Lecture")}
              >
                <Text style={styles.NextedCardText}>Lecture</Text>
                <Checkbox
                  status={checkedLecture ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedLecture(!checkedLecture);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleProject("Project")}
              >
                <Text style={styles.NextedCardText}>Project</Text>
                <Checkbox
                  status={checkedProject ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedProject(!checkedProject);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleAssignment("Assignment")}
              >
                <Text style={styles.NextedCardText}>Assignment</Text>
                <Checkbox
                  status={checkedAssignment ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedAssignment(!checkedAssignment);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleQuiz("Quiz")}
              >
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
                onPress={handleComplete2}
              >
                <Text style={{ color: "#fff", fontSize: 20 }}>Complete</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity disabled={button3Disabled}  onPress={toggleDropdownWeek3}>
          <View
            style={[
              styles.ButtonStyle, button3Disabled && styles.DisableButton
            ]}
          >
            <View style={{ justifyContent: "center" }}>
              <Image
                style={styles.CardImage}
                source = {image}
              />
            </View>
            <View style={{ alignItems: "flex-start", flex: 1 }}>
              <Text style={styles.CardText}>Week 03</Text>
              <Text style={styles.CardTextDis}>Array and List</Text>
              {button3Disabled &&
              <Text style={styles.completeText}>{completedText}</Text>}
            </View>
          </View>
          {isDropdownOpenWeek3 && (
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
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleLecture("Lecture")}
              >
                <Text style={styles.NextedCardText}>Lecture</Text>
                <Checkbox
                  status={checkedLecture ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedLecture(!checkedLecture);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleProject("Project")}
              >
                <Text style={styles.NextedCardText}>Project</Text>
                <Checkbox
                  status={checkedProject ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedProject(!checkedProject);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleAssignment("Assignment")}
              >
                <Text style={styles.NextedCardText}>Assignment</Text>
                <Checkbox
                  status={checkedAssignment ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedAssignment(!checkedAssignment);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleQuiz("Quiz")}
              >
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
                onPress={handleComplete3}
              >
                <Text style={{ color: "#fff", fontSize: 20 }}>Complete</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity disabled={button4Disabled}  onPress={toggleDropdownWeek4}>
          <View
            style={[
              styles.ButtonStyle, button4Disabled && styles.DisableButton
            ]}
          >
            <View style={{ justifyContent: "center" }}>
              <Image
                style={styles.CardImage}
                source = {image}
              />
            </View>
            <View style={{ alignItems: "flex-start", flex: 1 }}>
              <Text style={styles.CardText}>Week 04</Text>
              <Text style={styles.CardTextDis}>Basic Operators</Text>
              {button4Disabled &&
              <Text style={styles.completeText}>{completedText}</Text>}
            </View>
          </View>
          {isDropdownOpenWeek4 && (
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
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleLecture("Lecture")}
              >
                <Text style={styles.NextedCardText}>Lecture</Text>
                <Checkbox
                  status={checkedLecture ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedLecture(!checkedLecture);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleProject("Project")}
              >
                <Text style={styles.NextedCardText}>Project</Text>
                <Checkbox
                  status={checkedProject ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedProject(!checkedProject);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleAssignment("Assignment")}
              >
                <Text style={styles.NextedCardText}>Assignment</Text>
                <Checkbox
                  status={checkedAssignment ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedAssignment(!checkedAssignment);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleQuiz("Quiz")}
              >
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
                onPress={handleComplete4}
              >
                <Text style={{ color: "#fff", fontSize: 20 }}>Complete</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity disabled={button5Disabled} onPress={toggleDropdownWeek5}>
          <View
            style={[
              styles.ButtonStyle, button5Disabled && styles.DisableButton
            ]}
          >
            <View style={{ justifyContent: "center" }}>
              <Image
                style={styles.CardImage}
                source = {image}
              />
            </View>
            <View style={{ alignItems: "flex-start", flex: 1 }}>
              <Text style={styles.CardText}>Week 05</Text>
              <Text style={styles.CardTextDis}>Loops</Text>
              {button5Disabled &&
              <Text style={styles.completeText}>{completedText}</Text>}
            </View>
          </View>
          {isDropdownOpenWeek5 && (
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
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleLecture("Lecture")}
              >
                <Text style={styles.NextedCardText}>Lecture</Text>
                <Checkbox
                  status={checkedLecture ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedLecture(!checkedLecture);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleProject("Project")}
              >
                <Text style={styles.NextedCardText}>Project</Text>
                <Checkbox
                  status={checkedProject ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedProject(!checkedProject);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleAssignment("Assignment")}
              >
                <Text style={styles.NextedCardText}>Assignment</Text>
                <Checkbox
                  status={checkedAssignment ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedAssignment(!checkedAssignment);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleQuiz("Quiz")}
              >
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
                onPress={handleComplete5}
              >
                <Text style={{ color: "#fff", fontSize: 20 }}>Complete</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity disabled={button6Disabled}  onPress={toggleDropdownWeek6}>
          <View
            style={[
              styles.ButtonStyle, button6Disabled && styles.DisableButton
            ]}
          >
            <View style={{ justifyContent: "center" }}>
              <Image
                style={styles.CardImage}
                source = {image}
              />
            </View>
            <View style={{ alignItems: "flex-start", flex: 1 }}>
              <Text style={styles.CardText}>Week 06</Text>
              <Text style={styles.CardTextDis}>Classes and Objects</Text>
              {button6Disabled &&
              <Text style={styles.completeText}>{completedText}</Text>}
            </View>
          </View>
          {isDropdownOpenWeek6 && (
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
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleLecture("Lecture")}
              >
                <Text style={styles.NextedCardText}>Lecture</Text>
                <Checkbox
                  status={checkedLecture ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedLecture(!checkedLecture);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleProject("Project")}
              >
                <Text style={styles.NextedCardText}>Project</Text>
                <Checkbox
                  status={checkedProject ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedProject(!checkedProject);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleAssignment("Assignment")}
              >
                <Text style={styles.NextedCardText}>Assignment</Text>
                <Checkbox
                  status={checkedAssignment ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedAssignment(!checkedAssignment);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleQuiz("Quiz")}
              >
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
                onPress={handleComplete6}
              >
                <Text style={{ color: "#fff", fontSize: 20 }}>Complete</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity disabled={button7Disabled}  onPress={toggleDropdownWeek7}>
          <View
            style={[
              styles.ButtonStyle, button7Disabled && styles.DisableButton
            ]}
          >
            <View style={{ justifyContent: "center" }}>
              <Image
                style={styles.CardImage}
                source = {image}
              />
            </View>
            <View style={{ alignItems: "flex-start", flex: 1 }}>
              <Text style={styles.CardText}>Week 07</Text>
              <Text style={styles.CardTextDis}>Functions</Text>
              {button7Disabled &&
              <Text style={styles.completeText}>{completedText}</Text>}
            </View>
          </View>
          {isDropdownOpenWeek7 && (
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
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleLecture("Lecture")}
              >
                <Text style={styles.NextedCardText}>Lecture</Text>
                <Checkbox
                  status={checkedLecture ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedLecture(!checkedLecture);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleProject("Project")}
              >
                <Text style={styles.NextedCardText}>Project</Text>
                <Checkbox
                  status={checkedProject ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedProject(!checkedProject);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleAssignment("Assignment")}
              >
                <Text style={styles.NextedCardText}>Assignment</Text>
                <Checkbox
                  status={checkedAssignment ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedAssignment(!checkedAssignment);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => handleQuiz("Quiz")}
              >
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
                onPress={handleComplete7}
              >
                <Text style={{ color: "#fff", fontSize: 20 }}>Complete</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>

        <View style={{paddingHorizontal:16,marginVertical:16, justifyContent:"center", alignItems:"center"}}>
          <Text style={styles.TextCertificate}>Get certificated</Text>
          <Text style={styles.TextDis}>Pay the Required dues to get certificate</Text>
          {x? 
          <TouchableOpacity  style={styles.CerBtn} onPress={()=> navigation.navigate("PayCertificate")}>
          <Text  style={{ color: "#fff", fontSize: 20 }}>Click to Apply</Text>
          </TouchableOpacity>
      :<TouchableOpacity disabled={button8Disabled} style={[styles.CerBtn ,button8Disabled && styles.DisableButton ]}>
          <Text  style={{ color: "#fff", fontSize: 20 }}>Click to Apply</Text>
          </TouchableOpacity>
          }
          
          
        </View>
      </ScrollView>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  TextCertificate:{
    color: "gold",
    textShadowColor:'#585858',
    textShadowOffset:{width: 4, height: 5},
    textShadowRadius:10,
    fontSize: 38,
    fontWeight: "bold",
    marginTop: 20,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignSelf: "center",
  },
  TextDis:{
    color: "#49688D",
    paddingHorizontal: 14,
    fontSize: 11,
    fontWeight: "500",
    justifyContent: "center",
    alignSelf: "center",
  },
  ButtonStyle:{
    marginTop: 17,
    backgroundColor: colorbg.bgLiteDark,
    borderRadius: 10,
    marginHorizontal: 8,
    flexDirection: "row",
  },
  DisableButton:{
    backgroundColor: "#E28608",
    opacity: 0.6,
  },

  heroText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
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
  CardImage:{
    width:110,
    height:110,
    resizeMode:"cover"
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
  completeText: {
    paddingVertical: 5,
    paddingHorizontal: 16,
    fontSize: 14,
    color: "grey",
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
  CerBtn:{
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: "70%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorbg.bgdarkpro,
    elevation: 40,
  }
});

export default LectureScreenStyle;
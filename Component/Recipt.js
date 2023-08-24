import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Recipt = () => {
  return (
    <View style={styles.wrapper}>
              <View style={styles.modal__content}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#fff',
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#fff',
                      fontSize: 20,
                      paddingVertical: 10,
                      backgroundColor: '#fff',
                      color: '#e36e04',
                      fontWeight: '900',
                    }}
                  >
                    TID # {currentTID}
                  </Text>
                  <AntDesign
                    onPress={() => {
                      setModalVisible(false);
                      navigation.navigate('profile');
                    }}
                    name='close'
                    size={26}
                    color='#e36e04'
                  />
                </View>

                <Text
                  style={{
                    textAlign: 'center',
                    color: '#e36e04',
                    fontSize: 21,
                    fontWeight: '900',
                    marginVertical: 10,
                  }}
                >
                  Money Transfer
                </Text>

                {/* First Row */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    marginVertical: 10,
                  }}
                >
                  <View style={styles.content__wrapper}>
                    <Text style={styles.text}>Transferred Amout</Text>
                    <Text style={styles.amount}>
                      500
                    </Text>
                  </View>
                  <View style={styles.content__wrapper}>
                    <Text style={[styles.text, { textAlign: 'right' }]}>
                      Fee
                    </Text>
                    <Text style={styles.amount}>Rs 0.00</Text>
                  </View>
                </View>

                {/* Second Row */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    marginVertical: 10,
                  }}
                >
                  <View style={styles.content__wrapper}>
                    <Text style={styles.text}>Receiver Name</Text>
                    <Text style={styles.amount}>META INSTITUTE</Text>
                  </View>
                  <View style={styles.content__wrapper}>
                    <Text style={[styles.text, { textAlign: 'right' }]}>
                      Account Number
                    </Text>
                    <Text style={[styles.amount, { textAlign: 'right' }]}>
                      03XXXXXXX46
                    </Text>
                  </View>
                </View>

                {/* Third Row */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    marginVertical: 10,
                  }}
                >
                  <View style={styles.content__wrapper}>
                    <Text style={styles.text}>Transaction Time</Text>
                    <Text style={styles.amount}>
                      {date.getHours()}:{date.getMinutes() + 1}:
                      {date.getSeconds()}
                    </Text>
                  </View>
                  <View style={styles.content__wrapper}>
                    <Text style={[styles.text, { textAlign: 'right' }]}>
                      Transaction Date
                    </Text>
                    <Text style={[styles.amount, { textAlign: 'right' }]}>
                      {date.getDate()}-{date.getMonth() + 1}-
                      {date.getFullYear()}
                    </Text>
                  </View>
                </View>

                {/* Fourth Row */}
                <View
                  style={{
                    width: '100%',
                    alignSelf: 'flex-end',
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                  }}
                >
                  <Text
                    style={{
                      marginHorizontal: 10,
                      marginVertical: 16,
                      fontWeight: '700',
                      color: '#e36e04',
                    }}
                  >
                    SHARE
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 20,
                      marginVertical: 16,
                      fontWeight: '700',
                      color: '#e36e04',
                    }}
                  >
                    SAVE
                  </Text>
                </View>
              </View>
            </View>
  )
}

export default Recipt

const styles = StyleSheet.create({
    modal__content: {
        borderWidth: 1,
        borderColor: '#e36e04',
        width: '85%',
        backgroundColor: 'rgba(211,211,211,1)',
        elevation: 5,
      },
    
})
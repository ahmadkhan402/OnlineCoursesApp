import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { PaymentIcon } from "react-native-payment-icons";

const PayrollScreen = () => {
  const [accountHolder, setAccountHolder] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  // Add more state variables as needed

  const handleSubmit = () => {
    // Implement logic to save user bank details
    // You can send this data to a backend API, for example
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Enter Bank Details</Text>

      <TextInput
        placeholder="Account Holder Name"
        value={accountHolder}
        onChangeText={(text) => setAccountHolder(text)}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
      />

      <TextInput
        placeholder="Account Number"
        value={accountNumber}
        onChangeText={(text) => setAccountNumber(text)}
        keyboardType="numeric"
        style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
      />

      <TextInput
        placeholder="Bank Name"
        value={bankName}
        onChangeText={(text) => setBankName(text)}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
      />

      {/* Add more input fields as needed */}
      <View style={{flexDirection:"row", padding:"2%" , justifyContent:"space-around"}}>
        <PaymentIcon type="visa" width={50} height={50}/>
        <PaymentIcon type="master" width={50} height={50}/>
        <PaymentIcon type="paypal" width={50} height={50}/>
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default PayrollScreen;

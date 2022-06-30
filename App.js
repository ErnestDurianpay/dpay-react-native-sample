/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import RNDpaySdk from 'react-native-dpay-sdk';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const checkoutOptions = {
  locale: 'en',
  environment: 'production',
  customerId: 'cust_001',
  siteName: 'MovieTicket',
  customerEmail: 'joe@ios.com',
  customerGivenName: 'JoeIOS',
  accessToken:
    'fd810eb81c1b057a1cdb90b261ebebb69446fa80dd49101c9a2fd9e25448337a',
  orderId: 'ord_hDQVZecyxr4905',
  amount: '23423',
  currency: 'IDR',
  paymentType: 'installment', //mandatory for installment type payments
  label: 'green city', //optional
  receiverName: 'Jayraj', //optional
  receiverPhone: '819xxxxxxx', //optional
  landmark: 'Phoenix Mall', //optional
  customerCountry: 'India', //optional
  customerCity: 'bangalore', //optional
  customerRegion: 'Asia', //optional
  customerAddressLine1: '123, Ramnagar, Railway Station, Kempegowda', //optional
  customerMobile: '8992xxxxxx', //optional
  customerPostalCode: '12xxxx', //optional
  darkMode: false, //optional (Set to true to enable dark mode)
  forceFail: false,
};

const App = () => {
  const success = data => {
    var json = JSON.parse(data);
    //this is the successful payment id
    console.log(json?.response?.payment_id);
  };

  const failed = data => {
    var json = JSON.parse(data);
    //this is failed payment id
    console.log(json?.response?.payment_id);
  };

  const close = data => {
    var json = JSON.parse(data);
    //this is order id when closed
    console.log(json?.response?.order_id);
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#2136A8',
            width: '50%',
            height: '8%',
            borderRadius: 10 / 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            RNDpaySdk.openCheckout(checkoutOptions, success, failed, close);
          }}>
          <Text style={{color: 'white', fontWeight: '500'}}>
            Checkout Button
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;

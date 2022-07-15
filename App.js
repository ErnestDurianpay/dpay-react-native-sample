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
    'fedf33b7a6f56e5a332a1aa497f131105b3842b602b23984de90cd0223b9b5e4',
  orderId: 'ord_xrc0BvcVIF1680',
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
    console.log('SUCCESS');
  };

  const failed = data => {
    var json = JSON.parse(data);
    //this is failed payment id
    console.log(json?.response?.payment_id);
    console.log('FAILED');
  };

  const close = data => {
    var json = JSON.parse(data);
    //this is order id when closed
    console.log(json?.response?.order_id);
    console.log('CLOSED');
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

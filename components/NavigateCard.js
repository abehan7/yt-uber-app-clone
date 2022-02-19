import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { SET_DESTINATION } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, 준규</Text>
      <View style={tw`border-t border-gray-100 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={toInputBoxStyles}
            fetchDetails={true}
            returnKeyType={"search"}
            enablePoweredByContainer={false}
            onPress={(data, details = null) => {
              console.log("from NavigateCard:", details.geometry.location);
              dispatch(
                SET_DESTINATION({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            nearbyPlacesAPI={GOOGLE_MAPS_APIKEY}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            debounce={400}
            minLength={2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    fontSize: 18,
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});

import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Selectlist from 'react-native-dropdown-select-list';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const [selected, setSelected] = React.useState([]);
    const [selected1, setselected1] = React.useState([]);
    const [selected2, setselected2] = React.useState([]);

    const navigation = useNavigation();

    const sembol = [
        { key: '0', value: 'ACSEL' },
        { key: '1', value: 'GARAN' },
        { key: '2', value: 'ADEL' },
        { key: '3', value: 'PRKABTE' },
        { key: '4', value: 'DENCM' },
    ];
 
    const periyot = [
        { key: '0', value: '1' },
        { key: '1', value: '5' },
        { key: '2', value: '10' },
        { key: '3', value: '20' },
        { key: '4', value: '30' },
        { key: '5', value: '60' },
        { key: '6', value: '120' },
    ];

    const donem = [
        { key: '0', value: 'G' },
        { key: '1', value: 'H' },
        { key: '2', value: 'A' },
    ];



    var gidensembol = sembol[Number(selected)].value;
    var gidenperiyot = periyot[Number(selected1)].value;
    var gidendonem = donem[Number(selected2)].value;


    return (
        <View style={{ justifyContent:'center',paddingHorizontal: 20, paddingVertical: 50 }}>
            <View>
                <Selectlist
                   // onSelect={() => alert(selected)}
                    setSelected={setSelected}
                    data={sembol}
                    dropdownItemStyles={{ marginHorizontal: 10 }}
                    searchPlaceholder="Sembols..."
                    placeholder="Sembol..."
                    maxHeight={100}
                />
            </View>
            <View style={{ paddingTop: 20 }}>
                <Selectlist
                    data={periyot}
                    setSelected={setselected1}
                   // onSelect={() => alert(selected1)}
                    dropdownItemStyles={{ marginHorizontal: 10 }}
                    searchPlaceholder="Periyot..."
                    placeHolder="Periyot..."
                    maxHeight={100}
                />
            </View>

            <View style={{ paddingTop: 20 }}>
                <Selectlist
                    data={donem}
                   // onSelect={() => alert(selected2)}
                    setSelected={setselected2}
                    dropdownItemStyles={{ marginHorizontal: 10 }}
                    placeHolder="Donem..."
                    searchPlaceholder="Donem..."
                    maxHeight={100}
                />
            </View>

            <View
                style={{
                    paddingTop: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Detail", { gidensembol, gidenperiyot, gidendonem })}
                    style={{
                        padding: 10,
                        alignItems: 'center',
                        justifyContent:'center',
                        backgroundColor: '#055e8e',
                        height: 50,
                        width: 200,
                        borderRadius:20
                    }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            textAlign: 'center',
                            justifyContent: 'center',
                            alignItems:'center',
                            color: '#000000',
                            
                        }}>
                        SONUCLARI GETIR
                    </Text>
                </TouchableOpacity>
            </View>

         
        </View>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;
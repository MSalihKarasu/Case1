import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from "react-native";


export default DetailScreen = () => {

    const [data, setData] = useState([]);
   

    const route = useRoute();
    var gelensembol = route.params.gidensembol;
    var gelenperiyot = route.params.gidenperiyot;
    var gelendonem = route.params.gidendonem;


    var url = "http://wsdata.idealdata.com.tr:5046/DFN?PASS=sedat?CMD=PivotAnalizleri?Sembol=" + gelensembol + "?Periyot=" + gelenperiyot + "?Donem=" + gelendonem;

    useEffect(() => {
      
        getData();

    }, [])

    getData = () => {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                 
              
               
                    //console.log("sonucları listele", response.Pivot_Degerleri[0]);
                    //console.log("ghghghghghghghgh",response.Pivot_Degerleri.length);

                    var gelendegerler=response.Pivot_Degerleri[0];
                  
                  // console.log("jkjkjkjkjjkj", gelendegerler);
                   //Gelen objeyi diziye dönüstürüyoruz.

                   const array = Object.values( gelendegerler);
                   //console.log("tytytytytyty", array[0]);
                        setData(array);
                       

            })
            .catch((error) => {
                console.error(error);
            })
            
 
        
    };


    return (

        <View style={{ flex: 1, backgroundColor: '#ffffff', paddingLeft: 20 }}>
            <View style={{ paddingTop: 20 }}>
                <Text style={{ paddingTop: 20 , fontWeight:'bold'}}>
                   
                    Destek1 : <Text>{data[3]}</Text>
                </Text> 
                <Text style={{ paddingTop: 20, fontWeight: 'bold' }}>
                Destek2 : <Text>{data[4]}</Text>
                </Text>
                <Text style={{ paddingTop: 20, fontWeight: 'bold' }}>
                Destek3 : <Text>{data[5]}</Text>
                </Text>
                <Text style={{ paddingTop: 20, fontWeight: 'bold' }}>
                Direnc1 : <Text>{data[6]}</Text>
                </Text>
                <Text style={{ paddingTop: 20, fontWeight: 'bold' }}>
                Direnc2 : <Text>{data[7]}</Text>
                </Text>
                <Text style={{ paddingTop: 20, fontWeight: 'bold' }}>
                Direnc3 : <Text>{data[8]}</Text>
                </Text> 
                <Text style={{ paddingTop: 20, fontWeight: 'bold' }}>
                Pivot   : <Text>{data[2]}</Text>
                </Text>
            </View>
            <View style={{paddingTop:20,alignItems:'center', justifyContent:'center'}} >
                <Text>
                    Kesme Kontrol : 
                    {
                        data[1] ? data[1] : 'Kesme Yok'
                    }
                    </Text>
            </View>
        
        </View>
    )
}
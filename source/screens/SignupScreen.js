import React, { useState } from 'react';
import { TextInput} from 'react-native-paper'
import {View,Text,StyleSheet, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from 'react-native-elements';
import SearchInput, { createFilter } from 'react-native-search-filter';
import {SearchBar} from 'react-native-elements'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';



const SignupScreen = props => {

    const keys = ['name','state']
    const [emailSlug, setEmailSlug] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [post, setPost] = useState('')
    const [date, setDate] = useState('')
    const [companyId, setCompanyId] = useState('')
    const [company, setCompany]=useState('')
    const [dept, setDept] = useState('')
    const [depId, setDepId] = useState('')
    const [mail, setMail] = useState(name +`@${emailSlug}`)
    const companyList = useSelector(x=>x.list.companylist)
    const [idList, setIdList]=useState([])

    const continousSearch = (text) => {
        let list = []
        setCompany(text)
        list = companyList.filter(x=>x.name.toLowerCase().includes(text.toLowerCase()))
        setIdList(list)
        console.log('Lower',idList)
        
    }
    const companyUID = (id) =>{
        setCompanyId(id)
        setCompany('')
    }

    const continousSearch2 = (text) => {
        let list = []
        setDept(text)
        list = companyList.filter(x=>x.name.toLowerCase().includes(text.toLowerCase()))
        setIdList(list)
        console.log('Lower',idList)
        
    }
    
    
    

    const dispatch = useDispatch()

    const signUpHandler = async() => {

        if(reEnterPassword === password){
            
            await dispatch(signupAction.signup(mail, password, locality, state, city,name,url))
            await dispatch(profileAction.addAccount(name, locality, state, city, url, mail))
            props.navigation.navigate('Login')
        }else{
            alert("Password Don't Match !")
        }

    }
    

    return(
        <SafeAreaView>
        <ScrollView>
        <View style={{height:Dimensions.get('window').height, width:Dimensions.get('window').width, backgroundColor:'#121212',justifyContent:'center'}}>
        <Text style={{fontSize:35, fontFamily:'medium', color:'white', alignSelf:'center', margin:10}}>Register Your Company</Text>
        <View style={{alignSelf:'center'}}>    
            
            <View style={{width:Dimensions.get('window').width, paddingHorizontal:5}}>
                <TextInput
                    value = {name}
                    onChangeText = {(text)=>setName(text)}
                    mode = 'outlined'
                    label = 'Name of Employer'
                    theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                    style={{ fontFamily: 'medium', fontColor: 'white', height: 60, width: Dimensions.get('screen').width*0.97, backgroundColor:'#606368', alignSelf:'center' }}
                />
            </View>
        
            <View style={{width:Dimensions.get('window').width, flexDirection:'row', justifyContent:'space-between',paddingHorizontal:5}}>
                <TextInput
                    value = {age}
                    onChangeText = {(text)=>setAge(text)}
                    mode = 'outlined'
                    label = 'Age'
                    theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                    style={{ fontFamily: 'medium', fontColor: 'white', height: 60, width: Dimensions.get('screen').width*0.475, backgroundColor:'#606368', alignSelf:'center' }}
                />
                <TextInput
                    value = {date}
                    onChangeText = {(text)=>setDate(text)}
                    mode = 'outlined'
                    label = 'Joining Date'
                    theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                    style={{ fontFamily: 'medium', fontColor: 'white', height: 60, width: Dimensions.get('screen').width*0.475, backgroundColor:'#606368', alignSelf:'center' }}
                />
            </View>

            <View style={{width:Dimensions.get('window').width}}>
                <TextInput
                    value = {post}
                    onChangeText = {(text)=>setPost(text)}
                    mode = 'outlined'
                    label = 'State'
                    theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                    style={{ fontFamily: 'medium', fontColor: 'white', height: 60, width: Dimensions.get('screen').width*0.97, backgroundColor:'#606368', alignSelf:'center' }}
                />
            </View>

            

            <View style={{width:Dimensions.get('window').width}}>
            <TextInput
                value={companyId}
                onChangeText = {(text)=>continousSearch(text)}
                mode = 'outlined'
                label = 'Company ID'
                theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                style={{ fontFamily: 'medium', fontColor: 'white', height: 60, width: Dimensions.get('screen').width*0.97, backgroundColor:'#606368', alignSelf:'center' }}
            />
            <FlatList
                    data={company === ''?[]: idList}
                    keyExtractor={x=>x.id}
                    renderItem={({item})=>{
                        return(
                            <View style={{width:Dimensions.get('window').width*0.85,alignSelf:'center',padding:5, borderWidth:0.5, borderColor:'white'}}>
                                <TouchableOpacity onPress={()=>{companyUID(item.id)}}>
                                <Text style={{fontFamily:'medium', fontSize:16, color:'white', alignSelf:'center'}}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>

            <View style={{width:Dimensions.get('window').width}}>
            <TextInput
                value={depId}
                onChangeText = {(text)=>continousSearch2(text)}
                mode = 'outlined'
                label = 'Company ID'
                theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                style={{ fontFamily: 'medium', fontColor: 'white', height: 60, width: Dimensions.get('screen').width*0.97, backgroundColor:'#606368', alignSelf:'center' }}
            />
            <FlatList
                    data={company === ''?[]: idList}
                    keyExtractor={x=>x.id}
                    renderItem={({item})=>{
                        return(
                            <View style={{width:Dimensions.get('window').width*0.85,alignSelf:'center',padding:5, borderWidth:0.5, borderColor:'white'}}>
                                <TouchableOpacity onPress={()=>{companyUID(item.id)}}>
                                <Text style={{fontFamily:'medium', fontSize:16, color:'white', alignSelf:'center'}}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>

            

            {/* <View style={{width:Dimensions.get('window').width, flexDirection:'row', justifyContent:'space-between',paddingHorizontal:5}}>
                <TextInput
                    value = {password}
                    onChangeText = {(text)=>setPassword(text)}
                    mode = 'outlined'
                    label = 'Password'
                    theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                    style={{ fontFamily: 'medium', fontColor: 'white', height: 60, width: Dimensions.get('screen').width*0.475, backgroundColor:'#606368', alignSelf:'center' }}
                />
                <TextInput
                    value = {reEnterPassword}
                    onChangeText = {(text)=>setPassword2(text)}
                    mode = 'outlined'
                    label = 'Re-enter Password'
                    theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                    style={{ fontFamily: 'medium', fontColor: 'white', height: 60, width: Dimensions.get('screen').width*0.475, backgroundColor:'#606368', alignSelf:'center' }}
                />
            </View> */}


            <View style={{width:Dimensions.get('window').width, alignItems:'center'}}>
                
                <TouchableOpacity style={{width:Dimensions.get('window').width*0.8, margin:10, borderRadius:8}} onPress={signUpHandler}>
                <View style={{backgroundColor:'#ea80fc', width:'100%', padding:10, borderRadius:8}}>
                    <Text style={{fontFamily:'book', fontSize:20, color:'white', alignSelf:'center'}}>Register</Text>
                </View>
                </TouchableOpacity>

            </View>


        </View>               
        </View>
        </ScrollView>
        </SafeAreaView>
    );
};

const Style = StyleSheet.create({
    inputStyle:{
        color:'gray'
    },
    iconStyle:{
        color:'#47b880'
    }
})


SignupScreen.navigationOptions=(navData)=>{
    return{
        header:()=>{
            return false
        }
    }
}

export default SignupScreen;
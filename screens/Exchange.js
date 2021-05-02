import * as React from 'react'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView,StyleSheet } from 'react-native'

export default class Exchange extends React.Component {

    constructor() {
        super();
        this.state = {
            Item_Name: '',
            Item_Desc: ''
        }
    }
    render() {
        return (
            <KeyboardAvoidingView>
                <View style={{ alignItems: 'center',marginTop:100 }}>
                    <View>
                        <TextInput
                            placeholder="Item Name"
                            style={ {
                                width: '75%',
                                height: 40,
                                borderWidth: 2,
                                margin: 10,
                                paddingLeft: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderColor: 'red',
                                borderRadius: 30,
                                alignSelf:'center',
                               marginTop:100
                            }}
                            onChangeText={(text) => {
                                this.setState({
                                    Item_Name: text
                                })
                            }}
                            value={this.state.Item_Name}
                            style={styles.loginBox}
                        />
                    </View>
                    <View>
                        <TextInput
                            placeholder="Item Description"
                            multiline numberOfLines={10}
                        style={[styles.loginBox,{marginTop:10}]}
                            onChangeText={(text) => {
                                this.setState({
                                    Item_Name: text
                                })
                            }}
                            value={this.state.Item_Desc}
                        />
                    </View>
                    <View>
                        <TouchableOpacity style={{ backgroundColor: 'red', width: 150, borderRadius: 20, height: 30 }}>
                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Add Item</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles=StyleSheet.create({
    loginBox: {
        width: '100',
        height: 40,
        borderWidth: 2,
        margin: 10,
        paddingLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderRadius: 30,
        alignSelf:'center',
       
    },
})
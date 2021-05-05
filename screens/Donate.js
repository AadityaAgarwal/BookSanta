import * as React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import db from '../config'
import {ListItem} from 'react-native-elements'

export default class Donate extends React.Component {

    constructor() {
        super();
        this.state = {
            requestedBook: [],
        }
    }
    getRequestedBookList = () => {
        this.requestRef = db.collection('Requested_Books').onSnapshot((snapShot) => {
            var requestedBookList = snapShot.docs.map(document => document.data())
            this.setState({
                requestedBook: requestedBookList
            })
        })
    }
    componentDidMount() {
        this.getRequestedBookList()
    }

    componentWillUnmount() { }
    
    // keyExtractor=(item,index)=>{
    //     index.toString();
    // }
    renderItem=(item,i)=>{
        return(
            <ListItem 
            key={i}
            title={item.Book_Name}
            subTitle={item.Book_Reason}
            rightElement={
                <TouchableOpacity>
                    <Text>View</Text>
                </TouchableOpacity>
            }
            />
        )
    }
    render() {
        return (
            <View>
            <FlatList  keyExtractor={(item,index)=>{
                    index.toString();
                }}
                data={this.state.requestedBook} renderItem={this.renderItem} />
                </View>
        )
    }
   
}
import * as React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import db from '../config'
export default class Donate extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         requestedBook: [],
    //     }
    // }
    // getRequestedBookList = () => {
    //     this.requestRef = db.collection('Requested_Books').onSnapShot((snapShot) => {
    //         var requestedBookList = snapShot.docs.map(document => document.data())
    //         this.setState({
    //             requestedBook: requestedBookList
    //         })
    //     })
    // }
    // componentDidMount() {
    //     this.getRequestedBookList()
    // }

    // componentWillUnmount() { }
    // keyExtractor=(item,index)=>{
    //     index.toString();
    // }
    // renderItem=(item,i)=>{
    //     return(
    //         <listItem 
    //         key={i}
    //         title={item.Book_Name}
    //         subTitle={item.Book_Reason}
    //         rightElement={
    //             <TouchableOpacity>
    //                 <Text>View</Text>
    //             </TouchableOpacity>
    //         }
    //         />
    //     )
    // }
    // render() {
    //     return (
    //         <FlatList keyExtractor={this.keyExtractor}
    //             data={this.state.requestedBook} renderItem={this.renderItem} />
    //     )
    // }
    render(){
        return(
            <view><Tex>Donate!</Tex></view>
        )
    }
}
import React from 'react'
import { View, Text, FlatList } from 'react-native'
import {ListItem} from 'react-native-elements'


const Menu = (props) => {
    const renderMenuItem=({item, index})=>{
        return(
            <ListItem
            key={index}
            title={item.name}
            subtitle={item.description}
            hideChevron={true}
            leftAvatar={{source: require('./images/uthappizza.png')}}
            onPress={()=>props.onPress(item.id)}
            />
        )
    }
    return (
        <FlatList
        data={props.dishes}
        renderItem={renderMenuItem}
        keyExtractor={item=> item.id.toString()}
        />
    )
}

export default Menu




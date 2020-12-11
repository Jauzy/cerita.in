import React from 'react'
import { Icon, Divider, Layout, Text, Avatar, Button } from '@ui-kitten/components';
import { Image, View, ScrollView } from 'react-native'
import { StyleSheet } from 'react-native';

import Navbar from '../components/Navbar'

const CustomButton = ({ icon }) => {
    const [clicked, setClick] = React.useState(false)

    const renderItemIcon = (props) => (
        <Icon {...props} name={clicked ? icon : icon + '-outline'} fill={!clicked ? '#8F9BB3' : '#F00564'}
            style={styles.icon} />
    );

    return (
        <Button appearance='ghost' status='basic'
            onPress={() => setClick(!clicked)} accessoryLeft={renderItemIcon} />
    )
}

const Card = ({ source, title, subtitle, avatar }) => {
    return (
        <View style={{ maxHeight: 'auto', }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                <Avatar source={avatar} style={{ marginRight: 10 }} />
                <View>
                    <Text category='h6' style={{ fontWeight: 'bold' }}>{title}</Text>
                    <Text category='s1'>{subtitle}</Text>
                </View>
            </View>
            <Divider />
            <Image source={source}
                style={{
                    width: '95%', height: 200, resizeMode: 'cover',
                    margin: 10, borderRadius: 10,
                    flex: 0, alignItems: 'center'
                }} />
            <Divider />
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                {['heart', 'message-square', 'paper-plane', 'bookmark'].map((item, idx) => (
                    <CustomButton icon={item} key={item + source} />
                ))}
            </View>
            <Divider />
        </View>
    )
}

const Feed = props => {

    const onMenu = () => {
        props.navigation.navigate('Menu')
    }

    const onChat = () => {
        props.navigation.navigate('Chat')
    }

    return (
        <Layout style={{ flex: 1 }}>
            <ScrollView>
                <Layout style={{ paddingTop: '10%', backgroundColor: 'white' }}>
                    <Navbar onMenu={onMenu} onChat={onChat} />
                </Layout>
                <Card source={require('../modules/images/feed2.png')} title='Joji' subtitle='1 jam yang lalu'
                    avatar={require('../modules/images/joji.jpg')} />
                <Card source={require('../modules/images/feed3.jpg')} title='Mutia Putri' subtitle='2 jam yang lalu'
                    avatar={require('../modules/images/img2.png')} />
                <Card source={require('../modules/images/feed1.png')} title='Satrio Kurniawan' subtitle='2 jam yang lalu'
                    avatar={require('../modules/images/img2.png')} />
                <Card source={require('../modules/images/feed4.jpg')} title='Akbar' subtitle='3 jam yang lalu'
                    avatar={require('../modules/images/img2.png')} />
            </ScrollView>
        </Layout>
    )
}

export default Feed

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
    },
});
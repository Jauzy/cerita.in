import React from 'react'
import { Layout, Text, Button, Avatar } from '@ui-kitten/components';
import { ImageBackground, Image } from 'react-native'

// const bgImg = require('../modules/images/img1.jpg')

const Home = props => {
    const { navigation } = props

    const onPressLogin = () => {
        navigation.navigate('Login')
    }

    const onPressRegister = () => {
        navigation.navigate('Register')
    }

    return (
        <ImageBackground source={require('../modules/images/bg.jpg')} resizeMode='cover' style={{ width: '100%', height: '100%' }}>
            <Layout style={styles.root}>
                <Layout style={styles.text}>
                    <Image source={require('../modules/images/logo1.png')} style={{width:300, resizeMode:'contain'}} />
                </Layout>
                <Layout style={styles.btngrp}>
                    <Layout style={{
                        backgroundColor: 'transparent', marginLeft: '5%', display: 'flex',
                        flexDirection: 'row', alignItems: 'center'
                    }}
                    >
                        <Avatar source={require('../modules/images/img2.png')} />
                        <Layout style={{ backgroundColor: 'transparent', marginLeft: 10 }}>
                            <Text category='h6' style={{ color: 'white' }} onPress={() => props.navigation.navigate('Error')}>
                                WeebDeveloper
                            </Text>
                            <Text category='c1' style={{ color: 'white' }} onPress={() => props.navigation.navigate('Error')}>
                                @al.zaujy
                            </Text>
                        </Layout>
                    </Layout>
                    <Layout style={{
                        display: 'flex', marginTop: 30, flexDirection: 'row', backgroundColor: 'transparent',
                        justifyContent: 'center'
                    }}>
                        <Button status='basic' style={{ marginRight: '5%', width: '45%' }}
                            onPress={onPressLogin}>
                            Login
                        </Button>
                        <Button status='primary' style={{ width: '45%' }} onPress={onPressRegister}>
                            Register
                        </Button>
                    </Layout>
                </Layout>
            </Layout>
        </ImageBackground>
    )
}

export default Home

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
        width: '100%',
        backgroundColor: 'transparent'
    },
    text: {
        marginTop: 'auto',
        backgroundColor: 'transparent',
    },
    btngrp: {
        marginTop: 'auto', marginBottom: '10%', backgroundColor: 'transparent',
    }
}
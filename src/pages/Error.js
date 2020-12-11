import React from 'react'
import { Layout, Button, Icon, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ImageBackground, Image } from 'react-native'

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' fill='white' />
);


const Error = props => {

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => props.navigation.navigate('Home')} />
    );

    return (
        <ImageBackground source={require('../modules/images/bg.jpg')} style={{ width: '100%', height: '100%' }}>
            <TopNavigation
                accessoryLeft={BackAction}
                title={evaProps => <Text {...evaProps} style={{ color: 'white' }}>Back</Text>}
                style={{ color: 'white', backgroundColor: 'transparent', marginTop: '10%' }}
            />
            <Layout style={{
                backgroundColor: 'transparent', display: 'flex',
                alignItems: 'center', height: '100%'
            }}>
                <Image source={require('../modules/images/error.png')} style={{ width: 200, height: 300 }} resizeMode='contain' />
                <Layout style={{ width: '70%', backgroundColor: 'transparent' }}>
                    <Text category='h5' style={{ color: 'white', textAlign: 'center' }}>
                        Maaf Ya,
                    </Text>
                    <Text category='h6' style={{ color: 'white', textAlign: "center" }}>
                        Ada Sedikit Kesalahan Disini
                    </Text>
                    <Layout style={{ backgroundColor: 'rgba(70,70,100,.5)', marginBottom: 'auto', borderRadius: 5, marginTop: 10, padding: 10 }}>
                        <Text category='s1' style={{ color: 'white', textAlign: "center" }}>
                            Tenangin Diri Kamu Dulu Ya,
                        </Text>
                        <Text category='s1' style={{ color: 'white', textAlign: "center" }}>
                            Coklat Panas Dapat Membantu
                        </Text>
                        <Text category='s1' style={{ color: 'white', textAlign: "center" }}>
                            Meredakan Stress Kamu Loh.
                        </Text>
                    </Layout>
                    <Layout style={{
                        display: 'flex', marginTop: 30, flexDirection: 'row', backgroundColor: 'transparent',
                        justifyContent: 'center'
                    }}>
                        <Button status='basic' style={{ marginRight: '5%', width: '45%' }}
                            onPress={() => props.navigation.navigate('Home')}>
                            Kembali
                        </Button>
                    </Layout>
                </Layout>
            </Layout>
        </ImageBackground>
    )
}

export default Error
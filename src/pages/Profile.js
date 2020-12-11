import React from 'react'
import { Icon, Avatar, Layout, Text, TopNavigation, TopNavigationAction, Input, Datepicker, Button } from '@ui-kitten/components';
import { ScrollView, ImageBackground } from 'react-native'

import { useRecoilState } from 'recoil'
import { user_data } from '../modules/atoms/user'

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

const CalendarIcon = (props) => (
    <Icon {...props} name='calendar' />
);


const Profile = props => {
    const [user, setUser] = useRecoilState(user_data)
    const [state, setState] = React.useState({
        date: '', email: '', no_telp: '', gender: '', job: '', address: ''
    })

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => props.navigation.navigate('Menu')} />
    );

    const renderItemIcon = (props) => (
        <Icon {...props} name={'home'} />
    );

    return (
        <ScrollView style={{ height: '100%' }}>
            <ScrollView style={{}}>
                <ImageBackground source={require('../modules/images/bg.jpg')} style={{ width: '100%', height: '100%' }}>
                    <Layout style={{ backgroundColor: 'trasparent' }}>
                        <TopNavigation
                            accessoryLeft={BackAction}
                            title={evaProps => <Text {...evaProps}>Back</Text>}
                            style={{ color: 'white', backgroundColor: 'transparent', marginTop: '10%' }}
                        />
                    </Layout>
                    <Layout style={{ backgroundColor: "transparent", height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Avatar source={require('../modules/images/joji.jpg')} style={{ width: 120, height: 120 }} />
                        <Text style={{ marginTop: 10, fontWeight: 'bold', color: 'white' }} category='h6'>
                            {user.name}
                        </Text>
                    </Layout>
                </ImageBackground>
            </ScrollView>
            <Layout style={{
                padding: 10, flex: 1, alignItems: 'center', justifyContent: 'flex-start',
                height: '100%'
            }}>
                <Layout style={{ width: '70%', backgroundColor: 'transparent' }}>
                    <Datepicker
                        placeholder='Tanggal Lahir'
                        date={state.date}
                        style={{ width: '100%' }}
                        size='small'
                        style={{ marginBottom: 5, marginTop: 20 }}
                        onSelect={nextDate => setState({ ...state, date: nextDate })}
                        accessoryRight={CalendarIcon}
                    />
                    <Input
                        placeholder='No Telp'
                        value={state.no_telp}
                        style={{ marginBottom: 5 }}
                        size='small'
                        onChangeText={value => onChange('no_telp', value)}
                    />
                    <Input
                        placeholder='email@gmail.com'
                        value={user.email}
                        size='small'
                        style={{ marginBottom: 5, }}
                        onChangeText={value => onChange('email', value)}
                    />
                    <Input
                        placeholder='Jenis Kelamin'
                        value={state.gender}
                        style={{ marginBottom: 5, }}
                        size='small'
                        onChangeText={value => onChange('gender', value)}
                    />
                    <Input
                        placeholder='Pekerjaan'
                        value={state.job}
                        style={{ marginBottom: 5, }}
                        size='small'
                        onChangeText={value => onChange('job', value)}
                    />
                    <Input
                        placeholder='Alamat'
                        value={state.address}
                        style={{ marginBottom: 5 }}
                        size='small'
                        onChangeText={value => onChange('address', value)}
                    />
                    <Button appearance='filled' accessoryLeft={renderItemIcon} size='giant' status='control'
                        onPress={() => props.navigation.navigate('Feed')} style={{marginTop:30}}>
                    </Button>
                </Layout>
            </Layout>
        </ScrollView>
    )
}

export default Profile
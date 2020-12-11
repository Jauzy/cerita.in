import React from 'react'
import { Layout, Button, Avatar, Input, Datepicker, Icon, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ImageBackground, TouchableWithoutFeedback } from 'react-native'

import { useRecoilState } from 'recoil'
import { users } from '../modules/atoms/user'

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

const CalendarIcon = (props) => (
    <Icon {...props} name='calendar' />
);

const Register = props => {

    const [user, setUser] = useRecoilState(users)

    const [state, setState] = React.useState({
        email: '', name: '', password: '', date: ''
    })

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => props.navigation.navigate('Home')} />
    );

    const onChange = (key, value) => {
        setState({ ...state, [key]: value })
    }

    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const onRegister = () => {
        setUser([...user, { email: state.email, name: state.name, password: state.password, date: state.date }])
        props.navigation.navigate('Login')
    }

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    return (
        <ImageBackground source={require('../modules/images/bg.jpg')} style={{ width: '100%', height: '100%' }}>
            <TopNavigation
                accessoryLeft={BackAction}
                title={evaProps => <Text {...evaProps} >Back</Text>}
                style={{ color: 'white', backgroundColor: 'transparent', marginTop: '10%' }}
            />
            <Layout style={{
                backgroundColor: 'transparent', display: 'flex',
                alignItems: 'center', justifyContent: 'center', height: '100%'
            }}>
                <Avatar source={require('../modules/images/logo3.png')} style={{ width: 150, height: 150 }} />
                <Layout style={{ width: '70%', backgroundColor: 'transparent' }}>
                    <Input
                        placeholder='Your Name'
                        value={state.name}
                        style={{ marginBottom: 5, marginTop: 20 }}
                        status='control'
                        size='small'
                        onChangeText={value => onChange('name', value)}
                    />
                    <Input
                        placeholder='email@gmail.com'
                        value={state.email}
                        size='small'
                        style={{ marginBottom: 5, }}
                        status='control'
                        onChangeText={value => onChange('email', value)}
                    />
                    <Input
                        placeholder='Password'
                        value={state.password}
                        status='control'
                        size='small'
                        style={{ marginBottom: 5, }}
                        secureTextEntry={secureTextEntry}
                        accessoryRight={renderIcon}
                        onChangeText={value => onChange('password', value)}
                    />
                    <Datepicker
                        placeholder='Tanggal Lahir'
                        date={state.date}
                        style={{ width: '100%' }}
                        status='control'
                        size='small'
                        onSelect={nextDate => setState({ ...state, date: nextDate })}
                        accessoryRight={CalendarIcon}
                    />
                </Layout>
                <Button status='primary' size='small' style={{ marginTop: 10, width: 150 }} onPress={onRegister}>
                    Daftar
                </Button>
                <Text category='h6' style={{ color: 'white', fontWeight: 'bold', marginTop: 20, marginBottom: 20 }}>
                    Atau Connect Dengan
                </Text>
                <Layout style={{ backgroundColor: '#273B7A', borderRadius: 50, padding: 10 }}>
                    <Avatar source={require('../modules/images/google.png')} style={{ width: 80, height: 80 }} />
                </Layout>
            </Layout>
        </ImageBackground>
    )
}

export default Register
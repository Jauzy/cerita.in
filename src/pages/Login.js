import React from 'react'
import { Layout, Button, Avatar, Input, CheckBox, Icon, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ImageBackground, TouchableWithoutFeedback } from 'react-native'

import { useRecoilState } from 'recoil'
import { user_data, users } from '../modules/atoms/user'

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);


const Login = props => {

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => props.navigation.navigate('Home')} />
    );

    const [state, setState] = React.useState({
        email: '', name: '', password: '', date: ''
    })

    const onChange = (key, value) => {
        setState({ ...state, [key]: value })
    }

    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const [activeChecked, setActiveChecked] = React.useState(false);

    const [user, setUser] = useRecoilState(user_data)
    const [users_data, setUsers] = useRecoilState(users)

    const onLogin = () => {
        const index = users_data.findIndex(user => user.email == state.email)
        if (index !== -1) {
            setUser(users_data[index])
        } else {
            setUser({ email: state.email, password: state.password })
        }
        props.navigation.navigate('Feed')
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
                title={evaProps => <Text {...evaProps}>Back</Text>}
                style={{ color: 'white', backgroundColor: 'transparent', marginTop: '10%' }}
            />
            <Layout style={{
                backgroundColor: 'transparent', display: 'flex',
                alignItems: 'center', justifyContent: 'center', height: '100%'
            }}>
                <Avatar source={require('../modules/images/logo3.png')} style={{ width: 150, height: 150, marginBottom: 20 }} />
                <Layout style={{ width: '70%', backgroundColor: 'transparent' }}>
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
                    <CheckBox
                        checked={activeChecked}

                        onChange={nextChecked => setActiveChecked(nextChecked)}>
                        <Text style={{ color: 'white' }}>
                            Remember Me
                        </Text>
                    </CheckBox>
                </Layout>
                <Button status='primary' size='small' style={{ marginTop: 10, width: 150 }} onPress={onLogin}>
                    Login
                </Button>
                <Text category='h6' style={{ color: 'white', fontWeight: 'bold', marginTop: 20, marginBottom: 20 }}>
                    Atau Login Dengan
                </Text>
                <Layout style={{ backgroundColor: '#273B7A', borderRadius: 50, padding: 10 }}>
                    <Avatar source={require('../modules/images/google.png')} style={{ width: 80, height: 80 }} />
                </Layout>
            </Layout>
        </ImageBackground>
    )
}

export default Login
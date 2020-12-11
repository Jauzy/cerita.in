import React from 'react'
import { Icon, Divider, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { Button, List } from '@ui-kitten/components';

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

const Menu = props => {

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => props.navigation.navigate('Feed')} />
    );

    const renderItem = ({ item, index }) => {
        const renderItemIcon = (props) => (
            <Icon {...props} name={item.icon} />
        );

        return (
            <Button appearance='filled' accessoryLeft={renderItemIcon} size='giant' status='control'
                style={{ justifyContent: 'flex-start' }} onPress={() => props.navigation.navigate(item.url)}>
                {item.title}
            </Button>
        )
    }

    return (
        <Layout style={{ flex: 1 }}>
            <Layout style={{ backgroundColor: 'white' }}>
                <TopNavigation
                    accessoryLeft={BackAction}
                    title={evaProps => <Text {...evaProps}>Back</Text>}
                    style={{ color: 'white', backgroundColor: 'transparent', marginTop: '10%' }}
                />
            </Layout>
            <Divider />
            <Layout>
                <List
                    data={[
                        { title: 'Akun Profil', icon: 'person-outline', url: 'Profile' },
                        { title: 'Jadwal Konsultasi', icon: 'calendar' },
                        { title: 'Bookmark', icon: 'bookmark' },
                        { title: 'Bantuan', icon: 'question-mark-circle' },
                        { title: 'Pengaturan & Privasi', icon: 'settings' },
                        { title: 'Keluar', icon: 'log-out' },
                    ]}
                    renderItem={renderItem}
                />
            </Layout>
        </Layout>
    )
}

export default Menu
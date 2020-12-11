import React from 'react';
import { Icon, Layout, Divider, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const BackIcon = (props) => (
    <Icon {...props} name='menu' />
);

const EditIcon = (props) => (
    <Icon {...props} name='message-circle-outline' />
);

const TopNavigationAccessoriesShowcase = ({onMenu, onChat}) => {

    const renderRightActions = () => (
        <React.Fragment>
            <TopNavigationAction icon={EditIcon} onPress={onChat} />
        </React.Fragment>
    );

    const renderBackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={onMenu} />
    );

    return (
        <Layout style={styles.container} level='1'>
            <TopNavigation
                alignment='center'
                title='Cerita.In'
                subtitle='Mindful Living'
                // style={{backgroundColor:'cyan'}}
                accessoryLeft={renderBackAction}
                accessoryRight={renderRightActions}
            />
            <Divider />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
    },
});

export default TopNavigationAccessoriesShowcase
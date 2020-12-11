import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomBar = props => {
    const { routes, navigation, state } = props
    return (
        <BottomNavigation
            selectedIndex={state.index}
            onSelect={index => navigation.navigate(state.routeNames[index])}>
            {routes?.map(screen => (
                <BottomNavigationTab title={screen.icon ? null : screen.name}
                    icon={screen.icon ? screen.icon : null} key={screen.name} />
            ))}
        </BottomNavigation>
    )
}

const Navs = props => {
    const { routes } = props
    return (
        <Navigator tabBar={props => <BottomBar routes={routes} {...props} />}>
            {routes?.map(screen => (
                <Screen name={screen.name} component={screen.component} key={screen.name} />
            ))}
        </Navigator>
    )
}

export default Navs
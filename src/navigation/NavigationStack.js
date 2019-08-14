import { createStackNavigator, createAppContainer, createDrawerNavigator,createSwitchNavigator } from 'react-navigation';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Deals from '../screens/Deals';
import DealDetails from '../screens/DealDetails';
import CustomDrawer from '../screens/Drawer';


const AuthStack = createStackNavigator(
    {
        Login: {
            screen: Login
        }
    },
    {
        headerMode: 'none'
    }
)

const MainStack = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        Deals: {
            screen: Deals
        },
        DealDetails: {
            screen: DealDetails,
            navigationOptions: {
                drawerLockMode: 'locked-closed'
              }
        }
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
)

const AppStack = createDrawerNavigator(
    {
       Main: MainStack
    },
    {
        contentComponent: CustomDrawer,
        drawerType: 'slide',
        drawerBackgroundColor: '#31002f'
    }
);


const AppNavigator = createSwitchNavigator(
    {
        Auth: AuthStack,
        App: AppStack
    },
    {
        initialRouteName: "Auth"
    }
);

export default createAppContainer(AppNavigator);
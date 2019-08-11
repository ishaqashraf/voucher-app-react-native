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

const AppStack = createDrawerNavigator(
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
        contentComponent: CustomDrawer,
        drawerType: 'slide',
        drawerBackgroundColor: '#31002f',
        initialRouteName: 'Home',
        // headerMode:'none'
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
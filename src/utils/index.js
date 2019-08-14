import { AsyncStorage } from 'react-native';

export const dateSplit = (date) => {
    const newDate = date.split(',')[1]
    return newDate;
}

export const checkuserLogin = () => {
    return AsyncStorage.getItem('User')
        .then(user => {
            if (user) {
                return true;
            } else {
                return false;
            }
        })
}
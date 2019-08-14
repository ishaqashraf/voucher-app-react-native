// import { AccessToken } from 'react-native-fbsdk';

export const dateSplit = (date) => {
    const newDate = date.split(',')[1]
    return newDate;
}

export const checkuserLogin = () => {
    return AccessToken.getCurrentAccessToken()
    .then(token => {
        if(token.accessToken){
            return true;
        }else{
            return false;
        }
        
    })
}
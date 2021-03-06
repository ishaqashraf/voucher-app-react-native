import { AsyncStorage } from 'react-native';
import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from './types';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';


export const loginUser = () => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        LoginManager.logInWithReadPermissions(["public_profile"])
            .then((result) => {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                    loginuserFail(dispatch,'error')
                } else {
                    AccessToken.getCurrentAccessToken()
                    .then((data) => {
                        console.log("data",data)
                            const graphRequest = new GraphRequest('/me', {
                                accessToken: data.accessToken,
                                parameters: {
                                    fields: {
                                        string: 'picture.type(large),name'
                                    },
                                },
                            }, (error, result) => {
                                if (error) {
                                    console.error(error)
                                    loginuserFail(dispatch,error)
                                } else {
                                    const User = { "name":result.name,"profileImage":result.picture.data.url }
                                    AsyncStorage.setItem('User',JSON.stringify(User))
                                    console.log(result)
                                    loginUserSuccess(dispatch,result)
                                }
                            })
                            new GraphRequestManager().addRequest(graphRequest).start()
                        }
                    )
                }
            },
                (error) => {
                    loginuserFail(dispatch,error)
                    console.log("Login fail with error: " + error);
                }
            );
    };
};

const loginUserSuccess = (dispatch, data) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload:data });
}

const loginuserFail = (dispatch, error) => {
    dispatch({ type: LOGIN_USER_FAIL,payload:error });
};




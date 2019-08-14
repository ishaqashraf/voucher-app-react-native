import { AsyncStorage } from 'react-native';
import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from './types';
// import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';


export const loginUser = () => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        LoginManager.logInWithPermissions(["public_profile"])
            .then((result) => {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                } else {
                    AccessToken.getCurrentAccessToken()
                    .then((data) => {
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




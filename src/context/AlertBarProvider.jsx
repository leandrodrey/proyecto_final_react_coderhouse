import {Alert, Slide, Snackbar} from "@mui/material";
import React, {createContext, useReducer, useState} from "react";
import alertBarReducer, {alertBarInitialState} from "../reducers/alertBarReducer";

export const AlertBarContext = createContext('')

const AlertBarProvider = ({children}) => {

    const [state, dispatch] = useReducer(alertBarReducer, alertBarInitialState);

    const handleCloseSnackbar = () => {
        dispatch({
            type: "CLOSE_SNACKBAR"
        });
    };

    return (
        <AlertBarContext.Provider value={{ dispatch }}>
            <Snackbar
                open={state.showBar}
                autoHideDuration={1000}
                onClose={handleCloseSnackbar}
                TransitionComponent={Slide}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={state.severity}>
                    {state.label}
                </Alert>
            </Snackbar>
            {children}
        </AlertBarContext.Provider>
    )
}
export default AlertBarProvider

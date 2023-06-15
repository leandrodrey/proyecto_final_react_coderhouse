
export const alertBarInitialState = {} ;

export const ALERT_ACTION_TYPES = {
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    ERROR: 'ERROR',
    INFO: 'INFO',
    CLOSE_SNACKBAR: 'CLOSE_SNACKBAR'
};

const alertBarReducer = (state, action) => {

    const {type: actionType, payload: actionPayload} = action;

    switch (actionType) {
        case ALERT_ACTION_TYPES.SUCCESS:
            return {
                label: actionPayload.label,
                severity: "success",
                showBar: true,
            };
        case ALERT_ACTION_TYPES.WARNING:
            return {
                label: actionPayload.label,
                severity: "warning",
                showBar: true,
            };
        case ALERT_ACTION_TYPES.ERROR:
            return {
                label: actionPayload.label,
                severity: "error",
                showBar: true,
            };
        case ALERT_ACTION_TYPES.INFO:
            return {
                label: actionPayload.label,
                severity: "info",
                showBar: true,
            };
        case ALERT_ACTION_TYPES.CLOSE_SNACKBAR:
            return {
                ...state,
                showBar: false
            };
        default:
            return state;
    }
}

export default alertBarReducer;

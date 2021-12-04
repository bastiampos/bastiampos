// import axios from 'axios'

const authentication = {
   changeLanguage: (language) => (dispatch, getState) => dispatch({ type: 'CHANGE_LANGUAGE', payload: language }),
}

export default authentication
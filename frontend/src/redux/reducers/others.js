const others = (state = { language: 'ES' }, action) => {
   switch (action.type) {
      case 'CHANGE_LANGUAGE':
         localStorage.setItem('language', action.payload)
         return { ...state, language: action.payload }

      default:
         return state
   }
}

export default others
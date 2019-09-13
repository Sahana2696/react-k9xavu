const globalstate = {
  details: {
    name: "",
    password: ""
  },
  contactdetails: {
    name: "",
    emailid: "",
    contactno: ""
  },
  test:"Hi"
  
}
function reducer(state = globalstate, action) {
  switch (action.type) {
    case "LOGINDETAILS":

      console.log("action", action)
      return {
        ...state,
      details : action.details
      }

    case "CONTACTDETAILS":

    console.log("action",action)
     // return state.contactdetails = action.contactdetails
      
      return{
        ...state,
          contactdetails:action.contactdetails,
          test:"Test"
        
      }
        

    default:
      return state;


  }
}
export default reducer 
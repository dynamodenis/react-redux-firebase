const initialState = {
    projects:[]
}

const projectReducer = (state=initialState, action)=>{
    switch(action.type){
        case "CREATE_PROJECT":
            //console.log('created project', action.project)
            return state

        case "CREATE_PROJECT_ERROR":
            //console.log('created error', action.err)
            return state

        default:
            return state
    }
    return state
}

export default projectReducer
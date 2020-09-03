const createProject = (project) =>{
    return(dispatch,getState,{getFirebase,getFirestore}) => {

        // make async call to database
        const firestore = getFirestore();
        //get the profile and uid from the state
        const profile = getState().firebase.profile
        const uid = getState().firebase.auth.uid

        firestore.collection('project').add({
            ...project,
            authorFirstName:profile.firstName,
            authorLastName:profile.lastName,
            authorId: uid,
            createdAt: new Date()
        }).then(()=>{
            dispatch({
                type:'CREATE_PROJECT',
                project:project
            })
        }).catch((err)=>{
            dispatch({
                type:"CREATE_PROJECT_ERROR",
                err
            })
        })  
    }
}

export default createProject
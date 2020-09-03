
const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const createNotification = (notification =>{
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added', doc))
})

exports.projectCreated = functions.firestore
    .document('project/{projectId}')
    .onCreate(doc => {
        const project = doc.data()
        const notification ={
            content: "Added a new project",
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

    return createNotification(notification)
    })


exports.userJoined = functions.auth
    .user()
    .onCreate(user => {
        return admin.firestore().collection('users')
            .doc(user.uid)
            //The get() is a used to get the created user as a request
            .get()
            .then(doc => {

                const newUser = doc.data()
                const notification = {
                    content: 'Joined The Company',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }

            return createNotification(notification)
            })
    })
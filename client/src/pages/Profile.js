import { Container, Button } from 'react-bootstrap'
import { DELETE_USER } from '../utils/mutations'
import { useMutation } from '@apollo/react-hooks'
import Auth from '../utils/auth'
//import {removeUser} from 

const Profile = () => {
    /*
    const removeUser = useMutation(DELETE_USER)
    const handleDeleteUser = async (userId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        
        if (!token) {
            return false;
        }
    
        try {
            const {data} = await removeUser({
                variables: { userId }
            })
            console.log(data)
            removeUserId(userId)
        }
        catch (err) {
            console.error(err)
        }
    } */



    return (
        <Container>
        <h1>Your Profile</h1>
        <Button /*className='btn-block btn-danger' onClick={() => handleDeleteUser(user.userId)}*/ >
         Delete Account 
         </Button>
        </Container>
    )
}
    
export default Profile;
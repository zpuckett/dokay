import { Container, Jumbotron, Card, CardColumns, Button } from 'react-bootstrap'
import { DELETE_USER } from '../utils/mutations'
import Auth from '../utils/auth'
import { GET_ME } from '../utils/queries'
import { useMutation, useQuery } from '@apollo/react-hooks'
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
    const { loading, data} = useQuery(GET_ME)

    const userData = data?.me || {};

    const songList = [
        {
            title: "Blackanese",
            artist: "Kazu",
            src: "../assets/Blackanese.mp3"
        },
        {
            title: "That's My DJ",
            artist: "Girl Talk",
            src: "../assets/ThatsMyDJ"
        }
    ];

    const song = songList[0];
    
    if (loading) {
        return <h2>LOADING...</h2>;
      }


    return (
        <>
        <Jumbotron fluid className='text-light bg-dark'>
          <Container>
            <h1>Your Profile</h1>
          </Container>
          </Jumbotron>
          <Container>
          <h2>
            {songList.length
              ? `Viewing ${songList.length} saved ${songList.length === 1 ? 'song' : 'songs'}`
              : 'You have no active songs!'} </h2>
              <Container style={{width: "100%", display: 'flex', flexDirection: 'row' }}>
                  
                  <Card border="primary" style={{width: "25%"}}>
                  <center><Card.Title>{songList[0].title}</Card.Title></center>
                  <center><Card.Subtitle>by</Card.Subtitle></center>
                  <center><Card.Text>{songList[0].artist}</Card.Text></center>
                  </Card>
  
                  <Card style={{width: "25%"}}>
                  <center><Card.Title>{songList[1].title}</Card.Title></center>
                  <center><Card.Subtitle className="text-muted">by</Card.Subtitle></center>
                  <center><Card.Text>{songList[1].artist}</Card.Text></center>
                  </Card>
              </Container>
          <Button onClick={() => console.log("test")}/*className='btn-block btn-danger' onClick={() => handleDeleteUser(user.userId)}*/ >
           Delete Account 
           </Button>
              </Container>
      </>
    )
}
    
export default Profile;
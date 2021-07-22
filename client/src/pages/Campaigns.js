import { Container, Jumbotron, Card, CardColumns } from 'react-bootstrap'

import { GET_ME } from '../utils/queries'
import { useMutation, useQuery } from '@apollo/react-hooks'


const Campaign = () => {

    const { loading, data} = useQuery(GET_ME)

    const userData = data?.me || {};

    const songList = [
        {
            title: "Blackanese",
            artist: "Kazu",
            src: "../../public/Blackanese.mp3"
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
          <h1>Viewing Your Campaigns!</h1>
        </Container>
        </Jumbotron>
        <Container>
        <h2>
          {songList.length
            ? `Viewing ${songList.length} saved ${songList.length === 1 ? 'song' : 'songs'}`
            : 'You have no active songs!'}
            <h3>{song.title}</h3>
            <h4>{song.artist}</h4>
        </h2>
        <CardColumns>
          {userData.savedSongs?.map((song) => {
            return (
              <Card key={song.songId} border='dark'>
                <Card.Body>
                  <Card.Title>{song.title}</Card.Title>
                  <p className='small'>Song: {song.title}</p>
                  <Card.Text>{song.artist}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
        </Container>
    </>
    )    
}
    
export default Campaign;
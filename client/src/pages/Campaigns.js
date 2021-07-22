import { Container, Jumbotron, Card, CardColumns, Button } from 'react-bootstrap'
import React from 'react'
import { GET_ME } from '../utils/queries'
import { useMutation, useQuery } from '@apollo/react-hooks'
import vik from '../assets/vik.jpg';
import vik2 from '../assets/vik2.jpg'

const Campaign = () => {

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
          <h1>Viewing Your Campaigns!</h1>
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
                <center><Card.Link href="/profile">See Results</Card.Link></center>
                </Card>

                <Card style={{width: "25%"}}>
                <center><Card.Title>{songList[1].title}</Card.Title></center>
                <center><Card.Subtitle className="text-muted">by</Card.Subtitle></center>
                <center><Card.Text>{songList[1].artist}</Card.Text></center>
                <center><Card.Link variant="primary" href="/profile">See Results</Card.Link></center>
                </Card>
            </Container>
            <Container>
                <h2>Your Saved Artwork</h2>
            <CardColumns>                
            <Card.Body><img className="img" height="10%" width="10%"  src={vik}  /></Card.Body>
            <Card.Body><img className="img" height="10%" width="10%"  src={vik2}  /></Card.Body>
            </CardColumns>
            </Container>
        
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
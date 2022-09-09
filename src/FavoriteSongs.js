import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class FavoriteSongs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            art: ''
        }
    }

getAlbumArt = async () => {
    let art = [];
    console.log(this.props.favSongs)
    let response = this.props.favSongs.map(song => `http://api.napster.com/v2.2/albums/${song.albumId}/images?apikey=MDE0MzEwNmUtZDA1Zi00YjRiLWEyMTQtMjhhMjFjYTFmMmYz`)
    console.log(response)
    let responseArt = await axios.all(response.map((endpoint) => axios.get(endpoint)))
    console.log(responseArt)
    responseArt.forEach(data => art.push(data.data.images[0].url))
    console.log(art)
    this.setState ({
        art: art
    })
}

componentDidMount(){
    this.getAlbumArt();
}

    favSongsListGenerator = () => {
        let favSongsList = this.props.favSongs.map((song, index) => {
            return <>
            <img src={this.state.art[index]} alt='Album cover'/>
            <p>{song.artist}</p>
            <p>{song.albumName}</p>
            <div>{song.title}</div>
            <Button onClick= {() => {this.props.deleteSong(song._id)}}>
            <FontAwesomeIcon icon={faTrash} />
            </Button>
            </>

        })
        return favSongsList
    }

    render(){
        return <>
        {this.props.favSongs
        && 
        this.favSongsListGenerator()}
        </>
    }
}

export default FavoriteSongs;
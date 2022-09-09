import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button'

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
    let response = this.props.favSongs.map(song => `${process.env.REACT_APP_SERVER}/albums&id=${song.albumId}`)
    console.log(response)
    let responseArt = await axios.all(response.map((URL) => axios.get(URL)));
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
            <Button onClick= {() => {this.props.deleteSong(song._id)}}>X</Button>
            <Button onClick={this.getAlbumArt}></Button>
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
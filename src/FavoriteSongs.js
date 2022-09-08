import React from 'react';
import Button from 'react-bootstrap/Button'

class FavoriteSongs extends React.Component{
    favSongsListGenerator = () => {
        let favSongsList = this.props.favSongs.map(song => {
            console.log(song)
            return <><p>{song.artist}</p>
            <div>{song.title}</div>
            <Button onClick= {() => {this.props.deleteSong(song._id)}}>X</Button>
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
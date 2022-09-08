# Software Requirements  

## Vision  

Our vision for this product is a game that plays music for the User, and the User guesses the artist. Users want a gamified way to listen to music. This product allows users a fun way to kill time while introducing them to music they may have never heard of before.  

## Scope  

Our application will include:  

* The application will play music for the User to guess.  
* That music will be pulled from an API constantly updating with modern music.  
* Users will be able to favorite songs.  
* Users can view additional information about the album and artist the song came from.  
* Users will be able to compete with one another to see how many songs they can guess in a set amount of time.  

Our application will not be:  

* A way to listen to full songs or create playlists.  
* A commercial app with advertisements.  

## Minimum Viable Product (MVP)  

Our MVP will be an application that allows our users to listen to clips of popular music and guess what song it is.  
Stretch goals will be scoring, favorites, and additional information.  

## Functional requirements  

A user will be able to hear music.  
A user will be able to keep the score.  

## Data Flow  

A user opens the application and hits play. The client application will request data from the server to check our database. If our database does not have songs refreshed at least 24 hours beforehand, the application requests information from the API, which will send the music back to the client.  

## Non-Functional requirements  

Security: Our application will authorize the web application to pull information from the server. Our application can potentially make many requests to the API in a short period. Protecting those requests is very important.  

Scalability: Our application will try to store the necessary number of songs in the database to allow any number of users to play without locking our API key.  


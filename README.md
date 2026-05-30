# SpellInfo

A small site to display info about a gift that someone has recieved

## Features
- See the ingredients/items used 
- Can see more info about each item

## Tech Stack
- React
- JavaScript (ES6+)
- CSS 

## Preview
![Spell App Screenshots](./Screenshot 2026-05-30 013644.png) (./Screenshot 2026-05-30 013707.png)

## How to Run Locally
1. Clone the repo
2. Install dependencies:
   npm install
3. Start the app:
   npm start
4. Open http://localhost:3000

## Environment Setup 
You’ll need a Spotify Developer account and API credentials.

Create a `.env` file and add:

REACT_APP_CLIENT_ID=your_client_id
REACT_APP_REDIRECT_URI=http://localhost:3000/

## Challenges
- Implementing Spotify OAuth authentication flow
- Managing asynchronous API requests
- Handling state between multiple React components

## Notes
- Requires Spotify authentication
- Built as part of a Codecademy project

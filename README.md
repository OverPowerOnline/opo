# OverPower Online Card Game
A digital version of the popular late-90s Marvel Trading Card Game.  
  
This repository is meant for the game interface and mechanics.

### Contact Information
- email:         info@overpoweronline.com

### Sister Apps:
- Deck Builder:  https://github.com/OverPowerOnline/opo_deck_builder
- Game Lobby:    https://github.com/OverPowerOnline/opo_game_lobby

# Getting Started
### 1. Install Git
https://git-scm.com/downloads  
NOTE: Please select the option for your Operating System (OS) to 'commit unix-style line endings', which should be Option 1 or 2 (not 3). Option 1 if you have a Windows OS, Option 2 for Linux and MacOS.
### 2. Install NodeJS
https://nodejs.org/en/download/
### 3. Install MongoDB
https://www.mongodb.com/download-center#community
### 4. Clone the Git repository
- Open a command prompt, powershell, or terminal 
- Navigate to where you want the root git repo to be and create a new workspace directory, if you don't already have one
    - `cd C:\Users\Cody`
    - `mkdir dev` 
    - `cd dev`
- Clone the repo into your workspace directory
    - `git clone https://github.com/OverPowerOnline/overpower_online.git`
### 5. Install additional project-specific (local) node packages
- Navigate to the project root directory in your workspace
    - `cd overpower_online`
- `npm install express body-parser ejs mongojs`
### 6. Install additional global node packages
- `npm install -g nodemon`
- NOTE: This package automatically restarts your webserver whenever a file changes (i.e. on save)
### 7. Start your server
- `npm start`

const homePage=document.getElementById("homePage")
const sportName=document.getElementById("sportName")
const topNewsUL = document.getElementById("topNewsUL")
const sportsNewsUL = document.getElementById("sportsNewsUL")
const sportsTeamsUL=document.getElementById("sportsTeamsUL")
const nflNewsButton = document.getElementById("nflNewsButton")
const nbaNewsButton = document.getElementById("nbaNewsButton")
const mlbNewsButton = document.getElementById("mlbNewsButton")
const nhlNewsButton = document.getElementById("nhlNewsButton")
const eplNewsButton = document.getElementById("eplNewsButton")
const wnbaNewsButton = document.getElementById("wnbaNewsButton")
const collegeFootballNewsButton = document.getElementById("collegeFootballNewsButton")
const sportsInfoUL=document.getElementById("scoreInfoUL")
let scoresName=document.getElementById("scoresName")
let teamsName=document.getElementById("teamsName")
let newsName=document.getElementById("newsName")

let newsArticleContainerDiv=document.getElementById("news-container")
let scoreBoardDiv=document.getElementById("scoreboard-container")
let teamsContainerDiv=document.getElementById("teams-container")
let homeContainerDiv=document.getElementById("home-container")

//Testing UI for scoresDisplay
const gamesNFL=document.getElementById("gamesNFL")
const gamesNBA=document.getElementById("gamesNBA")
const gamesMLB=document.getElementById("gamesMLB")
const gamesEPL=document.getElementById("gamesEPL")
const gamesMLS=document.getElementById("gamesMLS")
const gamesNHL=document.getElementById("gamesNHL")
const gamesWNBA=document.getElementById("gamesWNBA")
const gamesBBallMens=document.getElementById("gamesBBallMens")
const gamesBBallWomens=document.getElementById("gamesBBallWomens")
const gamesNCAABaseball=document.getElementById("gamesNCAABaseball")
const gamesNCAAF=document.getElementById("gamesNCAAF")

const teamsNFL=document.getElementById("teamsNFL")
const teamsNBA=document.getElementById("teamsNBA")
const teamsMLB=document.getElementById("teamsMLB")
const teamsEPL=document.getElementById("teamsEPL")
const teamsNHL=document.getElementById("teamsNHL")
const teamsWNBA=document.getElementById("teamsWNBA")
const teamsNCAAF=document.getElementById("teamsNCAAF")

const input = document.getElementById("input")
const playerList = document.getElementById('players-container')
const submit = document.getElementById('submit')

const topHeadlinesURL=`https://newsapi.org/v2/top-headlines?q=sports&language=en&apiKey=e2f529560d044928b22b33b3c8282dfe`

getSportsNews(topHeadlinesURL, function(topNewArticles) {
    clearDisplay()
    homeContainerDiv.style.display="flex"
    displaytopSports(topNewArticles)
})

//Added to all buttons to clearDisplay
function clearDisplay(){
    //Uncomment when News Article is finished
    newsArticleContainerDiv.style.display="none"
    scoreBoardDiv.style.display="none"
    teamsContainerDiv.style.display="none"
    playerList.style.display="none"
    homeContainerDiv.style.display="none"
}

//gets Sports News Articles from ESPN API with LiveServer turned on. Pass url and callback function
function getSportsNews(sportsNewsURL, sportsNewsDownloaded) {
    fetch(sportsNewsURL)
        .then(response => {
            return response.json()
        }).then(sportsNewsArticles => {
            sportsNewsDownloaded(sportsNewsArticles)
        })
}

teamsNFL.addEventListener('click',function(){
    clearDisplay()
    teamsContainerDiv.style.display="flex"
    const teamsNFLURL=`https://site.web.api.espn.com/apis/site/v2/sports/football/nfl/teams?region=us&lang=en&contentorigin=espn&limit=99`
    getSportsNews(teamsNFLURL,function(teamsNFLData){
        displayAllTeams(teamsNFL.getAttribute("value"),teamsNFLData)
    })
})

teamsNBA.addEventListener('click',function(){
    clearDisplay()
    teamsContainerDiv.style.display="flex"
    const teamsNBAURL=`https://site.web.api.espn.com/apis/site/v2/sports/basketball/nba/teams?region=us&lang=en&contentorigin=espn&limit=99`
    getSportsNews(teamsNBAURL,function(teamsNBAData){
        displayAllTeams(teamsNBA.getAttribute("value"),teamsNBAData)
    })
})

teamsMLB.addEventListener('click',function(){
    clearDisplay()
    teamsContainerDiv.style.display="flex"
    const teamsMLBURL=`https://site.web.api.espn.com/apis/site/v2/sports/baseball/mlb/teams?region=us&lang=en&contentorigin=espn&limit=99`
    getSportsNews(teamsMLBURL,function(teamsMLBData){
        displayAllTeams(teamsMLB.getAttribute("value"),teamsMLBData)
    })
})

teamsEPL.addEventListener('click',function(){
    clearDisplay()
    teamsContainerDiv.style.display="flex"
    const teamsEPLURL=`http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams?region=us&lang=en&contentorigin=espn&limit=99`
    getSportsNews(teamsEPLURL,function(teamsEPLData){
        displayAllTeams(teamsEPL.getAttribute("value"),teamsEPLData)
    })
})

teamsNHL.addEventListener('click',function(){
    clearDisplay()
    teamsContainerDiv.style.display="flex"
    const teamsNHLURL=`http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams?region=us&lang=en&contentorigin=espn&limit=99`
    getSportsNews(teamsNHLURL,function(teamsNHLData){
        displayAllTeams(teamsNHL.getAttribute("value"),teamsNHLData)
    })
})

teamsWNBA.addEventListener('click',function(){
    clearDisplay()
    teamsContainerDiv.style.display="flex"
    const teamsWNBAURL=`http://site.api.espn.com/apis/site/v2/sports/basketball/wnba/teams?region=us&lang=en&contentorigin=espn&limit=99`
    getSportsNews(teamsWNBAURL,function(teamsWNBAData){
        displayAllTeams(teamsWNBA.getAttribute("value"),teamsWNBAData)
    })
})

teamsNCAAF.addEventListener('click',function(){
    clearDisplay()
    teamsContainerDiv.style.display="flex"
    const teamsNCAAFURL=`http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams?limit=1000&groups=80`
    getSportsNews(teamsNCAAFURL,function(teamsNCAAFData){
        displayAllTeams(teamsNCAAF.getAttribute("value"),teamsNCAAFData)
    })
})

nflNewsButton.addEventListener('click', function() {
    clearDisplay()
    newsArticleContainerDiv.style.display="flex"
    const nflNewsURL = `http://site.api.espn.com/apis/site/v2/sports/football/nfl/news`
    getSportsNews(nflNewsURL, function(sportsNewArticles) {
        displaySportsArticles(nflNewsButton.getAttribute("value"),sportsNewArticles)
    })
})

nbaNewsButton.addEventListener('click', function() {
    clearDisplay()
    newsArticleContainerDiv.style.display="flex"
    const nbaNewsURL = `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news`
    getSportsNews(nbaNewsURL, function(sportsNewArticles) {
        displaySportsArticles(nbaNewsButton.getAttribute("value"),sportsNewArticles)
    })
})

mlbNewsButton.addEventListener('click', function() {
    clearDisplay()
    newsArticleContainerDiv.style.display="flex"
    const mlbNewsURL = `http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/news`
    getSportsNews(mlbNewsURL, function(sportsNewArticles) {
        displaySportsArticles(mlbNewsButton.getAttribute("value"),sportsNewArticles)
    })
})

eplNewsButton.addEventListener('click', function() {
    clearDisplay()
    newsArticleContainerDiv.style.display="flex"
    const eplNewsURL = `http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news`
    getSportsNews(eplNewsURL, function(sportsNewArticles) {
        displaySportsArticles(eplNewsButton.getAttribute("value"),sportsNewArticles)
    })
})

nhlNewsButton.addEventListener('click', function() {
    clearDisplay()
    newsArticleContainerDiv.style.display="flex"
    const nhlNewsURL = `http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news`
    getSportsNews(nhlNewsURL, function(sportsNewArticles) {
        displaySportsArticles(nhlNewsButton.getAttribute("value"),sportsNewArticles)
    })
})

wnbaNewsButton.addEventListener('click', function() {
    clearDisplay()
    newsArticleContainerDiv.style.display="flex"
    const wnbaNewsURL = `http://site.api.espn.com/apis/site/v2/sports/basketball/wnba/news`
    getSportsNews(wnbaNewsURL, function(sportsNewArticles) {
        displaySportsArticles(wnbaNewsButton.getAttribute("value"),sportsNewArticles)
    })
})

collegeFootballNewsButton.addEventListener('click', function() {
    clearDisplay()
    newsArticleContainerDiv.style.display="flex"
    const collegeFootballNewsURL = `http://site.api.espn.com/apis/site/v2/sports/football/college-football/news`
    getSportsNews(collegeFootballNewsURL, function(sportsNewArticles) {
        displaySportsArticles(collegeFootballNewsButton.getAttribute("value"),sportsNewArticles)
    })
})

homePage.addEventListener('click',function(){
    clearDisplay()
    getSportsNews(topHeadlinesURL, function(topNewArticles) {
        displaySportsArticles(topNewArticles)
    })
})

gamesNFL.addEventListener('click',function(){
    clearDisplay()
    //ScoresURL **Testing Purposes
    scoreBoardDiv.style.display="flex"
    const nflScoresURL=`http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard`
    getSportsNews(nflScoresURL,function(scoreBoardData){
        displaySportsScore(gamesNFL.getAttribute("value"),scoreBoardData)
    })
})

gamesNBA.addEventListener('click',function(){
    clearDisplay()
    scoreBoardDiv.style.display="flex"
    const nbaScoresURL=`http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard`
    getSportsNews(nbaScoresURL,function(scoreBoardData){
        displaySportsScore(gamesNBA.getAttribute("value"),scoreBoardData)
    })
})

gamesMLB.addEventListener('click',function(){
    clearDisplay()
    //ScoresURL **Testing Purposes
    scoreBoardDiv.style.display="flex"
    const mlbScoresURL=`http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard`
    getSportsNews(mlbScoresURL,function(scoreBoardData){
        displaySportsScore(gamesMLB.getAttribute("value"),scoreBoardData)
    })
})

gamesEPL.addEventListener('click',function(){
    clearDisplay()
    //ScoresURL **Testing Purposes
    scoreBoardDiv.style.display="flex"
    const eplScoresURL=`http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard`
    getSportsNews(eplScoresURL,function(scoreBoardData){
        displaySportsScore(gamesEPL.getAttribute("value"),scoreBoardData)
    })
})

gamesMLS.addEventListener('click',function(){
    clearDisplay()
    scoreBoardDiv.style.display="flex"
    const mlsScoresURL=`http://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/scoreboard`
    getSportsNews(mlsScoresURL,function(scoreBoardData){
        displaySportsScore(gameMLS.getAttribute("value"),scoreBoardData)
    })
})

gamesNHL.addEventListener('click',function(){
    clearDisplay()
    //ScoresURL **Testing Purposes
    scoreBoardDiv.style.display="flex"
    const nhlScoresURL=`http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard`
    getSportsNews(nhlScoresURL,function(scoreBoardData){
        displaySportsScore(gamesNHL.getAttribute("value"),scoreBoardData)
    })
})

gamesWNBA.addEventListener('click',function(){
    clearDisplay()
    //ScoresURL **Testing Purposes
    scoreBoardDiv.style.display="flex"
    const wnbaScoresURL=`http://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard`
    getSportsNews(wnbaScoresURL,function(scoreBoardData){
        displaySportsScore(gamesWNBA.getAttribute("value"),scoreBoardData)
    })
})

gamesNCAAF.addEventListener('click',function(){
    clearDisplay()
    //ScoresURL **Testing Purposes
    scoreBoardDiv.style.display="flex"
    const ncaaFScoresURL=`http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard`
    getSportsNews(ncaaFScoresURL,function(scoreBoardData){
        displaySportsScore(gamesNCAAF.getAttribute("value"),scoreBoardData)
    })
})

gamesBBallMens.addEventListener('click',function(){
    clearDisplay()
    //ScoresURL **Testing Purposes
    scoreBoardDiv.style.display="flex"
    const mensBBallScoresURL=`http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard`
    getSportsNews(mensBBallScoresURL,function(scoreBoardData){
        displaySportsScore(gamesBBallMens.getAttribute("value"),scoreBoardData)
    })
})

gamesBBallWomens.addEventListener('click',function(){
    clearDisplay()
    //ScoresURL **Testing Purposes
    scoreBoardDiv.style.display="flex"
    const womensBBallScoresURL=`http://site.api.espn.com/apis/site/v2/sports/basketball/womens-college-basketball/scoreboard`
    getSportsNews(womensBBallScoresURL,function(scoreBoardData){
        displaySportsScore(gamesBBallWomens.getAttribute("value"),scoreBoardData)
    })
})

gamesNCAABaseball.addEventListener('click',function(){
    clearDisplay()
    //ScoresURL **Testing Purposes
    scoreBoardDiv.style.display="flex"
    const ncaaBaseballScoresURL=`https://site.api.espn.com/apis/site/v2/sports/baseball/college-baseball/scoreboard`
    getSportsNews(ncaaBaseballScoresURL,function(scoreBoardData){
        displaySportsScore(gamesNCAABaseball.getAttribute("value"),scoreBoardData)
    })
})

//display function can be called by all sports tab (Examples: NFL,NBA,Soccer)
function displaySportsArticles(sportName,sportsNewArticles) {
    const sportsArticles = sportsNewArticles.articles
    const sportItem = sportsArticles.map(function(sportArticle) {
        const sportsNewsTemplate = `<li>  
        <img src="${sportArticle.images[0].url}"/>
        <label>${sportArticle.description}
        <label>Published At: ${sportArticle.published}
        <a href="${sportArticle.links.web.href}">
        <button type="button" class="btn btn-secondary">Read More</button>
        </a>
        </li>`
        return sportsNewsTemplate
    })
    newsName.innerText=sportName
    sportsNewsUL.innerHTML = sportItem.join("")
}

function displaySportsScore(sportName,sportsScoresData){
    const sportsEvents = sportsScoresData.events
    const eventItem=sportsEvents.map(function(sportsEvent){
        const sportsVenue=sportsEvent.competitions.map(function(sportsComp){
            let sportsTeams=sportsComp.competitors.map(function(sportsOppoent){
                for(let i=0;i<6;i++){
                    return `<li>${sportsOppoent.team.displayName} ${sportsOppoent.records[i].summary} ${sportsOppoent.score}</li>\n`
                }
            })
            sportsTeams=sportsTeams.join("")
            let gameDate= new Date(sportsComp.date)
            let weekday=new Intl.DateTimeFormat('en',{weekday:'short'}).format(gameDate)
            let month=new Intl.DateTimeFormat('en',{month:'2-digit'}).format(gameDate)
            let day=new Intl.DateTimeFormat('en',{day:'2-digit'}).format(gameDate)
            gameDate=`${weekday} ${month}/${day}`
            return `<div>
                ${gameDate} - ${sportsComp.status.type.description} @ ${sportsComp.venue.fullName}
                <ul>${sportsTeams}</ul>
            </div>`
            })
        const sportsEventTemplate=`<li>
        <label>${sportsVenue}</label>
        </li>`
        return sportsEventTemplate
    })
    scoresName.innerText=sportName
    sportsInfoUL.innerHTML=eventItem.join("")
}

function displayAllTeams(sportName,allTeamsData){
    const teamsArr=allTeamsData.sports[0].leagues[0].teams
    const teamItems=teamsArr.map((team)=>{
        return `<li><div><img src="${team.team.logos[0].href}"/></div> <div><h3>${team.team.displayName}</h3></div>
        <a href="${team.team.links[0].href}">
        <button type="button" class="btn btn-secondary">Team Info</button>
        </a></li>`
    })
    teamsName.innerText=sportName
    sportsTeamsUL.innerHTML=teamItems.join("")
}

submit.addEventListener('click', function() {
    clearDisplay()
    playerList.style.display="flex"
    fetch(`https://nba-player-individual-stats.p.rapidapi.com/players/lastname?lastname=${input.value}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a1511fc773msh67cb42be7a4986ap1d8a20jsndf7d3c1430f2",
            "x-rapidapi-host": "nba-player-individual-stats.p.rapidapi.com"
        }
    })

    .then(response => {
        return response.json()
    })
    .then((response) => {
        const players = response
        const playerItems = players.map((player) => {
            return `<div class="player">
             <div class="playerheading>
                 <div class="playerimg"><img class="img" src="${player.headShotUrl}"/></div>
                 <div class"playername"><h2>${player.firstName} ${player.lastName}</h2></div>
                 <div class="age"><p>DOB:${player.dateOfBirth}<p></div>
            </div>
           <div class="playerfooter">
           <div class="playerstat1"><p>HT/WT: ${player.height}</p></div>
           <div class="playerstat1"><p>Weight: ${player.weight}</p></div>
           <div class="playerstat2"><p>Position: ${player.position}</p></div>
           <div class="playerstat3"><p>Team: ${player.team}</p></div>
           <div class="playerstat4"><p>Career Blocks: ${player.careerBlocks}</p></div>
           <div class="playerstat5"><p>Career FG%: ${player.careerPercentageFieldGoal}</p></div>
           <div class="playerstat6"><p>Career FT%: ${player.careerPercentageFreethrow}</p></div>
           <div class="playerstat7"><p>Career%Three: ${player.careerPercentageThree}</p></div>
           <div class="playerstat8"></p>Career Points: ${player.careerPoints}</P></div>
           <div class="palyerstat9"><p>Career Rebounds: ${player.careerRebounds}</p></div>
       </div>
           </div>`
        })
        playerList.innerHTML = playerItems.join("")
    })
    .catch(err => {
        console.error(err);
    });
})

function displaytopSports(topNewArticles){
    const topArticles=topNewArticles.articles
    const topNewsItem = topArticles.map(function(topArticle) {
        const topNewsTemplate = `<li> 
        <h2>${topArticle.title}</h2>
        <a href="${topArticle.url}"><img src="${topArticle.urlToImage}"/></a>
        </li>`
        return topNewsTemplate
    })
    topNewsUL.innerHTML=topNewsItem.join("")
}
const proffys = [
    {name: "Fábio Aguero", 
    avatar: "https://avatars.githubusercontent.com/u/60341673?v=4", 
    watsapp: 876964685, 
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ullam error accusantium incidunt quis",
    subject: "Física", 
    cost: 20, 
    weekday: 2,
    time_from: 123, 
    time_to: 454,
},
{name: "Anderson", 
avatar: "https://avatars.githubusercontent.com/u/60341673?v=4", 
watsapp: 876964685, 
bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ullam error accusantium incidunt quis",
subject: "Química", 
cost: 20, 
weekday: 2,
time_from: 123, 
time_to: 454,
},
{name: "Andemir", 
avatar: "https://avatars.githubusercontent.com/u/60341673?v=4", 
watsapp: 876964685, 
bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ullam error accusantium incidunt quis",
subject: "Filosofia", 
cost: 40, 
weekday: 2,
time_from: 123, 
time_to: 454,}
];

function pageLanding(req, res) {return res.render("index.html")}
function pageStudy(req, res) {return res.render("study.html", {proffys})}
function pageGiveClasses(req, res) {return res.render("give-classes.html")}

const express = require('express')
const server = express()

//config nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//config arquivos estaticos (css, js, images)
server.use(express.static("public"))

//config rotas das pages
.get('/', pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500)
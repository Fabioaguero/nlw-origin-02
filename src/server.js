const proffys = [
    {name: "Fábio Aguero", 
    avatar: "https://avatars.githubusercontent.com/u/60341673?v=4", 
    whatsapp: 876964685, 
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ullam error accusantium incidunt quis",
    subject: "Física", 
    cost: 20, 
    weekday: 2,
    time_from: 123, 
    time_to: 454,
},
{name: "Anderson", 
avatar: "https://avatars.githubusercontent.com/u/60341673?v=4", 
whatsapp: 876964685, 
bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ullam error accusantium incidunt quis",
subject: "Química", 
cost: 20, 
weekday: 2,
time_from: 123, 
time_to: 454,
},
{name: "Andemir", 
avatar: "https://avatars.githubusercontent.com/u/60341673?v=4", 
whatsapp: 876964685, 
bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ullam error accusantium incidunt quis",
subject: "Filosofia", 
cost: 40, 
weekday: 2,
time_from: 123, 
time_to: 454,}
];

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "Hitória",
    "Matemática",
    "Português",
    "Química",
];

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {return res.render("index.html")}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})}

function pageGiveClasses(req, res) {
    const data = req.query

    //se tiver data (dados) add
    const isNotEmpty = Object.keys(data).length > 0
      if (isNotEmpty) {

        data.subject = getSubject(data.subject)
        //add data (dados) a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    //se nao, nao add e mostra a pagina
    return res.render("give-classes.html", {subjects, weekdays})
};


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
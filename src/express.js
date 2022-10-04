const express = require('express')
const path = require('path')
const hbs = require('hbs')
const utils = require('./utils/request.js')

const searchMovie = utils.searchMovie
const popularMovie = utils.popularMovie
const popularTv = utils.popularTv
const nowPlayingMovie = utils.nowPlayingMovie
const popularTv2 = utils.popularTv2
const vidinfo = utils.vidinfo
const vidinfoM = utils.vidinfoM
const popularMovie2 = utils.popularMovie2

const app = express()

const publicDir = path.join(__dirname,'../public')
const viewsDir = path.join(__dirname,'../templates/views')
const partialDir = path.join(__dirname,'../templates/partials')


app.use(express.static(publicDir))

app.set('view engine','hbs')
app.set('views',viewsDir)
hbs.registerPartials(partialDir)

app.get('/',(req,res)=>{
    res.render('homepage')
})
app.get('/movie',(req,res)=>{
    res.render('movie')
})
app.get('/tv',(req,res)=>{
    res.render('tv')
})
app.get('/person',(req,res)=>{
    res.render('person')
})
app.get('/searchMovie',(req,res)=>{
    searchMovie(req.query.searchTerm,(error,response)=>{
        res.send(response)
    })
})
app.get('/popularMovie',(req,res)=>{
    popularMovie((error,response)=>{
        res.send(response)
    })
})
app.get('/popularTv',(req,res)=>{
    popularTv((error,response)=>{
        res.send(response)
    })
})
app.get('/nowPlayingMovie',(req,res)=>{
    nowPlayingMovie((error,response)=>{
        res.send(response)
    })
})
app.get('/popularTv2',(req,res)=>{
    popularTv2((error,response)=>{
        res.send(response)
    })
})
app.get('/vidinfo',(req,res)=>{
    vidinfo(req.query.id,(error,response)=>{
        res.send(response)
    })
})
app.get('/vidinfoM',(req,res)=>{
    vidinfoM(req.query.id,(error,response)=>{
        res.send(response)
    })
})
app.get('/popularMovie2',(req,res)=>{
    popularMovie2((error,response)=>{
        res.send(response)
    })
})


app.listen(3000,()=>{
    console.log('server initiated')
})

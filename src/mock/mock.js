const movieList = require('./movie-list.json')
const cinemaList = require('./cinema-list.json')
const comingList =require('./coming-list.json')
const mostExpect =require('./most-expected.json')

module.exports = () =>{
    return{
        movieList,
        cinemaList,
        comingList,
        mostExpect
    }
}
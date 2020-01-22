const note=[{
    title:"My next trip",
    body:"I would like to go to spain"
},{
    title:"Hobbits to work on",
    body:"Exercise,Eating a bit better"
},{
    title:"Office modificatuion",
    body:"Get a new seat"
}]
const findNote=function(note,query){    
    return note.filter(function(note){
        const istitleMatch=note.title.toLowerCase().includes(query)
        const isbodyMatch=note.body.toLowerCase().includes(query)
        return istitleMatch || isbodyMatch
    })
}  
console.log(findNote(note,'next'))
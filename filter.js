const note=[{
    title:"My next trip",
    body:"I would like to go to spain"
},{
    title:"Hobbits to work on",
    body:"Exercise,Eatiing a bit better"
},{
    title:"Office modificatuion",
    body:"Get a new seat"
}]
const filternote=note.filter(function(note){
    const istitleMatch=note.title.toLowerCase().includes('ne')
    const isbodyMatch=note.body.toLowerCase().includes('ne')
    return istitleMatch || isbodyMatch
})  
console.log(filternote)
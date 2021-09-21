import React,{useState,useEffect}from "react";
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from "./NewSongForm";
const ListSong = () => {
    const[songs,setSongs] = useState([
        {title:"the wild darkness" , id : 1},
        {title :"memory gospel",id :2},
        {title:"almost home",id :3}
    ]);
    const [age,setAge]=useState(20)
    const Addsong = (title) =>{
        setSongs([...songs,{title :title,id : uuidv1()}])
    }
    useEffect(()=>{
        console.log("song data updating");
    },[songs])
    useEffect(()=>{
        console.log("age data updating");
    },[age])
    return(
        <div className= "song-list">
            <ul>
                {songs.map((song)=>{return(
                    <li key={song.id}>{song.title}</li>
                )})}
            </ul>
            <NewSongForm addsong={Addsong}/>
            <button onClick={()=>setAge(age+1)}>add age{age}</button>
        </div>
    );
}
export default ListSong;
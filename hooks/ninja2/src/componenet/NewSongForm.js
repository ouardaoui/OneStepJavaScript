import React,{useState}from "react";
const NewSongForm = (props) => {
    const [songtitle,setSongtitle]=useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.addsong(songtitle)
        setSongtitle("")
    }
        return ( 
        <form onSubmit={handleSubmit}>
            <label>song name :</label>
            <input type ="text" required name="song" value={songtitle} onChange={(e)=>setSongtitle(e.target.value)}/>
            <input type ="submit" value="add song" />
        </form>
     );
}

export default NewSongForm;
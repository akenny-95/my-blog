import { useState } from "react";

export default function CreatePost ({user, handleAddPost}) {
    
    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");
 
    function handleTitle (evt) { setTitle(evt.target.value) };
    function handleContent (evt) { setContent(evt.target.value) };
    function handleCreate () {
        const newPost = { title, content, author: user };
        
        //require input in either section to allow adding a post
        if (title || content) { 
            handleAddPost(newPost);
        }   
    };

    return (
        <form onSubmit={(e) => {
         e.preventDefault()
         handleCreate();
        }}>
            <div>
                Author: <b>{user}</b> 
            </div>
            <div>
                <label htmlFor="create-title">Title: </label> 
                <input 
                 type="text" 
                 value={title} 
                 onChange={handleTitle} 
                 name="create-title"  
                 id="create-title" 
                />
            </div>

            <textarea 
             value={content} 
             onChange={handleContent} 
            />

            <input 
             type="submit" 
             value="Create" 
            />
        </form>
    );
}

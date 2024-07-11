//Fetch and display note on page Load
window.onload = async ()=>{
    try{
        const respone = await fetch('/notes');
        const notes = await respone.json();
        // notes.forEach(addNoteToList);
    }catch(err){
        console.error('Error in fetching notes:',err)
    }
}

document.getElementById('noteForm').addEventListener('submit',async(e)=>{
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    try{
        const respone = await fetch('/notes',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({title,content})
        })
        const data = await respone.json();
        if(respone.status === 201){
            // addNoteToList(data);
        }else{
            console.log('Error adding note :', data.message);
        }
    }catch(err){
        console.error('Error : ', err);
    }
})
import React from 'react'
import './App.css'
const App = () => {
  const handle=() =>{
    alert("Hello this is Sahfiyathul Mahruba");
  }
  return (
   <>
    <h1 className='App'>Hello World</h1>
    <button onClick={handle}>Click Here</button>
    <h2 className='Pipo'>Sahfiyathul Mahurba</h2>
    <h2>Cyber Security</h2>
    <ol>
    <li>Civil</li>
    <li>Mech</li>
    <li>Mechatronic</li>
    </ol>
    <ul>
    <li>Banana Fish</li>
    <li>Attack on titan</li>
    <li>Hells Paradise</li>
    </ul>
    <dl>
    <dt><u>Fruits</u></dt>
    <dd>-Banana</dd>
    <dd>-Apple</dd>
    <dd>-Orange</dd>
    <dt><u>Cars</u></dt>
    <dd>-Porsche</dd>
    <dd>-Toyoto</dd>
    <dd>-Thar</dd>
    </dl>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRPqKTeqKNNInhf1bsta5b9b0gS3u4IBafQ&usqp=CAU"></img>
    <p>Sayonaro to my friend<a href="https://genius.com/Tones-and-i-dance-monkey-lyrics" target='_black'> Last bye</a></p>
    <iframe width="854" height="480" src="https://www.youtube.com/embed/ZH9OzGuSudM" title="What Can&#39;t Cats Walk On? #36" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
   
    </>
  )
}

export default App
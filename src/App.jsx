import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FooterPage from './Items/Footer'
import './App.css'

function App() {
  const [isTalking, setIsTalking] = useState(false);
  let audio = new Audio("/ting.mp3")
  
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    if(e){
        e.preventDefault();
    }
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: inputValue }),
      });

      const data = await response.json();
      if (data.result) {
        setOutputValue(data.result);
        changeImage();
      } else if (data.error) {
        setOutputValue(`Error: ${data.error}`);
      } else {
        setOutputValue('Unexpected response from server.');
      }
    } catch (error) {
      console.error('Error sending data:', error);
      setOutputValue('Error sending data to the server.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(); // Call handleSubmit when Enter is pressed
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };


  const start = () => {
    audio.play()
  }
  const changeImage = () => {
    const imgElement = document.getElementById("myImage");
    if (imgElement.src.endsWith("ai_bot_silent.png")) {
      imgElement.src = "/ai_bot_talking.gif";
    } else {
      imgElement.src = "/ai_bot_silent.png";
    }
  };
  const check = () => {
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
  }

  return (
    <>
    <div className='main-content'>
      <div className="w-[100vw] h-[90vh] relative content-center bg-[#f7d6ad]">
        <div className="w-[1907px] h-[1074px] relative">
          <img className="w-[1907px] h-[1074px] left-0 top-0 absolute" src="./questBoard.png" />
          <img className="w-[283px] h-[272px] left-[1400px] top-[152px] absolute" src="./bell.png" onClick={() => start()} />
          
          <img className="w-[350px] max-w-300 h-[467px] left-[146px] top-[164px] absolute" id="myImg" src="./quest1.png" onClick={() => check()}/>
          
          <div id="myModal" className="modal">
            <span className="close">&times;</span>
            <img className="modal-content" id="img01"/>
            <div id="caption"></div>
          </div>

          <img className="w-[350px] max-w-300 h-[467px] left-[522px] top-[397px] absolute" id="myImg" src="./quest2.png" onClick={() => check()}/>
          <img className="w-[350px] max-w-300 h-[467px] left-[917px] top-[288px] absolute" id="myImg" src="./quest3.png" onClick={() => check()}/>
          <img className="w-[350px] max-w-300 h-[467px] left-[1312px] top-[522px] absolute" id="myImg" src="./quest4.png" onClick={() => check()}/>
        </div>
        <img className=" left-[1500px] top-[550px] z-1 absolute" id="myImage" src={isTalking ? "/ai_bot_talking.gif" : "/ai_bot_silent.png"}
            onClick={() => setIsTalking(!isTalking)}/> 
        <button className="bg-[white] w-[180px] z-0 h-[150px] absolute left-[1805px] top-[920px] inline-block"> </button>
        <div className="text-[40px] font-[Montserrat]">
          <input
            type="text"
            className=" border bg-white p-2 absolute top-[1207px] left-[75px] rounded-lg w-[1500px] h-[100px]"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter text..."
          />
        </div>
        {outputValue && (
          <div className="output-container absolute top-[400px] right-[75px] w-[784px] h-[340px] bg-[url(./ai_textbox.png)]">
            <p className="output-label indent-[150px] font-[Montserrat] font text-[30px]">DOCTOR:</p>
            <p className="output-text text-center font-[Montserrat] font text-[30px]">{outputValue}</p>
          </div>
        )}
      </div>  
      <FooterPage />
    </div>
    
        
    </>
  )
}

export default App

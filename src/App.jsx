import React, { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai';
import 'bootstrap/dist/css/bootstrap.min.css'
import FooterPage from './items/Footer'
import './App.css'

function App() {
  const [isTalking, setIsTalking] = useState(false);
  let audio = new Audio("/ting.mp3")
  
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [promptResponses, setpromptResponses] = useState([]);
  const genAI = new GoogleGenerativeAI(
    "AIzaSyCqs91E1J3Stlzr1vFSrlhLH2EQPnmfv8Q"
  );
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const getResponseForGivenPrompt = async () => {
    try {
      setLoading(true)
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent(inputValue + "as short as possible" + "talk like a doctor" + "be respect to the patient");
      setInputValue('')
      const response = result.response;
      const text = response.text();
      console.log(text)
      //promptResponses('')
      setpromptResponses([text]);
  
      setLoading(false)
      while(Date.not() - start < 2000) {
        setIsTalking(!isTalking);
      }
      isTalking(!setInputValue);
    }
    catch (error) {
      console.log(error)
      console.log("Something Went Wrong");
      setLoading(false)
    }
    let start = Date.now();
    
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
        <div className="container absolute left-[100px] text-[30px]">
          <div className=" text-[50px]">
            <div className=" text-[50px]">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Ask Me Something You Want"
                className="form-control text-[30px]"
              />
              <button onClick={getResponseForGivenPrompt} className="btn btn-primary">Send</button>
            </div>
            {/* <div className="col-auto">
              <button onClick={getResponseForGivenPrompt} className="btn btn-primary">Send</button>
            </div> */}
          </div>
          {loading ? (
            <div className="text-center mt-3">
              {/* <div className="spinner-border text-primary" role="status"> */}
                <span className="visually-hidden">Loading...</span>
            // This message is shown while your answer to your prompt is being generated
              {/* </div> */}
            </div>
          ) : (
            promptResponses.map((promptResponse, index) => (
              <div className="aa output-container absolute top-[-1000px] right-[-1300px] w-[784px] h-[340px] ">
                <p className=" output-label font-[Montserrat] font text-[30px]">DOCTOR:</p>
                <div className={` response-text indent-[90px] text-[25 px]`}>{promptResponse}</div>
              </div>
              // <div key={index} >
              //   <div className={`response-text ${index === promptResponses.length - 1 ? 'fw-bold' : ''}`}>{promptResponse}</div>
              // </div>
            ))
          )}
        </div>
        {/* {outputValue && (
          <div className="output-container absolute top-[400px] right-[75px] w-[784px] h-[340px] bg-[url(./ai_textbox.png)]">
            <p className="output-label indent-[150px] font-[Montserrat] font text-[30px]">DOCTOR:</p>
            <p className="output-text text-center font-[Montserrat] font text-[30px]">{outputValue}</p>
          </div>
        )} */}
      </div>  
      <FooterPage />
    </div>
    
        
    </>
  )
}

export default App

import React from 'react';
// import ImageUploader from './ImageUploader';
import './App.css';
import image from './images/image.svg';


function App() {

  return (
    <div className="uploader">
      <div class="upload_section_main">
          <div class="upload_section_minor">
            <p class="main_text">Upload your image</p> 
            <p class="helper_text">File should be Jpeg, Png...</p>
            <div class="upload_section">
              <img class="upload_svg" src={image}/>
              <p class="drag_message">Drag & Drop your image here</p>
            </div>
            <p class="or">or</p>
            <button class="button">Choose a file</button>
          </div>
      </div>
    </div>
  )
}

export default App;

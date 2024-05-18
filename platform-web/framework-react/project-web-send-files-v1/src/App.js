import './App.css';
import React, { useState } from "react";
import FileUploader from "./components/forms/FileUploaderv1";

// function that creates a webpage where user can upload files
function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Client</h1>
        <p>Upload files to server</p>
        <form>
          <FileUploader 
            onFileSelect={(files) => setSelectedFile(files)}
            onFileSelectError={({error}) => alert(error)}
          />
        </form>

      </header>
      <div>
        <button>Loader button</button>
      </div>
    </div>
  );
}

export default App;

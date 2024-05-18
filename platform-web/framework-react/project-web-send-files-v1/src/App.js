import './App.css';
import React, { useState } from "react";
import FileUploader from "./components/forms/FileUploaderv1";
import FileSender from "./components/forms/FileSenderv1";

// function that creates a webpage where user can upload files
function App() {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [responseReceived, setResponseReceived] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Client</h1>
        <p>Upload files from desktop</p>
        <form>
          <FileUploader
            onFileSelect={(selectedFiles) => setSelectedFiles(selectedFiles)}
            onFileSelectError={({error}) => alert(error.message)}
          />
        </form>

      <p>Send uploaded files to server</p>
      <div>
        <FileSender
            selectedFiles={selectedFiles} // Pass selected files as a prop to FileSender
            onResponseReceived={(responseReceived) => setResponseReceived(responseReceived)}
            onResponseReceivedError={({error}) => alert(error)}
        />
      </div>
      </header>
    </div>
  );
}

export default App;

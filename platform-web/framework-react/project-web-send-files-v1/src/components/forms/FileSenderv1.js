import React from 'react'

const FileSender= ({
    selectedFiles, 
    onResponseReceived, 
    onResponseReceivedError
}) => {

    const handleFileSender = () => { 
        // loop over files
        try {
            // throw new Error('File not loaded') // for debugging purposes
            for (let i = 0; i < selectedFiles.length; i++) {
                console.log('File',selectedFiles[i].name, 'loaded successfully!')
                // handle validations
            }
        } catch (error) {
            console.log(error.message) // send error to the parent component
        }

        // log all files
        console.log(selectedFiles.target.files)
    }

    return (
        <div className="file-sender">
            <button onClick={handleFileSender}>
                Send files to server
            </button>
        </div>
    )
}

export default FileSender;

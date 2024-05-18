import React, {useRef} from 'react'

/**
 * FileUploader component for uploading files.
 * @param {Object} props - The component props.
 * @param {Function} props.onFileSelect - The callback function to handle selected files.
 * @param {Function} props.onFileSelectError - The callback function to handle file selection errors.
 * @returns {JSX.Element} The FileUploader component.
 */
const FileUploader = ({onFileSelect, onFileSelectError}) => {
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        // loop over files
        try {
            // throw new Error('File not loaded') // for debugging purposes
            for (let i = 0; i < e.target.files.length; i++) {
                console.log('File',e.target.files[i].name, 'loaded successfully!')
                // handle validations
                onFileSelect(e.target.files)   
            }
        } catch (error) {
            onFileSelectError({error: error.message})
        }

        // log all files
        console.log(e.target.files)
    }
    return (
        <div className="file-uploader">
            <input 
                type="file" 
                onChange={handleFileInput}
                multiple
            />
            <button onClick={e => 
                fileInput.current && fileInput.current.click()
                }
            />
        </div>
    )
}

export default FileUploader;

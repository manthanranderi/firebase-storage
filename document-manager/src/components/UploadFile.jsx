import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { uploadFile } from "../features/fileSlice";

function UploadFile() {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();

  const handleChange = e => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);

    if (f.type.startsWith("image")) {
      setPreview(URL.createObjectURL(f));
    } else {
      setPreview(null);
    }
  };

  const handleUpload = () => {
    if (!file) return alert("Select file");
    dispatch(uploadFile(file));
    setFile(null);
    setPreview(null);
  };

  return (
    <div className="upload-box">
      <input
        type="file"
        ref={fileRef}
        onChange={handleChange}
        className="hidden-input"
      />

      <button onClick={() => fileRef.current.click()} className="choose-btn">
        Choose File
      </button>

      <span className="file-name-text">
        {file ? file.name : "No file selected"}
      </span>

      <button onClick={handleUpload} className="upload-btn">
        Upload
      </button>

      {preview && <img src={preview} className="preview" />}
    </div>
  );
}

export default UploadFile;
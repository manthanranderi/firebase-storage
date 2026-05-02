import{useDispatch}from"react-redux";
import{deleteFile}from"../features/fileSlice";

function FileCard({file}){
  const dispatch=useDispatch();

  return(
    <div className="card">
      {file.type.startsWith("image")&&<img src={file.url}/>}
      <div className="file-name">{file.name}</div>
      <div className="actions">
        <a href={file.url} target="_blank" rel="noopener noreferrer">View</a>
        <button onClick={()=>dispatch(deleteFile(file.id))}>Delete</button>
      </div>
    </div>
  );
}

export default FileCard;
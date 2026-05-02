import{useEffect}from"react";
import{useDispatch,useSelector}from"react-redux";
import{fetchFiles}from"../features/fileSlice";
import FileCard from"./FileCard";

function FileList(){
  const dispatch=useDispatch();
  const{filteredFiles}=useSelector(s=>s.files);

  useEffect(()=>{dispatch(fetchFiles())},[]);

  return(
    <div className="file-grid">
      {filteredFiles.map(f=>(
        <FileCard key={f.id} file={f}/>
      ))}
    </div>
  );
}

export default FileList;
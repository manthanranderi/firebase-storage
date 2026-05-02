import UploadFile from "../components/UploadFile";
import FileList from "../components/FileList";
import SearchFilter from "../components/SearchFilter";
import "../App.css";

function Dashboard() {
  return (
    <div className="container">
      <h1 className="title">Document Manager</h1>
      <SearchFilter />
      <UploadFile />
      <FileList />
    </div>
  );
}

export default Dashboard;
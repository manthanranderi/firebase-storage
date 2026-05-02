import{createSlice,createAsyncThunk}from"@reduxjs/toolkit";
import{CLOUDINARY_UPLOAD_URL,CLOUDINARY_UPLOAD_PRESET}from"../cloudinary/cloudinaryConfig";

const uploadFile=createAsyncThunk("files/uploadFile",async(file)=>{
  const fd=new FormData();
  fd.append("file",file);
  fd.append("upload_preset",CLOUDINARY_UPLOAD_PRESET);

  const res=await fetch(CLOUDINARY_UPLOAD_URL,{method:"POST",body:fd});
  const data=await res.json();

  return{
    id:Date.now(),
    name:file.name,
    url:data.secure_url,
    publicId:data.public_id,
    type:file.type,
    size:file.size,
    createdAt:new Date().toISOString()
  };
});

const fetchFiles=createAsyncThunk("files/fetchFiles",async()=>{
  const d=localStorage.getItem("files");
  return d?JSON.parse(d):[];
});

const deleteFile=createAsyncThunk("files/deleteFile",async(id,{getState})=>{
  const updated=getState().files.files.filter(f=>f.id!==id);
  localStorage.setItem("files",JSON.stringify(updated));
  return id;
});

const fileSlice=createSlice({
  name:"files",
  initialState:{
    files:[],
    filteredFiles:[],
    loading:false,
    error:null
  },
  reducers:{
    searchFiles:(state,action)=>{
      const q=action.payload.toLowerCase();
      state.filteredFiles=state.files.filter(f=>f.name.toLowerCase().includes(q));
    }
  },
  extraReducers:builder=>{
    builder
      .addCase(uploadFile.pending,state=>{state.loading=true})
      .addCase(uploadFile.fulfilled,(state,action)=>{
        state.loading=false;
        state.files.push(action.payload);
        state.filteredFiles=state.files;
        localStorage.setItem("files",JSON.stringify(state.files));
      })
      .addCase(uploadFile.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.error.message;
      })
      .addCase(fetchFiles.fulfilled,(state,action)=>{
        state.files=action.payload;
        state.filteredFiles=action.payload;
      })
      .addCase(deleteFile.fulfilled,(state,action)=>{
        state.files=state.files.filter(f=>f.id!==action.payload);
        state.filteredFiles=state.files;
      });
  }
});

const{searchFiles}=fileSlice.actions;

export{uploadFile,fetchFiles,deleteFile,searchFiles};
export default fileSlice.reducer;
# 📄 Document Manager (Cloudinary + React + Redux)

## 🚀 Project Overview

Document Manager ek modern web application hai jisme user apne documents (images, PDFs, files) upload, view aur manage kar sakta hai. Yeh project React.js aur Redux Toolkit par bana hai aur file storage ke liye Cloudinary use karta hai.

---

## ✨ Features

* 📤 File Upload (Image, PDF, etc.)
* 🖼 Image Preview (card view me)
* 📂 File Listing (grid layout)
* 🔍 Search Files
* ❌ Delete Files
* 🔗 Open/View File in new tab
* ⚡ Real-time UI update (Redux)

---

## ☁️ Cloudinary Integration

Project me Cloudinary ka use kiya gaya hai file upload ke liye.

### Required Config:

```js
const CLOUDINARY_CLOUD_NAME = "your_cloud_name";
const CLOUDINARY_UPLOAD_PRESET = "your_upload_preset";

const CLOUDINARY_UPLOAD_URL =
  `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`;
```

### Important:

* Upload preset **Unsigned** hona chahiye
* File upload ke baad `secure_url` use hota hai preview ke liye

---

## 🛠 Tech Stack

* React.js
* Redux Toolkit
* Axios
* Cloudinary API
* CSS (Custom UI with Blue Gradient)

---

## 📁 Folder Structure

```
src/
├── app/
│   └── store.js
├── features/
│   └── fileSlice.js
├── services/
│   └── cloudinary.js
├── components/
│   ├── UploadFile.jsx
│   ├── FileList.jsx
│   ├── FileCard.jsx
│   └── SearchFilter.jsx
├── pages/
│   └── Dashboard.jsx
└── App.jsx
```

---

<img width="1677" height="852" alt="Screenshot 2026-05-02 160026" src="https://github.com/user-attachments/assets/3b8b6293-6efa-422b-8f4c-9925dc92e4d3" />
<img width="1403" height="811" alt="Screenshot 2026-05-02 155825" src="https://github.com/user-attachments/assets/e5e74b86-aebd-41cb-a497-8bb7de488378" />



## ⚙️ Installation & Setup

```bash
npm install
npm run dev
```

---

## 🧠 How It Works

1. User file select karta hai
2. File Cloudinary pe upload hoti hai
3. Cloudinary response me `secure_url` milta hai
4. Redux store me file data save hota hai
5. UI automatically update ho jata hai

---

## 📸 UI Preview

* Blue gradient modern UI
* Glassmorphism cards
* Image preview inside cards

---

## ⚠️ Important Notes

* Cloudinary sirf file store karta hai
* Metadata (name, category, etc.) Redux me handle hota hai
* Image preview ke liye:

```js
<img src={file.url} />
```

---

## 🔥 Future Improvements

* Drag & Drop Upload
* Upload Progress Bar
* File Categories
* User Authentication
* Backend Integration (MongoDB / Firebase)

---

t is for learning and practice purposes.

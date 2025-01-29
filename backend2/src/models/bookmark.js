import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    bookmarks: [
      {
        image: { type: String, required: true },
        subtitle: { type: String, required: true },
        title: { type: String, required: true },
        trackId: { type: Number, required: true },
        
       
      },
    ],
  });
  
  const Song = mongoose.model("Song", songSchema);
  export default Song;
  
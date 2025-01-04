import mongoose from "mongoose";

// const songSchema = new mongoose.Schema({
//     email: { type: String, required: true }, // Fixed type and required property
//     id: { type: Number, required: true }, // Fixed type and required property
//     subtitle: { type: String, required: true }, // Fixed type and required property
//     title: { type: String, required: true }, // Fixed type and required property
//     image: { type: String, required: true } // Fixed type and required property
// });

// const Song = mongoose.model("Song", songSchema);

// export default Song;






const songSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    bookmarks: [
      {
        id: { type: Number, required: true },
        title: { type: String, required: true },
        subtitle: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
  });
  
  const Song = mongoose.model("Song", songSchema);
  export default Song;
  
import Song from "../models/bookmark.js";
import mongoose from "mongoose";


 const bookmark = async (req, res) => {
  try {
    const userId = req.email; // Assuming `req.id` contains the authenticated user's ID
    const { email, title, subtitle, image, trackId, ...rest } = req.body;

    console.log("bhaii jaan ka data", req.body)

    // Validate inputs
    if (!email || !image || !subtitle || !title || !trackId) {
      return res.status(400).json({ message: "Invalid request data." });
    }

    // Check if the user already exists in the database
    const existingUser = await Song.findOne({ email });

    if (existingUser) {
      // Update bookmarks if the song is not already bookmarked
      const isAlreadyBookmarked = existingUser.bookmarks.some(
        (bookmark) => String( bookmark.trackId )== String(trackId)
      );

      if (isAlreadyBookmarked) {
        return res.status(400).json({ message: "Song is already bookmarked." });
      }

      existingUser.bookmarks.push({ email, image, subtitle, title, trackId, ...rest });
      await existingUser.save();
      return res.status(200).json({ message: "Bookmark added successfully." });
    } else {
      // Create a new user with the bookmark
      const newBookmark = new Song({
        email,
        bookmarks: [{email, image,subtitle, title, trackId, ...rest }],
      });

      await newBookmark.save();
      return res.status(201).json({ message: "Bookmark added successfully." });
    }
  } catch (error) {
    console.error("Error adding bookmark:", error);
    res.status(500).json({ message: "Internal server error." });
    console.log("check Point1")
  }
};

// ******************************getCall***********************

// Fetch bookmarks for a user
// const bookmarkData = async (req, res) => {
//   try {
//     const email = req.param.email; // Assume the email is sent as a query parameter
//   console.log("email", email)
//     if (!email) {
//       return res.status(400).json({ message: "Email is required." });
//     }

//     // Fetch the user with the given email
//     const user = await Song.findOne({ email });

//     if (!user || !user.bookmarks.length) {
//       return res.status(404).json({ message: "No bookmarks found for this user." });
//     }

//     return res.status(200).json({ bookmarks: user.bookmarks });
//   } catch (error) {
//     console.error("Error fetching bookmarks:", error);
//     res.status(500).json({ message: "Internal server error." });
//   }
// };


// *********************************getCall***********************



const removeBookmark = async (req, res) => {
    try {
      const { email, id } = req.body;
      console.log("id,email",req.body)
  
      // Validate inputs
      if (!email || !id) {
        return res.status(400).json({ message: "Invalid request data." });
      }
  
      // Find the user and remove the bookmark
    //   const result = await Song.findOneAndDelete(bookmarkId);    check this also if other one not working 

    const result = await Song.updateOne(
        { email }, // Find the user by email
        { $pull: { bookmarks: { id: id } } } // Remove the song by its id
      );
  
      if (result.matchedCount == 0) {
        return res.status(404).json({ message: "bookmark not found." });
      }
  
      res.status(200).json({ message: "Bookmark removed successfully." });
    } catch (error) {
      console.error("Error removing bookmark:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  };
  
export{
    bookmark,
    removeBookmark,
    //  bookmarkData
}
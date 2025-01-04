import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        name:{type: String, require: true},
        email: { type: String, required: true, unique: true },
        password: {type: String, require:true}

    },
    {
        timestamps:true,
        versionKey:false
    }
)



// Pre-save middleware to hash the password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10); // Generate salt
        this.password = await bcrypt.hash(this.password, salt); // Hash the password
        next();
    } catch (error) {
        next(error);
    }
});

// Method to compare passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password); // Compare hashed passwords
};


const User = mongoose.model("user", userSchema)
export default User;
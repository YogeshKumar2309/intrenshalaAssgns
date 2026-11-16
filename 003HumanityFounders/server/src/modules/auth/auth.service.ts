import { User } from "./auth.model";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { env } from "../../config/env";


export const registerUser = async (
    name: string,
    email: string,
    password: string,
) => {
    const existingUser = await User.findOne({ email });

    if (existingUser) throw new Error("Email aleardy registered");

    const hashPass = await bcrypt.hash(password, 12);

    const user = await User.create({
        name,
        email,
        password: hashPass,
    });

    return {
        id: user._id,
        name: user.name,
        email: user.email,
    }
}

export const loginUser = async (
    email: string,
    password: string,
) => {
    const user = await User.findOne({ email }).select("+password");

    if (!user) throw new Error("Invalid email or password");

    const isPassVal = await bcrypt.compare(
        password,
        user.password,
    );

    if (!isPassVal) throw new Error("Invalid email or password");

    const token = jwt.sign(
        { userId: user._id.toString() },
        env.JWT_SECRET,
        { expiresIn: "7d" }
    )

    return {
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
        }
    }
}
import {Request, Response } from "express";
import { loginSchema, registerSchema } from "./auth.validation"
import * as authService from "./auth.service"
import { ZodError } from "zod";




export const register = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        
        const data = registerSchema.parse(req.body);
        console.log(data);
        

        const user = await authService.registerUser(
            data.name,
            data.email,
            data.password,
        );

        res.status(201).json({
            success: true,
            message: "Registration succesful",
            data: user,
        });        
    } catch (error : unknown) {
        if( error instanceof ZodError) {
            console.log(error)
            return res.status(400).json({
                success: false,
                errors: error.issues.map((issue) => ({
                    field: issue.path.join("."),
                    message: issue.message,
                })),
            })
        }
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
}


export const login = async (req: Request, res: Response) => {
    try {
        const data = loginSchema.parse(req.body);

        const result = await authService.loginUser(
            data.email,
            data.password,
        );

        res.status(200).json({
            success: true,
            message: "Login successful",
            data: result,
        });
    } catch (error : unknown) {
        if( error instanceof ZodError) {
            console.log(error)
            return res.status(400).json({
                success: false,
                errors: error.issues.map((issue) => ({
                    field: issue.path.join("."),
                    message: issue.message,
                })),
            })
        }
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
}
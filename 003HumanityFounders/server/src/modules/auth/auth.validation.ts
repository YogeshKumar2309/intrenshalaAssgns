import {z} from "zod";

export const registerSchema = z.object({
    name: z.string({
        error: (issue) => 
            issue.input === undefined 
                ? "name is required"
                : "name must be a string",
    }).min(2, "Name must be at least 2 characters"),
    
    email: z.string({
                error: (issue) => 
            issue.input === undefined 
                ? "email is required"
                : "email must be a string",
       }).email("Please enter a valid email"),


    password: z.string({
         error: (issue) => 
            issue.input === undefined 
                ? "pasword is required"
                : "pasword must be a string",
    }).min(6, "Password must be at least 6 characters"),
});


export const loginSchema = z.object({
 email: z.string({
                error: (issue) => 
            issue.input === undefined 
                ? "email is required"
                : "email must be a string",
       }).email("Please enter a valid email"),


    password: z.string({
         error: (issue) => 
            issue.input === undefined 
                ? "pasword is required"
                : "pasword must be a string",
    }).min(6, "Password must be at least 6 characters"),
})
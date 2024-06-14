import JWT from "jsonwebtoken";
import { prismaClient } from "../clients/db";
import { users } from "@prisma/client";


const JWT_SECRET ='dsjkghablsdfgvalybvgcjhvdsahgf'
class JWTService {
    public static generateTokenForUser(user:users){
        const payload ={
            id:user?.id,
            email:user?.email,
        };
        const token = JWT.sign(payload,JWT_SECRET)
        return token;
    }
} 

export default JWTService; 
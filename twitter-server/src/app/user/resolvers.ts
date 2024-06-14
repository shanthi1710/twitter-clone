import axios from "axios";
import { prismaClient } from "../../clients/db";
import JWTService from "../../services/jwt";

interface GoogleTokenResult {
  iss?: string;
  azp?: string;
  aud?: string;
  sub?: string;
  email: string;
  email_verified: string;
  nbf?: string;
  name?: string;
  picture?: string;
  given_name: string;
  family_name?: string;
  iat?: string;
  exp?: string;
  jti?: string;
  alg?: string;
  kid?: string;
  typ?: string;
}
const queries = {
  verifyGoogleToken: async (parent: any, { token }: { token: string }) => {
    const googleToken = token;
    const googleOauthURL = new URL("https://oauth2.googleapis.com/tokeninfo");
    googleOauthURL.searchParams.append("id_token", googleToken);

    const { data } = await axios.get<GoogleTokenResult>(
      googleOauthURL.toString(),
      {
        responseType: "json",
      }
    );
    const checkForUser = await prismaClient.users.findUnique({
      where: { email: data.email },
    });
    if(!checkForUser){
         await prismaClient.users.create({
            data:{
                email:data.email,
                firstName:data.given_name,
                lastName:data.family_name,
                profileImageURL:data.picture
            },
         });
         console.log(data)
         const userInDb = await prismaClient.users.findUnique({where:{email:data.email}})
         if(!userInDb) throw new Error('User with email not found');
         const  token = JWTService.generateTokenForUser(userInDb )
         return token;
    }
     
  },
};

export const resolvers = { queries };

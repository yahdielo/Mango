import { createThirdwebClient } from "thirdweb";
import dotenv from 'dotenv';
dotenv.config();
//client
export const Client = new createThirdwebClient({
    //secretKey: process.env.SECRETE_KEY,
    clientId: `${process.env.CLIENT_ID}`
  });
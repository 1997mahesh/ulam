import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { redirect } from "next/navigation";
const COOKIE="ulam_admin_session";
const key=()=>{const secret=process.env.AUTH_SECRET;if(!secret&&process.env.NODE_ENV==="production")throw new Error("AUTH_SECRET is required in production");return new TextEncoder().encode(secret||"development-only-change-this-secret")};
export async function createSession(admin:{id:string;email:string;name:string}){const token=await new SignJWT(admin).setProtectedHeader({alg:"HS256"}).setIssuedAt().setExpirationTime("8h").sign(key());(await cookies()).set(COOKIE,token,{httpOnly:true,sameSite:"lax",secure:process.env.NODE_ENV==="production",path:"/",maxAge:28800})}
export async function getSession(){const token=(await cookies()).get(COOKIE)?.value;if(!token)return null;try{return (await jwtVerify(token,key())).payload as {id:string;email:string;name:string}}catch{return null}}
export async function requireAdmin(){const session=await getSession();if(!session)redirect("/admin/login");return session}
export async function destroySession(){(await cookies()).delete(COOKIE)}

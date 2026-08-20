"use client";
import Link from "next/link";import {useFormStatus} from "react-dom";
export function AdminFormActions({cancelHref,saveLabel="Save",pendingLabel="Saving…"}:{cancelHref:string;saveLabel?:string;pendingLabel?:string}){const{pending}=useFormStatus(),separator=cancelHref.includes("?")?"&":"?";return <div className="admin-form-actions"><Link className="admin-cancel" href={`${cancelHref}${separator}notice=cancelled`}>Cancel</Link><button className="admin-primary" disabled={pending}>{pending?pendingLabel:saveLabel}</button></div>}

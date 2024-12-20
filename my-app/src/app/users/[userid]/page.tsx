import React from 'react'
import getUser from '@/lib/getUser'
import getUserPosts from '@/lib/getUserPosts'
import { Suspense } from 'react'
import { userAgent } from 'next/server'
import UserPosts from './components/UserPosts'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
export async function generateMetadata({params}:{params:{
    userid:string
}}):Promise<Metadata>{
    const res:Promise<User>=getUser(params.userid);
    const user:User =await res;
   if(!user){
    return {
        title:"NotFound"
    }
   }
    return {
        title:user.name,
        description:`This is the Page of ${user.name}`
    }
}
export default async function page({params}:{
    params:{
        userid:string
    }
}) {
    const res:Promise<User>=getUser(params.userid);
    
    const res1:Promise<Post[]>=getUserPosts(params.userid)
    //const [user,userPosts]=await Promise.all([res,res1])
    const user=await res;
    if(!user){
        return notFound();
    }
    
  return (
    
    <div>
        <h1>User {params.userid}</h1>
        <h2>{user.name}</h2>
        <Suspense fallback="<h2>Loading...</h2>">
            <UserPosts promise={res1}/>

           
        </Suspense>
        <br/>
        
    </div>
  )

}
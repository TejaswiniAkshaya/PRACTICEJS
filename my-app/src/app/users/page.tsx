import React from 'react'
import type { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link'
import './styles.css'
export const meta:Metadata={
    title:"Users List",
    description:"This is UserList Page"
}
export default async function Users() {
   /* {
        await new Promise((resolve=>setTimeout(resolve,200)))
     }*/
    const usersData:Promise<User[]>=getAllUsers();
    const users= await usersData;
    
  
     const content=(
        <section className='main'>
            <h2><Link href="/">Back to Home</Link></h2>
            <br/>
            {
                users.map((user:User)=>{
                    return(
                       <>
                       <p key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                        <br/>
                       </p>
                       </> 
                    )
                })
            }
        </section>
     )
    
  return content;
}

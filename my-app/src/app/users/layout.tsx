import { Metadata } from "next";

 export const meta:Metadata={
    title:"usersData"
 }
export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <>
        <h1>User List</h1>
        <br/>
        <div> {children}</div>
        </>
      
    );
  }
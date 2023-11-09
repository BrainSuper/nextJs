import React, {useState} from 'react';
import Link from 'next/link'
import MainContainer from "../components/MainContainer";
const Users = ({users}) => {

    return (
        <MainContainer keywords={'users'}>
            Список користувачів:
            {users.map(user => {
                   return (
                       <li>
                           <Link href={`users/${user.id}`} legacyBehavior>
                               <a>{user.name}</a>
                           </Link>
                       </li>
                   )
            }
                )}
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await res.json()

    return { props: { users } }
}

import { useRouter } from 'next/router'
import styles from '../../styles/user.module.sass'
import MainContainer from "../../components/MainContainer";
export default function User({user}) {
    const {query} = useRouter()
    console.log(query.id);
    return (
        <MainContainer keywords={'chosen user'}>
            <div className={styles.user}>{user.name} з id {user.id}</div>
        </MainContainer>

    )
}

export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
    console.log(params);
    return { props: {user} }
}
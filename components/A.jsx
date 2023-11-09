import React from "react";
import Link from 'next/link'
import styles from '../styles/A.module.css'
const A = ({href, text}) => {
    return (
        <Link href={href} legacyBehavior>
            <a className={styles.link}>{text}</a>
        </Link>
    );
};

export default A;
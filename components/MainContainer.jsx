import React from 'react';
import A from "./A";
import Head from 'next/head'

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <div>
                <Head>
                    <meta keywords={'niko proj1 ' + keywords}></meta>
                    <title></title>
                </Head>
                <div className='navbar'>
                    <A href={'/'} text={'Головна сторінка'}></A>
                    <A href={'/users'} text={'Користувачі'}></A>
                </div>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {
                    `
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                    `
                }
            </style>
        </>
    );
};

export default MainContainer;
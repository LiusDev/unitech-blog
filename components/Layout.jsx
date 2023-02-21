/* eslint-disable react/prop-types */
import React from 'react'
import { Header, Footer, MetaMessenger } from '.'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                { children }
            </main>
            <MetaMessenger />
            <Footer />
        </>
    )
}

export default Layout
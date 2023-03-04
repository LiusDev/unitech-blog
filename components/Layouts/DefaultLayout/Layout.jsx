/* eslint-disable react/prop-types */
import React, { Suspense } from 'react'
import { Header, Footer, MetaMessenger } from '../..'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                { children }
            </main>
            <Suspense>
                <MetaMessenger />
            </Suspense>
            <Footer />
        </>
    )
}

export default Layout
/* eslint-disable react/prop-types */
import React, { Suspense } from 'react'
import { Header, Footer, MetaMessenger, BackToTopBtn } from '../..'

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
            <BackToTopBtn />
            <Footer />
        </>
    )
}

export default Layout
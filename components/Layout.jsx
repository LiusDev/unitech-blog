import React from 'react'
import { Header, Footer, MetaMessenger, FanpageScript } from '.'

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
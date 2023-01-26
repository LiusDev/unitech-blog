import React from 'react'
import Script from 'next/script';

const FanpageScript = () => {
  return (
    <>
       <Script strategy='lazyOnload'>
            {`
                <div id="fb-root"></div>
                <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v15.0" nonce="o2064nJ1"></script>
            `}
        </Script>
    </>
  )
}

export default FanpageScript
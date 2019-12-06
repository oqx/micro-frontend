import dynamic from 'next/dynamic'
import React from 'react'

const Component = dynamic(() => import('../components'), {
    ssr: false
})
const Page = (props) => {
    console.log('compy',Component)
    console.log(props)
    return <><div>shir world!</div>
    <Component />
    </>
}

export default Page

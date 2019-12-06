import dynamic from 'next/dynamic'
import React from 'react'

const Component = dynamic(() => import('@oqx/micro-frontend'), {
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

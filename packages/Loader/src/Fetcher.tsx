import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useScript } from './useScript'
import './styles.local.scss'

const NAMESPACE = 'CreditScore'

interface Props {
    src: string
}

const _Fetcher: React.FunctionComponent<Props> = ({ src }) => {
    const [Component, setComponent] = useState(null)
    console.log(src)
    const {component} = useScript(src, NAMESPACE)

    useEffect(() => {
        if(component) {
            setComponent(component)
        }
    }, [component])
    console.log('component ', Component)
    // @ts-ignore
    return Component ? <Component /> : <div>hi</div>
}
_Fetcher.displayName = 'Fetcher'

_Fetcher.propTypes = {
    src: PropTypes.string.isRequired
}

export default React.memo(_Fetcher)

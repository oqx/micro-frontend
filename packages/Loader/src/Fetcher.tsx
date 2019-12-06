import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useScript } from './useScript'
import './styles.local.scss'

interface Props {
    src: string
}

const _Fetcher: React.FunctionComponent<Props> = ({ src }) => {
    const [Component, setComponent] = useState(null)
    const script = useScript({src})

    useEffect(() => {
        if(script) {
            setComponent(script)
        }
    }, [script])

    return Component ? <Component /> : null
}
_Fetcher.displayName = 'Fetcher'

_Fetcher.propTypes = {
    src: PropTypes.string.isRequired
}

export default React.memo(_Fetcher)

import React from 'react'
import PropTypes from 'prop-types'
import './styles.local.scss'

interface Props {
    name: string
}

const _Creditscore: React.FunctionComponent<Props> = ({ name }) => <div className="hello-world">Hello {name}!</div>

_Creditscore.displayName = 'Creditscore'

_Creditscore.propTypes = {
    name: PropTypes.string.isRequired
}

export default React.memo(_Creditscore)

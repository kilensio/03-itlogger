import React from 'react'
import { connect } from 'react-redux'
import { searchLogs } from '../../actions/logActions'
import PropTypes from 'prop-types'

const SearchBar = ({ searchLogs }) => {
  // const text = useRef('')

  // const onChange = e => {
  //   searchLogs(text.current.value)
  // }
  const onChange = e => {
    searchLogs(e.target.value.trim())
  }

  return (
    <nav style={{ marginBottom: '30px' }} className="cyan">
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input 
            id="search" 
            type="search" 
            placeholder='Search Logs...'
            // ref={text}
            onChange={onChange}
          />
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  )
}

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
}

export default connect(null, { searchLogs })(SearchBar)

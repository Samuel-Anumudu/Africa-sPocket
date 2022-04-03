import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const AddAssets = () => {
  return (
    <div>
      <span>
        <FontAwesomeIcon icon={faCirclePlus} className="plus-sign" />
        <span className="add-asset">Add an asset</span>
      </span>
      <div className="progress">
        <h3>Your Progress</h3>
        <div className="progress-bar__full">
          <div className="progress-bar__over">
            <span>40%</span>
          </div>
          <small>
            Your are off track to reach your goals.
            <br />
            Invest more every month to close the gap.
          </small>
        </div>
      </div>
    </div>
  )
}

export default AddAssets

import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import data from '../assets/data'
import AddAssets from './AddAssets'

const Assets = () => {
  const [customerData, setCustomerData] = useState(data)
  const [showAsset, setShowAsset] = useState(false)
  const [totalAsset, setTotalAsset] = useState(110000)

  const handleShowAsset = () => {
    setShowAsset(!showAsset)
  }
  return (
    <main>
      <section className="customer-data-box">
        {customerData.map((customer, index) => {
          return (
            <div key={index}>
              <div className="customer-profile">
                <span className="customer-name">
                  {customer.customerName}'s Portfolio
                </span>
                <span className="dropdown">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={showAsset ? 'show-asset' : 'hide-asset'}
                    onClick={handleShowAsset}
                  />
                </span>
              </div>
              <div className="customer-stats">
                <div className={showAsset ? null : 'hide-stats'}>
                  <small>Your portfolio is worth</small>
                  <h1>
                    <span className="currency">KES.</span>
                    {totalAsset}
                  </h1>
                  <span className="caret-up">
                    <FontAwesomeIcon icon={faCaretUp} />
                  </span>
                  <span className="percentage-per-month">
                    20% in past month
                  </span>
                  <div id="assets">
                    <div className="assets-label">
                      <span>Portfolio</span>
                      <span>Total Value</span>
                    </div>
                    <div className="divider"></div>
                    <div className="assets-info">
                      <span className="type">
                        {customer.firstAsset.assetType}
                      </span>
                      <div className="bonus">
                        <span className="price">
                          KES. {customer.firstAsset.price}
                        </span>
                        <div className="small-tags">
                          <small>+KES. 3,000</small>
                          <small style={{ color: '#7bbf74' }}>+30%</small>
                        </div>
                      </div>
                    </div>
                    <div className="divider"></div>
                    <div className="assets-info">
                      <span className="type">
                        {customer.secondAsset.assetType}
                      </span>
                      <div className="bonus">
                        <span className="price">
                          KES. {customer.secondAsset.price}
                        </span>
                        <div className="small-tags">
                          <small>+KES. 10</small>
                          <small style={{ color: 'rgba(124, 2, 37, 1)' }}>
                            -10%
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        <AddAssets />
      </section>
    </main>
  )
}

export default Assets

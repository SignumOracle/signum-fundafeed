import React from 'react'
import '../styles/HowItWorks.css'

export default function HowItWorks() {
  return (
    <div className="wrapper">
      <h1 className="subtitle2l"> *Active Networks:<br></br> <span className="subtitle2w">Pulsechain </span></h1>
      <h1 className="title">How It Works</h1>
      <div className='mainText' >
       Fund any price-feed to get reported to the Signum oracle by filling out the fields on the right-hand side of the page. Once completed, reporters will race to pick up the rewards and report the price data as specified.
          <br></br>
          <br></br>
          <div className="subtitle2">Before requesting a feed: </div> 
          -Confirm the price you are requesting is currently supported 
          <a
            href="https://github.com/AvantgardeBlockchainSolutions/signum-feeds/tree/main/src/telliot_feeds/feeds"
            target="_blank"
            rel="noopener noreferrer"
            > here
          </a>
          .
           <br></br>
          -Users of the requested data will want to integrate Signum into their code using the corresponding{' '}
          <a 
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            SpotPrice Query ID
          </a>. 
        <div>
          <br></br>
          <div className="subtitle2">To fund your price-feed:</div> <li>Connect wallet to Pulsechain Mainnet</li> 
          <li>Input desired asset & currency</li>
          <li>Set funding parameters</li>
          <li>Confirm -> Approve -> Fund your feed</li>

          <br></br>
          <p className='mainText' >Still have questions? Join our{' '}
            <a 
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
            Discord!
            </a>
          </p>
        </div>
      </div>
     
        <div className='infoContainer'>
          <a className='infoLink' target="_blank" rel="noreferrer" href="">
            <button className='infoButtons'>Docs</button>
          </a>
          <a className='infoLink' target="_blank" rel="noreferrer" href="">
            <button className='infoButtons'>Discord</button>
          </a>
        </div>
    </div>
  )
}

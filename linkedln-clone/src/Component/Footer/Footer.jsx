import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaLinkedin, FaArrowAltCircleDown, FaArrowDown, FaQuestion, FaCog } from 'react-icons/fa';
import { faCogs, faChevronDown } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return(
      <div className='container mt-5'>

          <div className='row'>
            <div className='col-12'>
                <h6 className='linked-big'>Linked <FaLinkedin className='linkedIn-small' /></h6>
            </div>
          </div>
          <div className='row footer'>
              <div className='col-2'>
                  <ul className='height-footer'>
                      <li>About</li>
                      <li>Community</li>
                      <li>Privacy & Terms <faChevronDown /></li>
                      <li>Sales Solutions</li>
                      <li>Safety Center</li>
                  </ul>
              </div>
              <div className='col-2'>
                  <ul className='height-footer'>
                      <li>Accessibility</li>
                      <li>Careers</li>
                      <li>Ad Choices</li>
                      <li>Mobile</li>
                  </ul>
              </div>
              <div className='col-2'>
                  <ul className='height-footer'>
                      <li>Talent Solutions</li>
                      <li>Marketing</li>
                      <li>Advertising</li>
                      <li>Small Business</li>
                  </ul>
              </div>
              <div className='col-3' style={{justifyContent: 'center', display: 'flex',  flexDirection: 'column'}}>
                  <ul>
                      <li style={{position: 'relative', display: 'flex', flexDirection: 'column', lineHeight: '1.5'}} className='mt-3 mb-4'> <FaQuestion style={{position: 'absolute', left: '-20px', bottom: '15px'}}/>Questions
                          <small>Visit our Help Center.</small>
                      </li>
                      <li style={{position: 'relative', display: 'flex', flexDirection: 'column', lineHeight: '1.5'}}><FaCog style={{position: 'absolute', left: '-20px', bottom: '15px'}}/>
                    
                          Manage your account and Privacy
                          <small>Go to your Settings.</small>
                      </li>
                  </ul>
              </div>
              <div className='col-3' style={{display: 'flex', flexDirection: 'column', lineHeight: '1.5', justifyContent: 'center'}}> 
                  Select Language
                  <select>
                      <option>English language</option>
                      <option>Italiano(Italiano)</option>
                      <option>Deutsch(German)</option>
                      <option>Svenska(Swedish)</option>
                      <option>Suomi (Finnish)</option>
                      <option>Netherland (Dutch)</option>
                      <option>Pyccknn(Russian)</option>
                      <option>Portuguese</option>
                      <option>Polki(Polish)</option>
                      <option>Norsk (Norwegian) </option>
                  </select>
              </div>
          </div>
          <div className='row' style={{fontSize: '12px'}}>
              <div className='col-12 pb-4'>
                  LinkedIn Corporation  &copy; 2020
              </div>
          </div>
      </div>
  )
}


export default Footer;
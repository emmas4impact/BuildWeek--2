import React, { Component } from 'react';
import { FaLinkedin, FaArrowAltCircleDown, FaArrowDown, FaQuestion } from 'react-icons/fa';
import { faCog, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { MdSettings } from 'react-icons/md';

const Footer = () => {
  return(
      <div className='container mt-5'>

          <div className='row'>
            <div className='col-12'>
                <h6 className='linked-big'>Linked <FaLinkedin className='linkedIn-small' /></h6>
            </div>
          </div>
          <div className='row footer pt-3' style={{lineHeight: '0.5'}}>
              <div className='col-2'>
                  <ul className='list-unstyled'>
                      <li>About</li>
                      <li>Community Guidelines</li>
                      <li>Privacy & Terms <faChevronDown /></li>
                      <li>Sales Solutions</li>
                      <li>Safety Center</li>
                  </ul>
              </div>
              <div className='col-2'>
                  <ul>
                      <li>Accessibility</li>
                      <li>Careers</li>
                      <li>Ad Choices</li>
                      <li>Mobile</li>
                  </ul>
              </div>
              <div className='col-2'>
                  <ul>
                      <li>Talent Solutions</li>
                      <li>Marketinf Solutions</li>
                      <li>Advertising</li>
                      <li>Small Business</li>
                  </ul>
              </div>
              <div className='col-3' style={{justifyContent: 'center', display: 'flex',  flexDirection: 'column'}}>
                  <ul>
                      <li style={{position: 'relative', display: 'flex', flexDirection: 'column', lineHeight: '1.5'}} className='mt-3 mb-4'> <FaQuestion style={{position: 'absolute', left: '-20px', bottom: '15px'}}/>Questions
                          <small>Visit our Help Center.</small>
                      </li>
                      <li style={{position: 'relative', display: 'flex', flexDirection: 'column', lineHeight: '1.5'}}> <MdSettings style={{position: 'absolute', left: '-20px', bottom: '15px'}}/>
                    
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
              <div className='col-12'>
                  LinkedIn Corporation  &copy; 2020
              </div>
          </div>
      </div>
  )
}


export default Footer;
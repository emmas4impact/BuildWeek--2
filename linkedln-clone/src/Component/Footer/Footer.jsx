import React, { Component } from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return(
      <div className='container'>
          <div className='row'>
            <div className='col-12'>
                <h6 className='linked-big'>Linked <FaLinkedin className='linkedIn-small' /></h6>
            </div>
          </div>
          <div className='row footer'>
              <div className='col-2'>
                  <ul>
                      <li>About</li>
                      <li>Community Guidelines</li>
                      <li>Privacy & Terms</li>
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
              <div className='col-3'>
                  <ul>
                      <li>Questions ?
                          <small>Visit our Help Center.</small>
                      </li>
                      <li>
                          Manage your account and Privacy
                          <small>Go to your Settings.</small>
                      </li>
                  </ul>
              </div>
              <div className='col-3'>
                  Select Language
                  <select>
                      <option></option>
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
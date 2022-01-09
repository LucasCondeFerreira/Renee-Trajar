import React from 'react';
import ImageTitle from '../components/data-display/ImageTitle/ImageTitle'
import '../assets/style/style.css'
import '../assets/style/section-1.css'

export default class Container extends React.Component  {
    render() {
        return (
          <div className='col-md-12 section-1'>
            <ImageTitle />
          </div>
        )
      }
}
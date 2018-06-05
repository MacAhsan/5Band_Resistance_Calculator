import React from 'react'
import './styles.css'
import bandsConfig from '../../config/getBands';

const Resistence = ({
  bands
}) => {

  return (
    <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 91 506.8'>
    <rect x='38.1' className='st0' width='14.8' height='506.8' />
    <linearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='-20.438'
    y1='65.733' x2='-13.033' y2='65.733' gradientTransform='translate(58.552 187.663)'>
        <stop offset='0' />
        <stop offset='1' stopColor='#fff' stopOpacity='0' />
    </linearGradient>
    <rect x='38.1' className='st1' width='7.4' height='506.8' />
    <path className='st2' d='M91,157.2l0,32.5c0,11.1-5.2,21-13.3,27.4l0,0l0,72.5l0,0c8.1,6.4,13.3,16.2,13.3,27.4l0,32.5 c0,19.2-15.6,34.8-34.8,34.8H34.8C15.6,384.4,0,368.8,0,349.6l0-32.5c0-11.1,5.2-21,13.3-27.4l0,0l0-72.5l0,0 C5.2,210.7,0,200.9,0,189.7l0-32.5c0-19.2,15.6-34.8,34.8-34.8h21.4C75.5,122.4,91,138,91,157.2z'/>
    <linearGradient id='SVGID_2_' gradientUnits='userSpaceOnUse' x1='-58.552'
    y1='65.733' x2='-7.756' y2='65.733' gradientTransform='translate(58.552 187.663)'>
        <stop offset='0' />
        <stop offset='1' stopColor='#fff' stopOpacity='0' />
    </linearGradient>
    <path className='st3' d='M50.8,384.4h-16C15.6,384.4,0,368.8,0,349.6l0-32.5c0-11.1,5.2-21,13.3-27.4l0,0l0-72.5l0,0 C5.2,210.7,0,200.9,0,189.7l0-32.5c0-19.2,15.6-34.8,34.8-34.8h16C31.6,122.4,16,138,16,157.2l0,32.5c0,11.1,5.2,21,13.3,27.4l0,0 l0,72.5l0,0c-8.1,6.4-13.3,16.2-13.3,27.4l0,32.5C16,368.8,31.6,384.4,50.8,384.4z'/>

    {bands.map((b, i) =>  {
      let color = bandsConfig.bandOptions[b].color

      if (i === 0) {
        return <rect y='164.8'  width='91' height='11.1' fill={color} key={i}/>
      }

      else if (i === 1) {
        return <polygon  points='77.7,217.1 77.7,217.1 77.7,228.2 13.3,228.2 13.3,217.1 13.3,217.1' fill={color} key={i}/>
      }

      else if (i === 2) {
        return <rect x='13.3' y='247.9'  width='64.4' height='11.1' fill={color} key={i}/>
      }

      else if (i === 3) {
        return <polygon  points='77.7,289.7 13.3,289.7 13.3,289.7 13.3,278.6 77.7,278.6 77.7,289.7' fill={color} key={i}/>
      }

      else if (i === 4) {
        return <rect y='330.9'  width='91' height='11.1' fill={color} key={i}/>

      }

      return null
    })}
    </svg>
  )
}

export default Resistence

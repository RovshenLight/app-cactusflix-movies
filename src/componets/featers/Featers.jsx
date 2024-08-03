import './featers.css'
import React from 'react'
import { BsPlay } from 'react-icons/bs'
import { BsInfo } from 'react-icons/bs'
import CTA from '../CTA/CTA'
import Select from 'react-select';
import { useState } from 'react';
import imgPoster from '../../assets/image/imagedata'
import moviesexport from '../export/moviesexport'

const Featers = ({ type, setGenre}) => {

  const [isPending, setIsPending] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [posters, setPosters] = useState(imgPoster());
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posters.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posters.length) % posters.length);
  };

  const options = [
    { value: 'comedy', label: 'Comedy'},
    { value: 'crime', label: 'Crime'},
    { value: 'fantasy', label: 'Fantasy'},
    { value: 'historical', label: 'Historical'},
    { value: 'horror', label: 'Horror'},
    { value: 'sci-fi', label: 'Sci-fi'},
    { value: 'thriller', label: 'Thriller'},
    { value: 'western', label: 'Western'},
    { value: 'advanture', label: 'Advanture'},
    { value: 'animation', label: 'Animation'},
    { value: 'drama', label: 'Drama'},
    { value: 'documentar', label: 'Documentar' },
    { value: 'romance', label: 'Romance' }
  ];

  const handleChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
    setGenre(selectedOption ? selectedOption.value : null);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      overflow: '',
      cursor: '',
      backgroundColor: '',
      border: '3px ridge greey',
      borderRadius: '10px',
      boxShadow: state.isFocused ? '0 0 0 2px rgba(0, 0, 0, 0.2)' : 'none',
      '&:hover': {
        borderColor: ''
      },
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: '',
      backgroundColor: state.isSelected ? 'rgb(29, 70, 8)' : 'rgb(70, 80, 23)',
      color: state.isSelected ? '#000' : '#fff',
      '&:hover': {
        backgroundColor: 'rgb(84, 76, 40)',
        color: '#000'
      }
    }),
    singleValue: (provided, state) => ({
      ...provided,
      cursor: '',
      color: '#fff'
    })
  };
  
  const movies = moviesexport();

  return (
    <div className="featers">
      {type && (
        <div className="category">
          <span>{ type === "Movies" ? "Movies" : "Series"}</span>      
          <Select             
              name="genre" id="genre"
              placeholder='Genre'
              onChange={handleChange}
              value={selectedOption}
              styles={customStyles}
              options={options}
              className="custom-select"
            />
        </div>
      )}
      <button className='swipe' onClick={handlePrevious}><CTA elem={'⏴'} /></button>
      <img src={posters[currentIndex].img} alt="Gallery" />
      <button className='swipe2' onClick={handleNext}><CTA elem={'⏵'}/></button>   
        <div className="featers__alert">
      </div> 
      <div className="desc">
      {movies && movies[currentIndex] && (
          <>
            <h6>{movies[currentIndex].movie_name}</h6>
            <p>{movies[currentIndex].description}</p>
          </>
        )}
      <div className="featers__btn">
        <a href="/Watch">
          <button className='play'>
            <CTA elem={<BsPlay />} a='P' b='la' c='y'/>
          </button>
        </a>
      <button className='info'>
        <CTA elem={<BsInfo />} a='I' b='nf' c='o'/>
      </button>
      </div>
      </div>
    </div>
  )
}

export default Featers
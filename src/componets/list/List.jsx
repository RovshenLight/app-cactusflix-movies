import './list.css'
import React, { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { BiChevronLeft } from 'react-icons/bi'
import ListParts from '../listParts/ListParts'
import { useRef } from 'react'
import moviesexport from '../export/moviesexport'

const List = ({dat }) => {
  const movies = moviesexport();

  const [slideList, setSlideList] = useState(0);
  const [whenMove, setWhenMove] = useState(false);
  const listRef = useRef();

  const handleScroll = (direct) => {
    setWhenMove(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if(direct === 'left' && slideList > 0) {
      listRef.current.style.transform = `translateX(${240 + distance}px)`;
      setSlideList(slideList - 1);
    }
    if(direct === 'right' && slideList < 7 ) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSlideList(slideList + 1);
    }
  }


  return (

    <div className='list'>
          {movies && (
            <div className='list__wrapper' key={dat.id}>
              <span className='list__title'>{dat.genre}</span>
                  <div className="wrapper">
                      <BiChevronLeft className='list__svg left' onClick={() => handleScroll('left')} style={{display: !whenMove && 'none' }} />
                      <div className="list__container" ref={listRef}>
                        {movies.map((movie, index) => (
                          <>
                          <ListParts index={index} movie={movie}/>
                          </>
                        ))}
                  </div>
              <BiChevronRight className='list__svg right' onClick={() => handleScroll('right')} />
        </div>
      </div>
    )}
    </div>
  )
}

export default List
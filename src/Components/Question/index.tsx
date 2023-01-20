import React, { Fragment, useState } from 'react';
import { data } from '../../data'
import Que from '../Que'

function Question () {
  const [answer] = useState<any>({})
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className="App mt-5">
      {
        data.questions.map((question: any, index: number) => {
          return(
            <Fragment key={index}>
              {
                currentIndex === index && (
                  <Fragment>
                    <Que data={question} answer={answer} index={currentIndex} setIndex={setCurrentIndex} totalLength={data.questions.length} />
                  </Fragment>
                )
              }
            </Fragment>
          )
        })
      }
    </div>
  );
}

export default Question;

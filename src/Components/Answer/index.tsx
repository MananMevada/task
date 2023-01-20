import React, { Fragment } from 'react';
import { Form, FormGroup, Label } from "reactstrap";
import { data } from '../../data'
import Ans from '../Ans'

function Answer() {
  const answer: string|null = localStorage.getItem("answer");
  console.log('answer', JSON.parse(answer || ''))
  return (
    <div className='formData'>
      <h1> Answer </h1>
      <Form>
        {
          data.questions.map((questionData: any, index: number) => {
            return(
              <Fragment key={index}>
                {
                  <FormGroup>
                    <Label for="exampleEmail">{questionData.questionid}. {questionData.question}</Label>
                    <Ans data={questionData} answer={JSON.parse(answer || '')} index={index} />
                  </FormGroup>
                }
              </Fragment>
            )
          })
        }
      </Form>
    </div>
  );
}

export default Answer;

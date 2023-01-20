import React, { Fragment } from 'react'
import { Button, FormGroup, Label, Input  } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function Que(props: {
  data: {
    question: string,
    questionid: number,
    questiontype: string,
    questionoption: [{
      optionvalue: string,
      optionid: number
    }]
  },
  answer: any,
  index: number,
  setIndex: Function,
  totalLength: number
}) {
  const { data, answer, index, setIndex, totalLength } = props

  const navigate = useNavigate();
  
  return (
    <Fragment>
      <h1> Question {data.questionid}</h1>
      <h5 className='mt-4 mb-4'> {data.question} </h5>
      {
        (data.questiontype === 'Radio') && (
          <Fragment>
            <p>Radio</p>
            {
              data.questionoption.map((option, ind) => {
                return (
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name={`radio${data.questionid}`} value={option.optionid} onClick={(e: any) =>
                        answer[index] = e.target.value
                      }
                      />
                      {option.optionvalue}
                    </Label>
                  </FormGroup>
                )
              })
            }
          </Fragment>
        )
      }
      {
        (data.questiontype === 'Date') && (
          <Fragment>
            <p>Date</p>
            <Input type="date" onChange={(e: any) =>
                answer[index] = e.target.value
              }/>
          </Fragment>
        )
      }
      {
        (data.questiontype === 'Textarea') && (
          <Fragment>
            <p>Textarea</p>
            <Input type="textarea" onChange={(e: any) =>
                answer[index] = e.target.value
              }/>
          </Fragment>
        )
      }
      {
        (data.questiontype === 'Checkbox') && (
          <Fragment>
            <p>Checkbox</p>
            {
              data.questionoption.map((option, ind) => {
                return (
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" value={option.optionid} onClick={(e: any) =>
                        answer[index] ? answer[index] = [ ...answer[index], e.target.value ] : answer[index] = [e.target.value]
                      }/>
                      {option.optionvalue}
                    </Label>
                  </FormGroup>
                )
              })
            }
          </Fragment>
        )
      }
      <div>
        {
          ((totalLength - 1) === index)
          ? (
            <Fragment>
              <Button color="primary" onClick={() => {
                localStorage.setItem('answer', JSON.stringify(answer));
                navigate('/answer')
              }
              }>Submit</Button>
            </Fragment>
          ) : (
            <Fragment>
              <Button disabled={index === 0} onClick={() => setIndex(index - 1)}> Prev </Button>
              <Button className='ml-50' disabled={(totalLength - 1) === index}  onClick={() => setIndex(index + 1)}> Next </Button>
            </Fragment>
          )
        }
      </div>
    </Fragment>
  )
}

export default Que
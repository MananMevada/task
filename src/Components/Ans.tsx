import React, { Fragment } from "react";
import { FormGroup, Label, Input } from "reactstrap";

function Ans(props: {
  data: {
    question: string;
    questionid: number;
    questiontype: string;
    questionoption: [
      {
        optionvalue: string;
        optionid: number;
      }
    ];
  };
  answer: any;
  index: number;
}) {
  const { data, answer, index } = props;

  console.log('answer, index', answer, answer[index])
  return (
    <Fragment>
      {data.questiontype === "Radio" && (
        <Fragment>
          <p>Radio</p>
          {data.questionoption.map((option, ind) => {
            return (
              <FormGroup check key={ind}>
                <Label check>
                  <Input
                    type="radio"
                    name={`radio${data.questionid}`}
                    value={option.optionid}
                    checked={parseInt(answer[index]) === option.optionid}
                  />
                  {option.optionvalue}
                </Label>
              </FormGroup>
            );
          })}
        </Fragment>
      )}
      {data.questiontype === "Date" && (
        <Fragment>
          <p>Date</p>
          <Input
            type="date"
            value={answer[index]}
          />
        </Fragment>
      )}
      {data.questiontype === "Textarea" && (
        <Fragment>
          <p>Textarea</p>
          <Input
            type="textarea"
            value={answer[index]}
          />
        </Fragment>
      )}
      {data.questiontype === "Checkbox" && (
        <Fragment>
          <p>Checkbox</p>
          {data.questionoption.map((option, ind) => {
            return (
              <FormGroup check  key={ind}>
                <Label check>
                  <Input
                    type="checkbox"
                    value={option.optionid}
                    checked={answer[index].includes(option.optionid.toString())}
                  />
                  {option.optionvalue}
                </Label>
              </FormGroup>
            );
          })}
        </Fragment>
      )}
    </Fragment>
  );
}

export default Ans;

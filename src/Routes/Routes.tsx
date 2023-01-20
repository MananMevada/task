import React, { Fragment } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import NotFound from '../Components/NotFound/index';
import Question from '../Components/Question/index';
import Answer from '../Components/Answer/index';

function RoutesPage () {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Question />} />
          <Route path="/answer" element= {<Answer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default RoutesPage;

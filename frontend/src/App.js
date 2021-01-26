import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormModal from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import QuestionsPage from './components/QuestionsPage';

const questionMock = {
  question: {
    title: 'Who is the best superhero?',
    body: 'Of all the superheroes of the world, be it Darkhorse, DC, Marvel, or something else, which of them is the ultimate superhero?'
  },
  answer: {
    chose: 'Rorschach'
  }
}

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/questions'>
            <QuestionsPage questionDetails={questionMock}/>
          </Route>
          <Route path="/signup">
            <SignupFormModal />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;

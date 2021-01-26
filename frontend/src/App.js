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
  },
  chartData: {
    labels: ['Rorschach', 'Spiderman', 'Wonder Woman', 'Ant-Man', 'Dr Strange', 'Thor', 'Batman'],
    votes: [10, 5, 6, 2, 3, 8, 8 ],
    backgroundColor: [
    "rgb(255, 99, 132)",
    "rgb(255, 159, 64)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",
    "rgb(54, 162, 235)",
    "rgb(153, 102, 255)",
    "rgb(155, 49, 146)",
  ]
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

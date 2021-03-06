import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import QuestionsPage from './components/QuestionsPage';
import Sidebar from "./components/Sidebar";
import IndexPage from './components/IndexPage';
import AskQuestionPage from "./components/AskQuestionPage";
import ProfilePage from "./components/ProfilePage";
import RandomQuestionPage from "./components/RandomQuestionPage";
import QuestionsDetailPage from "./components/QuestionsDetailPage";
import BrowseQuestionsPage from "./components/BrowseQuestionsPage";

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
    dispatch(sessionActions.restoreUser())
      .then(dispatch(sessionActions.getIPId()))
        .then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <div className='spacer' />
      <Navigation isLoaded={isLoaded} />
      <Sidebar />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <IndexPage />
          </Route>
          <Route exact path='/profile'>
            <ProfilePage />
          </Route>
          <Route exact path='/ask'>
            <AskQuestionPage />
          </Route>
          <Route exact path='/questions'>
            {/* <QuestionsPage questionDetails={questionMock}/> */}
            <BrowseQuestionsPage />
          </Route>
          <Route path='/questions/:questionId'>
            <QuestionsDetailPage />
          </Route>
          <Route exact path='/random'>
            <RandomQuestionPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;

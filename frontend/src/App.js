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
import Footer from "./components/Footer/Footer";

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
      <Footer />
    </>
  );
}

export default App;

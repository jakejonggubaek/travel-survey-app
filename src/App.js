// Travel Peference Survey

// Landing page to collect user info

// Questions asking users' travel preference: season/month, budget, duration, weather(temperature), main interest(culture, beach, food, shopping, hiking etc), flight time, previous vacation destination, (question component as a template)

// submit button which sends all the data to database(Firebase)

// display results page to see accumulated data


import './App.scss';
import Nav from './Nav.js';
import Landing from './Landing.js';
import questionSource from './questionSource.js';
import Done from './Done.js';
import Side from './Side.js';
import firebase from './firebase.js';
import Result from './Result';
import { useState } from 'react';
import Questions from './Questions';

function App() {

  //define states
  const [userName, setUserName] = useState('');
  const [questionResult, setQuestionResult] = useState(new Array(6).fill(''));
  const [currentPage, setCurrentPage] = useState('');
  const [buttonActive, setButtonActive] = useState(false);
  const [startActive, setStartActive] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDone, setIsDone] = useState(false);

  //start survey
  const handleStart = (e) => {
    e.preventDefault();
    setStartActive(false);
    setCurrentPage('Q1');
  }

  const handleChange = (e) => {
    setUserName(e.target.value);
  }

  //event triggered when user clicks an option for each survey question
  const handleClick = (questionNumber, answer) => {

    const newArray = [...questionResult];
    newArray[questionNumber-1] = answer;

    setQuestionResult(newArray);

    if (questionNumber !== 6){
      //for question change
    setCurrentPage(`Q${ questionNumber+1 }`);
    }else {
      //activate submit button
    setButtonActive(true);
    }
  }

  //final submit the survey result
  const handleSubmit = () => {

    const finalResults = {};
    const results = [...questionResult];

    results.forEach((answer, index) => {
      finalResults[`Q${index}`] = answer;
    });
    //reference database and save it to firebase
    const dbRef = firebase.database().ref();
    //setQuestionResult(answers);
    dbRef.child(userName).set(finalResults);
    setIsDone(true);
  }
  
  const setAdmin = () => {
    setIsAdmin(true);
  }


  return (
    <div className="App">
      {/* Header and navigator*/}
      <Nav setAdmin={setAdmin}/>
      { !isAdmin?
      <main>
        <div className='main-section'>
            {/* Landing page*/}
            <Landing startActive={startActive} handleStart={handleStart} handleChange={handleChange}/>
          {
              //Ending page
              isDone? <Done />
                //display questions which are stored in questionSource.js
                : <Questions questionSource={questionSource} handleClick={handleClick} currentPage={currentPage}/>
          }
        </div>
        
        {isDone ? <div></div>
            //Side container showing current answers
            : <Side questionResult={questionResult} handleSubmit={handleSubmit} buttonActive={buttonActive}/>
        }
      </main>
       //Admin search page to get users' answers
      :<Result userName={userName} />
      }
      <footer><p className='footer'>By Jake Jonggu Baek @ Juno College Cohort 31</p></footer>
      
    </div>
  );
}

export default App;

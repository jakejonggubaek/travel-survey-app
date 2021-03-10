// Travel Peference Survey

// Landing page to collect user info

// Questions asking users' travel preference: season/month, budget, duration, weather(temperature), main interest(culture, beach, food, shopping, hiking etc), flight time, previous vacation destination, (question component as a template)

// submit button which sends all the data to database(Firebase)

// display results page to see accumulated data


import './App.scss';
import Nav from './Nav.js';
import questionSource from './questionSource.js';
import Done from './Done.js';
import firebase from './firebase.js';
import Result from './Result';
import { useState } from 'react';

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
      <Nav setAdmin={setAdmin}/>
      { !isAdmin?
      <main>
        <div className='main-section'>
          <section className='landing-page' style={{ display: startActive === true ? 'flex' : 'none' }}>
            <h1>Welcome to Jake's Travel survey.</h1>
            <form className="start-form" onSubmit={handleStart}>
              <div>
              <label htmlFor='user-name'>Let us know your name: </label>
              <input type="text" id='user-name' name='user-name' onChange={handleChange} required/>
              </div>
              <button type='submit'>START</button>
            </form>       
          </section>
          {
              isDone? <Done />
            //display questions which are stored in questionSource.js
              :questionSource.map((question, questionIndex) => {
              
              return (
                <section key={`Q${questionIndex + 1}`} className={`Q${questionIndex + 1}`} style={{ display: currentPage === `Q${questionIndex + 1}` ? 'flex' : 'none' }}>
                  <div className='wrapper'>
                    <div className='question'>
                      <p>Q{questionIndex+1}. {question.question}</p>
                    </div>
                    <div className='options'>
                      <ul>
                        {question.option.map((answer, answerIndex) => {
                          return (
                            <li key={`Q${questionIndex}-A${answerIndex + 1}`} onClick={() => handleClick(questionIndex + 1, answer)}>{answer}</li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </section>
              )
            })
          }
        </div>
        
        {isDone ? <div></div>
            
        :<div className='side-table'>
          {
            questionResult.map((answer, index) => {
              
              return (
                <div className='side-container' key={index}>
                  <div className='side-question'>Q{index+1}:</div>
                  <div className='side-answer'>{answer}</div>
                </div>
              )
            })
          }
          
          <div className='side-container'>
            <button className='submit-button' style={{ display: buttonActive === true? 'flex' : 'none' }} onClick={handleSubmit}>SUBMIT</button>
          </div>
          
          
        </div>
        }
      </main>
      
      :<Result userName={userName} />
      }
      <footer><p className='footer'>By Jake Jonggu Baek @ Juno College Cohort 31</p></footer>
      
    </div>
  );
}

export default App;

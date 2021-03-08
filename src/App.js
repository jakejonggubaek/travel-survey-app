// Travel Peference Survey

// Landing page to collect user info

// Questions asking users' travel preference: season/month, budget, duration, weather(temperature), main interest(culture, beach, food, shopping, hiking etc), flight time, previous vacation destination, (question component as a template)

// submit button which sends all the data to database(Firebase)

// display results page to see accumulated data


import './App.scss';
import Nav from './Nav.js';
import questionSource from './questionSource.js';
import firebase from './firebase.js';
import Result from './Result';
import { useState, useEffect} from 'react';

function App() {

  const answers = [
    [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
  ];
  const [currentPage, setCurrentPage] = useState('Q1');
  const [buttonActive, setButtonActive] = useState(false);
  const [firstQuestionResult, setfirstQuestionResult] = useState(answers[0]);
  const [secondQuestionResult, setsecondQuestionResult] = useState(answers[1]);
  const [thirdQuestionResult, setthirdQuestionResult] = useState(answers[2]);
  const [fourthQuestionResult, setfourthQuestionResult] = useState(answers[3]);
  const [fifthQuestionResult, setfifthQuestionResult] = useState(answers[4]);
  const [sixthQuestionResult, setsixthQuestionResult] = useState(answers[5]);

  //reference database and save it to firebase
  const dbRef = firebase.database().ref();
  const database = firebase.database();

  console.log(setfirstQuestionResult);

  const handleClick = (questionNumber, answerNumber) => {
    
    const question = `Q${questionNumber}`;
    const answer = `A${answerNumber}`;
    let result = [];
    answers[questionNumber - 1][answerNumber-1] = 1;

    if (question === 'Q1') {
      switch(answer) {
        case 'A1':
          result = [1,0,0,0];
          setfirstQuestionResult(result);
          break;
        case 'A2':
          result = result = [0, 1, 0, 0];
          setfirstQuestionResult(result);
          break; 
        case 'A3':
          result = result = [0, 0, 1, 0];
          setfirstQuestionResult(result); 
          break;
        case 'A4':
          result = result = [0, 0, 0, 1];
          setfirstQuestionResult(result); 
          break;
      }
    }

    if (question === 'Q2') {
      switch (answer) {
        case 'A1':
          result = [1, 0, 0, 0];
          setsecondQuestionResult(result);
          break;
        case 'A2':
          result = result = [0, 1, 0, 0];
          setsecondQuestionResult(result);
          break;
        case 'A3':
          result = result = [0, 0, 1, 0];
          setsecondQuestionResult(result);
          break;
        case 'A4':
          result = result = [0, 0, 0, 1];
          setsecondQuestionResult(result);
          break;
      }
    }

    if (question === 'Q3') {
      switch (answer) {
        case 'A1':
          result = [1, 0, 0, 0];
          setthirdQuestionResult(result);
          break;
        case 'A2':
          result = result = [0, 1, 0, 0];
          setthirdQuestionResult(result);
          break;
        case 'A3':
          result = result = [0, 0, 1, 0];
          setthirdQuestionResult(result);
          break;
        case 'A4':
          result = result = [0, 0, 0, 1];
          setthirdQuestionResult(result);
          break;
      }
    }

    if (question === 'Q4') {
      switch (answer) {
        case 'A1':
          result = [1, 0, 0, 0];
          setfourthQuestionResult(result);
          break;
        case 'A2':
          result = result = [0, 1, 0, 0];
          setfourthQuestionResult(result);
          break;
        case 'A3':
          result = result = [0, 0, 1, 0];
          setfourthQuestionResult(result);
          break;
        case 'A4':
          result = result = [0, 0, 0, 1];
          setfourthQuestionResult(result);
          break;
      }
    }

    if (question === 'Q5') {
      switch (answer) {
        case 'A1':
          result = [1, 0, 0, 0];
          setfifthQuestionResult(result);
          break;
        case 'A2':
          result = result = [0, 1, 0, 0];
          setfifthQuestionResult(result);
          break;
        case 'A3':
          result = result = [0, 0, 1, 0];
          setfifthQuestionResult(result);
          break;
        case 'A4':
          result = result = [0, 0, 0, 1];
          setfifthQuestionResult(result);
          break;
      }
    }

    if (question === 'Q6') {
      switch (answer) {
        case 'A1':
          result = [1, 0, 0, 0];
          setsixthQuestionResult(result);
          break;
        case 'A2':
          result = result = [0, 1, 0, 0];
          setsixthQuestionResult(result);
          break;
        case 'A3':
          result = result = [0, 0, 1, 0];
          setsixthQuestionResult(result);
          break;
        case 'A4':
          result = result = [0, 0, 0, 1];
          setsixthQuestionResult(result);
          break;
      }
    }
    
    if (questionNumber !== 6){
      //for question change
    setCurrentPage(`Q${ questionNumber+1 }`);
    }else {
      //activate submit button
    setButtonActive(true);
    }



     //questionSource.questions[1]['option'][secondQuestionResult.indexOf(1)]
    //let oldData;

    // dbRef.on('value', (data) => {
    //   oldData = data.val()[question][answer];
    // });

    // rootRef.once("value")
    //   .then(function (snapshot) {
    //     var key = snapshot.key; // null
    //     var childKey = snapshot.child("users/ada").key; // "ada"
    //   });
    // // oldData++;
    // console.log(oldData);
    // database.ref("Q1/A1").set(1);

  }

  return (
    <div className="App">
      <Nav/>
      <main>
        <div className='main-section'>
        {
          //display questions which are stored in questionSource.js
            questionSource.map((question, questionIndex) => {
            
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
                          <li key={`Q${questionIndex}-A${answerIndex + 1}`} onClick={() => handleClick(questionIndex + 1, answerIndex + 1)}>{answer}</li>
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
        <div className='side-table'>
          <div className='side-container'>
            <div className='side-question'>Q1:</div>
            <div className='side-answer'>{questionSource[0].option[firstQuestionResult.indexOf(1)]}</div>
          </div>
          <div className='side-container'>
            <div className='side-question'>Q2:</div>
            <div className='side-answer'>{questionSource[1].option[secondQuestionResult.indexOf(1)]}</div>
          </div>
          <div className='side-container'>
            <div className='side-question'>Q3:</div>
            <div className='side-answer'>{questionSource[2].option[thirdQuestionResult.indexOf(1)]}</div>
          </div>
          <div className='side-container'>
            <div className='side-question'>Q4:</div>
            <div className='side-answer'>{questionSource[3].option[fourthQuestionResult.indexOf(1)]}</div>
          </div>
          <div className='side-container'>
            <div className='side-question'>Q5:</div>
            <div className='side-answer'>{questionSource[4].option[fifthQuestionResult.indexOf(1)]}</div>
          </div>
          <div className='side-container'>
            <div className='side-question'>Q6:</div>
            <div className='side-answer'>{questionSource[5].option[sixthQuestionResult.indexOf(1)]}</div>
          </div>
          <div className='side-container'>
            <button className='submit-button' style={{ display: buttonActive === true? 'flex' : 'none' }}>SUBMIT</button>
          </div>
        </div>
      </main>
      
      <Result />
    </div>
  );
}

export default App;

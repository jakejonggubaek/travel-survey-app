import quetionSource from './questionSource.js';
import firebase from './firebase.js';

function Question(props) {


    const answers = [
        {
            A1: 0,
            A2: 0,
            A3: 0,
            A4: 0
        },
        {
            A1: 0,
            A2: 0,
            A3: 0,
            A4: 0
        }
    ];

    //reference database and save it to firebase
    const dbRef = firebase.database().ref();
    const database = firebase.database();
    
    const handleClick = (questionNumber, index) => {

        const question = `Q${questionNumber}`;
        const answer = `A${index}`;
        let oldData;

        dbRef.on('value', (data) => {
            oldData = data.val()[question][answer];
        });
        
        console.log(oldData);
        database.ref(question).update({ [answer]: oldData });

    }

    
    

    return (
        <section>
            <div className='wrapper'>
                <div className='question'>
                    <p>Q{props.questionNumber}. {props.question.question}</p>
                </div>
                <div className='options'>
                    <ul>
                        {props.question.option.map((item, index) => {
                            return (
                                <li key={`Q${props.questionNumber}-A${index+1}`} onClick={() => handleClick(props.questionNumber, index+1)}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )


    // return (
    //     quetionSource.map((question, index) => {
    //         return (
    //             <section>
    //                 <div className='wrapper'>
    //                     <div className='question'>
    //                         <p>Q{index+1}. {question.question}</p>
    //                     </div>
    //                     <div className='options'>
    //                         <ul>
    //                             {question.option.map((item) => {
    //                                 console.log(`Q${index + 1}`);
    //                                 return (
    //                                     <li id={`Q${index+1}`} onClick={handleClick}>{item}</li>
    //                                 )
    //                             })}
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </section>
    //         )
    //     })
        
    // )
}

export default Question;
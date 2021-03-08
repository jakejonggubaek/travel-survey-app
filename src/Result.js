import firebase from './firebase.js';
import { useState, useEffect } from 'react';

function Result() {

    const [result, setResult] = useState([]);

    useEffect(()=>{
        const dbRef = firebase.database().ref();
        dbRef.on('value', (data) => {
            const SurveyResults = data.val();
            console.log(SurveyResults);
        });
    }, []);

    return(
        <section className='result-container'>
            <p>Result</p>
        </section>
    )
}

export default Result;
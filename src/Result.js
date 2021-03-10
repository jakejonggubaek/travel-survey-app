import firebase from './firebase.js';
import { useState } from 'react';

function Result(props) {

    const [clientDB, setClientDB] = useState([]);
    const [clientName, setClientName] = useState('');
    const [isClient, setIsClient] = useState(true);

    const handleChange = (e) => {
        setClientName(e.target.value);
    }

    const handleResult = (e) => {

        e.preventDefault();

        const ref = firebase.database().ref(clientName);
        
   
        ref.once("value")
            .then(function (snapshot) {
                const name = snapshot.val();

                if(name){
                    setClientDB(Object.values(name));
                    setIsClient(true);
                }else {
                    setIsClient(false);
                }
            });
    }

    return(
        <div className='result-container'>
            <div className='wrapper'>
                <form onSubmit={handleResult}>
                    <label htmlFor="client-name">Client Name : </label>
                    <input id='client-name' name='client-name' type="text" onChange={handleChange} required placeholder='Client Name'/>
                    <button className='search-button' type='submit'>Search</button>
                </form>
                {
                    isClient?
                <ul className='client-info-container'>
                    <li>Cliet Name : <span>{clientName}</span></li>
                    <li>Main Travel Purpose : <span>{clientDB[0]}</span></li>
                    <li>Next Destination : <span>{clientDB[1]}</span></li>
                    <li>Season Preference : <span>{clientDB[2]}</span></li>
                    <li>Travel Duration : <span>{clientDB[3]}</span></li>
                    <li>Travel Budget : <span>{clientDB[4]}</span></li>
                    <li>Prefered Travel Type : <span>{clientDB[5]}</span></li>
                </ul>
                :<div><p className='no-result'>No Result</p></div>
                }
            </div>
        </div>
    )
}

export default Result;
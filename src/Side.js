function Side(props) {
    return(
        <div className='side-table'>
            {
                props.questionResult.map((answer, index) => {

                    return (
                        <div className='side-container' key={index}>
                            <div className='side-question'>Q{index + 1}:</div>
                            <div className='side-answer'>{answer}</div>
                        </div>
                    )
                })
            }

            <div className='side-container'>
                <button className='submit-button' style={{ display: props.buttonActive === true ? 'flex' : 'none' }} onClick={props.handleSubmit}>SUBMIT</button>
            </div>
        </div>
    )
}

export default Side;
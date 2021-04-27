function Questions(props) {
    return(
        props.questionSource.map((question, questionIndex) => {

            return (
                <section key={`Q${questionIndex + 1}`} className={`Q${questionIndex + 1}`} style={{ display: props.currentPage === `Q${questionIndex + 1}` ? 'flex' : 'none' }}>
                    <div className='wrapper'>
                        <div className='question'>
                            <p>Q{questionIndex + 1}. {question.question}</p>
                        </div>
                        <div className='options'>
                            <ul>
                                {question.option.map((answer, answerIndex) => {
                                    return (
                                        <li key={`Q${questionIndex}-A${answerIndex + 1}`} onClick={() => props.handleClick(questionIndex + 1, answer, answerIndex + 1)}>{answer}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </section>
            )
        })
    )
}

export default Questions;
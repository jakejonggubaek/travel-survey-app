function Done() {
    return (
        <div className='done-page'>
            <p>Thank you for your particitation!</p>
            <button onClick={()=>window.location.reload(false)}>Go to Homepage</button>
        </div>
    )
}

export default Done;
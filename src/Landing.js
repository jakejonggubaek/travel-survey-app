function Landing(props) {

    return(
    <section className='landing-page' style={{ display: props.startActive === true ? 'flex' : 'none' }}>
        <h1>Welcome to Jake's Travel survey.</h1>
            <form className="start-form" onSubmit={props.handleStart}>
            <div>
                <label htmlFor='user-name'>Let us know your name: </label>
                    <input type="text" id='user-name' name='user-name' onChange={props.handleChange} required />
            </div>
            <button type='submit'>START</button>
        </form>
    </section>
    )
}

export default Landing;
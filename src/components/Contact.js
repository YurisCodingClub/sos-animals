import React from 'react';

const Contact = ({ prevStep, nextStep, handleChange, values }) => {
    const Next = e => {
        e.preventDefault();
        nextStep();
    }

    const Prev = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div className="form">
            <h1>Contact information</h1>
            <form className="contact">
                <label htmlFor="Name of reporter">Name of reporter</label>
                <input
                placeholder="Max Mustermann"
                type="text"
                value={values.name}
                onChange={handleChange('name')}
                />
                <label htmlFor="Phone number">Phone number</label>
                <input
                placeholder="+496674453634"
                type="tel"
                value={values.number}
                onChange={handleChange('number')}
                />
                <label htmlFor="Email adress">Email adress</label>
                <input
                placeholder="maxmustermann@gmail.com"
                type="email"
                value={values.email}
                onChange={handleChange('email')}
                />
                <h6>*If you want to get informed about the dog, leave your contact information!</h6>
            </form>
            <footer>
                <button onClick={Prev} className="btn nav-btn prev">Previous</button>
                <button onClick={Next} className="btn nav-btn next">Report</button>
            </footer>
        </div>
    )
}

export default Contact;
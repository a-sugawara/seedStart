import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const SearchForm = () => {
    const [term, setTerm] = useState('');
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/discover/${term}`)
    }

    return (
        <div className='searchbar-container'>
            <form className='form' onSubmit={handleSubmit}>
                <input
                className='searchbar-input'
                placeholder='Discover projects'
                onChange= {(e) => setTerm(e.target.value)}/>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchForm;

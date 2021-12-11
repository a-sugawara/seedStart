import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {searchProjects} from "../../store/project"

const SearchForm = () => {
    const [term, setTerm] = useState('');
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(searchProjects(term))
        if(term.length > 0)history.push(`/discover/${term}`)
    },[term])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchProjects(term))
        history.push(`/discover/${term}`)
    }

    return (
        <div className='searchbar-container'>
            <form className='search-form' onSubmit={handleSubmit}>
                <input
                className='searchbar-input'
                placeholder='Discover projects'
                value={term}
                onChange= {(e) => setTerm(e.target.value)}/>
                <button className='search-btn' type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchForm;

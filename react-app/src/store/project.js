const GET_ALL_PROJECTS = 'projects/GET_ALL'

const setAllProjects = (allProjects) => {
    return {
        type: GET_ALL_PROJECTS,
        payload: allProjects
    }
}

export const allProjects = () => async (dispatch) => {
    const response = await fetch('/api/projects/')
    console.log(response)
    if (response.ok) {
        const data = await response.json();
        dispatch(setAllProjects(data))

        return data;
      } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
      } else {
        return ['An error occurred. Please try again.']
      }
}

let initialState = {projects:null, currentProject:null}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PROJECTS:
            let newState = {...state}
            newState.projects = action.payload.projects
            return newState
        default:
            return state;
    }
}
export default reducer

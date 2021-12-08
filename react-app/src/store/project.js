const GET_ALL_PROJECTS = 'projects/GET_ALL'
const GET_ONE_PROJECT = 'projects/GET_ONE'
const CREATE_PROJECT = 'projects/CREATE_ONE'
const EDIT_PROJECT = 'projects/EDIT_ONE'
const REMOVE_ONE_PROJECT = 'projects/REMOVE_ONE'

const setAllProjects = (allProjects) => {
    return {
        type: GET_ALL_PROJECTS,
        payload: allProjects
    }
}

const getOneProject = (oneProject) => {
  return {
    type: GET_ONE_PROJECT,
    payload: oneProject
  }
}
const removeOneProject = (id) => {
  return {
    type: REMOVE_ONE_PROJECT,
    payload: id
  }
}

const postProject = (oneProject) => {
  return {
    type: CREATE_PROJECT,
    payload: oneProject
  }
}

const putProject = (oneProject) => {
  return {
    type: EDIT_PROJECT,
    payload: oneProject
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

export const oneProject = (id) => async(dispatch) => {
    const response = await fetch(`/api/projects/${id}`)
    if(response.ok) {
      const data = await response.json()
      dispatch(getOneProject(data))

      return data
    } else if (response.status < 500){
      const data = await response.json()
      if (data.errors) {
        return data.errors
      }
    } else {
      return ['An error occurred. Please try again.']
    }
}

export const createProject = (projectInfo) => async(dispatch) => {
  const response = await fetch(`/api/projects/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      projectInfo
    )
  })
  if (response.ok) {
    const data = await response.json()
    dispatch(postProject(data))
    return data;
  } else if (response.status < 500){
    const data = await response.json()
    if (data.errors) {
      return data.errors
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const editProject = (id, projectInfo) => async(dispatch) => {
  const response = await fetch(`/api/projects/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      projectInfo
    )
  })
  if (response.ok) {
    const data = await response.json()
    dispatch(putProject(data))
    return data;
  } else if (response.status < 500){
    const data = await response.json()
    if (data.errors) {
      return data.errors
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}
export const removeProject = (id) => async(dispatch) => {
  const response = await fetch(`/api/projects/${id}`,{
    method: 'DELETE',
  })
  dispatch(removeOneProject(id))
}

let initialState = {projects:[], currentProject:null}

const reducer = (state = initialState, action) => {
  let newState
    switch (action.type) {
        case GET_ALL_PROJECTS:
          newState = {...state}
          newState.projects = action.payload.projects
          return newState
        case GET_ONE_PROJECT:
          newState = {...state}
          newState.currentProject = action.payload
          return newState
        case CREATE_PROJECT:
          newState = {...state}
          newState.projects.push(action.payload)
          return newState
        case EDIT_PROJECT:
          newState = {...state}
          console.log(action.payload)
          const projectIdx = newState.projects.findIndex(project => project.id === action.payload.id)
          newState.projects[projectIdx] = action.payload
          return newState
        case REMOVE_ONE_PROJECT:
          newState = {...state}
          const projectRIdx = newState.projects.findIndex(project => project.id === action.payload)
          newState.projects.splice(projectRIdx, 1)
          return newState
        default:
            return state;
    }
}
export default reducer

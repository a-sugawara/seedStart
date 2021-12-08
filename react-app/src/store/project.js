const GET_ALL_PROJECTS = 'projects/GET_ALL'
const GET_ONE_PROJECT = 'projects/GET_ONE'
const CREATE_PROJECT = 'projects/POST_ONE'
const EDIT_PROJECT = 'projects/EDIT_ONE'
const REMOVE_ONE_PROJECT = 'projects/REMOVE_ONE'
const POST_BACKING = 'backings/POST_BACKING'
const POST_REWARD = 'rewards/POST_REWARD'

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

const postBacking = (backing) => {
  return {
    type: POST_BACKING,
    payload: backing
  }
}

const postReward = (reward) => {
  return {
    type: POST_REWARD,
    payload: reward
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
  const response = await fetch(`/api/projects/${id}`, {
    method: 'DELETE',
  })
  dispatch(removeOneProject(id))
}

export const newBooking = (bookingData) => async(dispatch) => {
  const response = await fetch('/api/backings/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(bookingData)
  })
  if (response.ok) {
    const data = await response.json()
    dispatch(postBacking(data))
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

export const createReward = (reward) => async(dispatch) => {
  const response = await fetch(`/api/rewards/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      reward
    )
  })
  if (response.ok) {
    const data = await response.json()
    dispatch(postReward(data))
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
        case POST_BACKING:
          newState = {...state}
          newState.currentProject.backing.push([action.payload.backed, action.payload.user_id])
          return newState
        case POST_REWARD:
          newState = {...state}
          newState.currentProject.rewards.push([action.payload.title, action.payload.description, action.payload.price])
          return newState
        default:
            return state;
    }
}
export default reducer

const GET_ALL_PROJECTS = 'projects/GET_ALL'
const GET_ONE_PROJECT = 'projects/GET_ONE'
const CREATE_PROJECT = 'projects/POST_ONE'
const EDIT_PROJECT = 'projects/EDIT_ONE'
const REMOVE_ONE_PROJECT = 'projects/REMOVE_ONE'
const GET_SEARCHED_PROJECTS = 'projects/GET_SEARCHED'

const POST_BACKING = 'backings/POST_BACKING'
const UPDATE_BACKING = 'backings/UPDATE_BACKING'

const POST_REWARD = 'rewards/POST_REWARD'
const UPDATE_REWARD = 'rewards/UPDATE_REWARD'
const DELETE_REWARD = 'rewards/DELETE_REWARD'

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

const putBacking = (backingInfo) => {
  return {
    type: UPDATE_BACKING,
    payload: backingInfo
  }
}

const postReward = (reward) => {
  return {
    type: POST_REWARD,
    payload: reward
  }
}

const setSearchedProjects = (projects) => {
  return {
    type: GET_SEARCHED_PROJECTS,
    payload: projects
  }
}

const updateReward = (rewardInfo) => {
  return {
    type: UPDATE_REWARD,
    payload: rewardInfo
  }
}

const deleteReward = (id) => {
  return {
    type: DELETE_REWARD,
    payload: id
  }
}

export const allProjects = () => async (dispatch) => {
    const response = await fetch('/api/projects/')
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
    return null;
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
    return null;
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
  if(response.ok) {
    dispatch(removeOneProject(id))
  } else if (response.status < 500){
    const data = await response.json()
    if (data.errors) {
      return data.errors
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const newBacking = (backingData) => async(dispatch) => {
  const response = await fetch('/api/backings/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(backingData)
  })
  if (response.ok) {
    const data = await response.json()
    dispatch(postBacking(data))
    return null;
  } else if (response.status < 500){
    const data = await response.json()
    if (data.errors) {
      return data.errors
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const updateBacking = (backingInfo, backingId) => async(dispatch) => {
  const response = await fetch(`/api/backings/${backingId}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(backingInfo)
  })
  if (response.ok) {
    const data = await response.json()
    dispatch(putBacking(data))
    return null;
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
    return null;
  } else if (response.status < 500){
    const data = await response.json()
    if (data.errors) {
      return data.errors
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const searchProjects = (searchTerm) => async (dispatch) => {
  const response = await fetch(`/api/projects/discover/${searchTerm}`);

  if (response.ok) {
      const projects = await response.json();
      dispatch(setSearchedProjects(projects));
  }
};

export const putReward = (rewardInfo, rewardId) => async (dispatch) => {
  const response = await fetch(`/api/rewards/${rewardId}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(rewardInfo)
  })
  if (response.ok) {
    const data = await response.json()
    dispatch(updateReward(data))
    return null;
  } else if (response.status < 500){
    const data = await response.json()
    if (data.errors) {
      return data.errors
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const removeReward = (rewardId) => async(dispatch) => {
  const response = await fetch(`/api/rewards/${rewardId}`, {
    method: 'DELETE'
  })
  if(response.ok) {
    dispatch(deleteReward(rewardId))
  } else if (response.status < 500){
    const data = await response.json()
    if (data.errors) {
      return data.errors
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

let initialState = {projects:[], currentProject:null, searchedProjects:null}

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
          const projectIdx = newState.projects.findIndex(project => project.id === action.payload.id)
          newState.projects[projectIdx] = action.payload
          newState.currentProject = action.payload
          return newState
        case REMOVE_ONE_PROJECT:
          newState = {...state}
          const projectRIdx = newState.projects.findIndex(project => project.id === action.payload)
          newState.projects.splice(projectRIdx, 1)
          return newState
        case POST_BACKING:
          newState = {...state}
          newState.currentProject.backing.push([action.payload.backed, action.payload.user_id, action.payload.id])
          newState.currentProject.backing = newState.currentProject.backing.slice()
          return newState
        case UPDATE_BACKING:
          newState = {...state}
          const backingIdx = newState.currentProject.backing.findIndex(backing => backing[1] === action.payload[1])
          newState.currentProject.backing[backingIdx] = action.payload
          return newState
        case POST_REWARD:
          newState = {...state}
          newState.currentProject.rewards.push([action.payload.title, action.payload.description, action.payload.price, action.payload.id])
          return newState
        case GET_SEARCHED_PROJECTS:
          newState = {...state}
          newState.searchedProjects = action.payload.projects
          return newState
        case UPDATE_REWARD:
          newState = {...state}
          const rewardIdx = newState.currentProject.rewards.findIndex(reward => reward[3] === action.payload.id)
          newState.currentProject.rewards[rewardIdx] = [action.payload.title, action.payload.description, action.payload.price, action.payload.id]
          newState.currentProject.rewards[rewardIdx] = newState.currentProject.rewards[rewardIdx].slice()
          return newState
        case DELETE_REWARD:
          newState = {...state}
          const rewardRIdx = newState.currentProject.rewards.findIndex(reward => reward[3] === action.payload)
          newState.currentProject.rewards.splice(rewardRIdx, 1)
          return newState
        default:
            return state;
    }
}
export default reducer

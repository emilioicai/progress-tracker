import { Dispatch } from 'redux';

/************ TYPES ************/
export interface IProject {
  progress: number;
  name: string;
}

export interface IProjectState {
  loading?: boolean;
  projects?: IProject[];
}

export interface IProjectAction {
  type: string;
  projects?: IProject[];
}

/************ ACTIONS ************/
const FETCH = 'sample-app/projects/FETCH';
const FETCH_SUCCESS = 'sample-app/projects/FETCH_SUCCESS';
const UPDATE = 'sample-app/projects/UPDATE';

/************ REDUCER ************/
export default function reducer(
  state: IProjectState = {},
  action: IProjectAction
) {
  switch (action.type) {
    case FETCH:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, projects: action.projects, loading: false };
    default:
      return state;
  }
}

/************ ACTION CREATORS ************/
export function fetchProjects() {
  return (dispatch: Dispatch<IProjectAction>) => {
    dispatch({ type: FETCH });
    getProjects(projects => {
      dispatch(fetchProjectsSuccess(projects));
    });
  };
}

export function fetchProjectsSuccess(projects: IProject[]) {
  return { type: FETCH_SUCCESS, projects };
}

export function updateProject(project: IProject) {
  return { type: UPDATE, project };
}

/************ SIDE EFFECTS ************/
// TODO: move these to external services
export function getProjects(cb: (projects: IProject[]) => any) {
  const mockProjects = [
    { name: 'Team1', progress: 10 },
    { name: 'Team2', progress: 35 },
    { name: 'Team3', progress: 3 }
  ];
  setTimeout(() => {
    cb(mockProjects);
  }, 1000);
}

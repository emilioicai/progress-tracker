import { combineReducers } from 'redux';
import projectsState, { IProjectState } from './projects';

export default combineReducers<{ projectsState: IProjectState }>({
  projectsState
});

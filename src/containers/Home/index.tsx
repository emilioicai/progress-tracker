import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ProgressCircle from '../../components/ProgressCircle';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import { fetchProjects, IProject } from '../../ducks/projects';

export interface IHomeProps {
  projects: IProject[];
  dispatch: Dispatch<any>;
}

class Home extends React.Component<IHomeProps> {
  public componentDidMount() {
    this.props.dispatch(fetchProjects());
  }

  public render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {this.props.projects.map(p => (
          <ProgressCircle progress={p.progress}>
            <Title>{p.name}</Title>
            <Subtitle>{p.progress + '%'}</Subtitle>
          </ProgressCircle>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  projects: state.projectsState.projects || []
});

export default connect(mapStateToProps)(Home as any);

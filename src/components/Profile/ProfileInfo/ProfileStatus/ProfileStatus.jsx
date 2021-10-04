import React from 'react';
import style from './ProfileStatus.module.scss';

class ProfileStatus extends React.Component {
    state = {
        status: this.props.status,
        editMode: false
    };        
    onChangeHandler = (event) => {
        let text = event.currentTarget.value;
        this.setState(() => ({
            status: text
        }));
    }
    activateMode = () => {
        this.setState(({
            editMode: true
        }));
    }
    deactivateMode = () => {
        this.setState(({
            editMode: false
        }));
        this.props.updateUserStatus(this.state.status);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState(({
                status: this.props.status
            }));
        }
    }
    render() {
        return (
            <div>
                {!this.state.editMode ?
                <div>
                    <span onClick={this.activateMode} className={style.userStatus}>{this.props.status}</span>
                </div> :
                <div>
                    <input onChange={this.onChangeHandler} 
                           onBlur={this.deactivateMode}
                           type="text" value={this.state.status} />
                </div>}
            </div>
        );
    }
}

export default ProfileStatus;

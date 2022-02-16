import React, { FC } from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { Input, Checkbox, Textarea } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utils/validators/validators';
import styles from '../../common/FormsControls/FormsControls.module.scss';
import { ContactsType, ProfileType } from '../../../types/types';

type OwnPropsType = {
    switchOnEditMode: (editMode: boolean) => void 
    contacts: ContactsType
}

const ProfileForm: FC<InjectedFormProps<ProfileType, OwnPropsType> & OwnPropsType> = props => {
    const handleClick = () => {
        props.switchOnEditMode(false);
    }
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button type="submit">Save</button>
                <button type="reset" onClick={handleClick}>Go to Profile without Saving</button>
            </div>
            {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
            <fieldset>
                <legend>User data: </legend>    
                <Field component={Input} name="fullName" type="text" label="Full name" placeholder="fullname" validate={[required]}/>
                <Field component={Textarea} name="aboutMe" cols="30" rows="3" placeholder="about you information..."/>
                <Field component={Textarea} name="lookingForAJobDescription" cols="30" rows="3" placeholder="describe the job you want..."/>
                <Field component={Checkbox} name="lookingForAJob" type="checkbox" label="looking for a job"/>
            </fieldset>            
            <fieldset>
                <legend>Contacts: </legend>
                {Object.keys(props.contacts).map(key => 
                    <Field component={Input} name={`contacts.${key}`} type="text" label={key} placeholder={key} key={key}/>    
                )}
            </fieldset>
        </form>
    )
}

export default reduxForm<ProfileType, OwnPropsType>({form: 'profileForm'})(ProfileForm);

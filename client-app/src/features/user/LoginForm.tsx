
import { PageHeader } from 'antd';
import { FORM_ERROR } from 'final-form';
import React, { useContext } from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import { combineValidators, isRequired } from 'revalidate';
import { Button, Form } from 'semantic-ui-react';
import ErrorMessage from '../../app/common/form/ErrorMessage';
import TextInput from '../../app/common/form/TextInput';
import { IUserFormValues } from '../../app/models/user';
import { RootStoreContext } from '../../app/stores/rootStore';

const validate = combineValidators({
    email: isRequired('email'),
    password: isRequired('password')
})

const LoginForm = () => {
    const rootStore = useContext(RootStoreContext);
    const { login } = rootStore.userStore;

    return (
        <FinalForm
            onSubmit={(values: IUserFormValues) => login(values).catch(error => ({
                [FORM_ERROR]: error
            }))}
            validate={validate}
            render={({ handleSubmit, submitting, submitError, invalid, pristine, dirtySinceLastSubmit }) => (
                <Form onSubmit={handleSubmit} error>
                    <PageHeader title='Login to Reactivities' />
                    <Field
                        name='email'
                        component={TextInput}
                        placeholder='Email'
                    />
                    <Field
                        name='password'
                        component={TextInput}
                        placeholder='Password'
                        type='password'
                    />
                    {submitError && !dirtySinceLastSubmit && (
                       <ErrorMessage error={submitError} text='Invalid username or password'/>)}
                    <Button
                        disabled={invalid && !dirtySinceLastSubmit || pristine}
                        loading={submitting}
                        color='twitter'
                        content='Login' />
                </Form>
            )}
        />
    )
}

export default LoginForm; 
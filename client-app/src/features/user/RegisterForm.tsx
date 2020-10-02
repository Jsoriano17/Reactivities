
import { PageHeader } from 'antd';
import Password from 'antd/lib/input/Password';
import { FORM_ERROR } from 'final-form';
import React, { useContext } from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import { combineValidators, isRequired } from 'revalidate';
import { Button, Form, Label } from 'semantic-ui-react';
import ErrorMessage from '../../app/common/form/ErrorMessage';
import TextInput from '../../app/common/form/TextInput';
import { IUserFormValues } from '../../app/models/user';
import { RootStoreContext } from '../../app/stores/rootStore';

const validate = combineValidators({
    username: isRequired('username'),
    displayName: isRequired('display name'),
    email: isRequired('email'),
    password: isRequired('password')
})

const RegisterForm = () => {
    const rootStore = useContext(RootStoreContext);
    const { register } = rootStore.userStore;

    return (
        <FinalForm
            onSubmit={(values: IUserFormValues) => register(values).catch(error => ({
                [FORM_ERROR]: error
            }))}
            // validate={validate}
            render={({ handleSubmit, submitting, submitError, invalid, pristine, dirtySinceLastSubmit }) => (
                <Form onSubmit={handleSubmit} error>
                    <PageHeader title='Sign up to Reactivities' />
                    <Field
                        name='username'
                        component={TextInput}
                        placeholder='Username'
                    />
                    <Field
                        name='displayName'
                        component={TextInput}
                        placeholder='Display Name'
                    />
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
                       <ErrorMessage error={submitError} text={JSON.stringify(submitError.data.errors)}/>)}
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

export default RegisterForm; 
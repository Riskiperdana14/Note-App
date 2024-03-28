import React, { useState } from 'react';

import {
    Alert,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
    useWindowDimensions,
} from 'react-native';
import { CreateNoteProps } from '../types/Screens';
import { CheckIcon } from '../components/Svg';
import { BackIcon } from '../components/Svg';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { CreateNoteForm } from '../types/Service';
import * as yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';
import { useCreateNote } from '../hooks/useNotes';

const CreateNote: React.FC<CreateNoteProps> = ({ navigation }) => {
    const { width } = useWindowDimensions();
    const [newNoteId, setNewNoteId] = useState<string | null>(null);
    const mutationCreateNote = useCreateNote();
    const addNoteInitialValue: CreateNoteForm = {
        title: '',
        desc: '',
    };
    const addNoteSchema: yup.ObjectSchema<CreateNoteForm> = yup.object().shape({
        title: yup.string().required('Title is required'),
        desc: yup.string().required('Description is required'),
    });

    const onSubmit = async (
        values: CreateNoteForm,
        actions: FormikHelpers<CreateNoteForm>,
    ) => {
        console.log('here', values);

        mutationCreateNote.mutate(values, {
            onSuccess: data => {
                navigation.replace('MainPage');
            },
            onError: error => {
                console.error('error', error);
            },
        });
    };

    return (
        <View
            style={{
                flex: 1,
            }}>
            <LinearGradient
                colors={['#FDF6B1', '#FEFCE5']}
                style={{
                    flex: 1,
                    width: '100%',
                }}>
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}>
                    <Formik
                        initialValues={addNoteInitialValue}
                        validationSchema={addNoteSchema}
                        onSubmit={(values, actions) =>
                            onSubmit(values, actions)
                        }>
                        {({
                            handleChange,
                            handleSubmit,
                            values,
                            isValid,
                        }: FormikProps<CreateNoteForm>) => (
                            <>
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#B1AC7C',
                                        padding: 20,
                                    }}>
                                    <Pressable
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: 10,
                                        }}
                                        onPress={() => navigation.goBack()}>
                                        <BackIcon />
                                    </Pressable>
                                    {values.desc && values.title && isValid && (
                                        <Pressable
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                padding: 10,
                                            }}
                                            onPress={() => handleSubmit()}>
                                            <CheckIcon />
                                        </Pressable>
                                    )}
                                </View>
                                <View
                                    style={{
                                        padding: 20,
                                    }}>
                                    <TextInput
                                        placeholder="Type your title"
                                        onChangeText={handleChange('title')}
                                        style={{
                                            fontSize: 34,
                                            fontFamily: 'Cabin-Regular',
                                        }}
                                    />
                                    <TextInput
                                        placeholder="Type here ..."
                                        onChangeText={handleChange('desc')}
                                        style={{
                                            fontSize: 17,
                                            fontFamily: 'Cabin-Regular',
                                        }}
                                        multiline
                                    />
                                </View>
                            </>
                        )}
                    </Formik>
                </ScrollView>
            </LinearGradient>
        </View>
    );
};

export default CreateNote;

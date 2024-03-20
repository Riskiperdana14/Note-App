import React from 'react';
import {
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

const CreateNote: React.FC<CreateNoteProps> = ({ navigation }) => {
    const { width } = useWindowDimensions();
    const addNoteInitialValue: CreateNoteForm = {
        title: '',
        desc: '',
    };
    const addNoteSchema: yup.ObjectSchema<CreateNoteForm> = yup.object().shape({
        title: yup.string().required('Title is required'),
        desc: yup.string().required('Description is required'),
    });

    const onSubmit = (values: CreateNoteForm) => {
        console.log('formik values', values);
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
                        onSubmit={values => onSubmit(values)}>
                        {({
                            handleChange,
                            handleSubmit,
                            values,
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
                                    {values.desc && values.title && (
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

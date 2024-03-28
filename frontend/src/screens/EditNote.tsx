import React, { useEffect, useState } from 'react';
import {
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
    useWindowDimensions,
} from 'react-native';
import { EditNoteProps } from '../types/Screens';
import { BackIcon } from '../components/Svg';
import { CheckIcon } from '../components/Svg';
import LinearGradient from 'react-native-linear-gradient';
import { usefindByIdAndUpdate } from '../hooks/useNotes';
import { EditNoteApiParams, EditNoteReq } from '../types/Service';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import * as yup from 'yup';

const EditNote: React.FC<EditNoteProps> = ({ navigation, route }) => {
    const { width } = useWindowDimensions();
    const mutationusefindByIdAndUpdate = usefindByIdAndUpdate();
    const { params } = route;
    const addNoteInitialValue: EditNoteReq = {
        title: '',
        desc: '',
    };
    const editNoteSchema: yup.ObjectSchema<EditNoteReq> = yup.object().shape({
        title: yup.string().required('Title is required'),
        desc: yup.string().required('Description is required'),
    });

    const onSubmit = async (
        values: EditNoteReq,
        actions: FormikHelpers<EditNoteReq>,
    ) => {
        const editNoteValue: EditNoteApiParams = {
            noteId: params.noteId,
            request: values,
        };

        mutationusefindByIdAndUpdate.mutate(editNoteValue, {
            onSuccess: data => {
                // console.log('data', data.data);
                navigation.replace('MainPage');
            },
            onError: error => {
                console.error('error', error);
            },
        });
    };

    const [note, setNote] = useState<EditNoteReq>();

    return (
        <View
            style={{
                flex: 1,
            }}>
            <LinearGradient
                colors={['#FDF6B1', '#FEFCE5']}
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}>
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}>
                    <Formik
                        initialValues={{
                            title: note?.title || '',
                            desc: note?.desc || '',
                        }}
                        validationSchema={editNoteSchema}
                        onSubmit={(values, actions) =>
                            onSubmit(values, actions)
                        }>
                        {({
                            handleChange,
                            handleSubmit,
                            values,
                            isValid,
                        }: FormikProps<EditNoteReq>) => (
                            <View>
                                <View
                                    style={{
                                        flex: 1,
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
                                </View>
                                <Text
                                    style={{
                                        fontFamily: 'Cabin-Italic',
                                        fontSize: 13,
                                        justifyContent: 'center',
                                        padding: 20,
                                    }}>
                                    Created at {params.formattedCreatedAt}
                                </Text>
                                <TextInput
                                    placeholder={params.title}
                                    onChangeText={handleChange('title')}
                                    value={values.title}
                                    style={{
                                        fontFamily: 'Cabin-Regular',
                                        fontSize: 34,
                                        padding: 20,
                                    }}
                                />
                                <TextInput
                                    placeholder={params.desc}
                                    onChangeText={handleChange('desc')}
                                    value={values.desc}
                                    multiline={true}
                                    style={{
                                        fontFamily: 'Cabin-Regular',
                                        fontSize: 25,
                                        // height: '45%',
                                    }}
                                />
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </LinearGradient>
        </View>
    );
};

export default EditNote;

import React, { useEffect, useState } from 'react';
import {
    Alert,
    Modal,
    Pressable,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
} from 'react-native';
import CardNotes from '../components/CardNotes';
import { PlusIcon } from '../components/Svg';
import { useGetAllNotes, usefindByIdAndDelete } from '../hooks/useNotes';
import { MainPageProps } from '../types/Screens';
import { GetNotesResponse } from '../types/Service';

const MainPage: React.FC<MainPageProps> = ({ navigation }) => {
    const { width } = useWindowDimensions();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedNoteId, setSelectedNoteId] = useState<string>('');
    const [deleteConfirm, setDeleteConfirm] = useState<boolean>(false);
    const [notes, setNotes] = useState<GetNotesResponse[]>([]);
    const mutationGetAllNotes = useGetAllNotes();
    const mutationDeleteNote = usefindByIdAndDelete();
    // console.log('notes: ', JSON.stringify(notes, null, 4));

    const handleDelete = (noteId: string) => {
        setSelectedNoteId(noteId);
        setModalVisible(true);
    };

    const handleConfirmDelete = () => {
        mutationDeleteNote.mutate(selectedNoteId, {
            onSuccess: () => {
                setModalVisible(false);
            },
            onError: (error: any) => {
                console.error('Error deleting note:', error);
                Alert.alert('Error', 'Failed to delete note');
                setModalVisible(false);
            },
        });
        setDeleteConfirm(true);
    };

    const handleCancelDelete = () => {
        setModalVisible(false);
    };

    useEffect(() => {
        mutationGetAllNotes.mutate(undefined, {
            onSuccess: response => {
                console.log(response);

                setNotes(response.data);
            },
            onError: error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(JSON.stringify(error.response.data, null, 4));
                    console.log(JSON.stringify(error.response.status, null, 4));
                    console.log(
                        JSON.stringify(error.response.headers),
                        null,
                        4,
                    );
                } else if (error.request) {
                    console.log(JSON.stringify(error.request), null, 4);
                } else {
                    console.log(JSON.stringify(error.message), null, 4);
                }
                console.log(JSON.stringify(error.config), null, 4);
            },
        });
        setDeleteConfirm(false);
    }, [deleteConfirm]);

    console.log('redered');

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#FDF6B1',
            }}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    padding: 20,
                }}>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: 20,
                        paddingBottom: 30,
                    }}>
                    <Text
                        style={{
                            fontFamily: 'Cabin-Regular',
                            fontSize: 34,
                            color: '#000000',
                        }}>
                        NoteApp
                    </Text>
                    <Pressable
                        style={{
                            backgroundColor: '#F9E830',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 10,
                            borderRadius: 100,
                        }}
                        onPress={() =>
                            console.log(navigation.navigate('CreateNote'))
                        }>
                        <PlusIcon />
                    </Pressable>
                </View>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: 20,
                    }}>
                    {notes.map(note => {
                        return (
                            <CardNotes
                                key={note._id}
                                desc={note.desc}
                                title={note.title}
                                onPress={() =>
                                    navigation.navigate('DetailNote', {
                                        noteId: note._id,
                                    })
                                }
                                onlongPress={() => handleDelete(note._id)}
                            />
                        );
                    })}
                </View>
            </ScrollView>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            backgroundColor: 'white',
                            padding: 20,
                            borderRadius: 10,
                        }}>
                        <Text>Are you sure you want to delete this note?</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                marginTop: 10,
                            }}>
                            <TouchableOpacity
                                onPress={() => handleConfirmDelete()}>
                                <Text style={{ color: 'red' }}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleCancelDelete}>
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default MainPage;

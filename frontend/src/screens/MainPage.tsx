import {
    Pressable,
    ScrollView,
    Text,
    View,
    useWindowDimensions,
    Modal,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import CardNotes from '../components/CardNotes';
import { PlusIcon } from '../components/Svg';
import { MainPageProps } from '../types/Screens';
import { GetNotesResponse } from '../types/Service';

const notes: GetNotesResponse[] = [
    {
        id: '1',
        title: 'Title 1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adip nonum et just sed diam non proident du contratibus et just sed diam non proident du tincidunt et just sed diam non proident',
    },
    {
        id: '2',
        title: 'Title 2',
        desc: 'Lorem ipsum dolor sit amet, consectetur adip nonum et just sed diam non proident du contratibus et just sed diam non proident du tincidunt et just sed diam non proident',
    },
    {
        id: '3',
        title: 'Title 3',
        desc: 'Lorem ipsum dolor sit amet, consectetur adip nonum et just sed diam non proident du contratibus et just sed diam non proident du tincidunt et just sed diam non proident',
    },
    {
        id: '4',
        title: 'Title 4',
        desc: 'Lorem ipsum dolor sit amet, consectetur adip nonum et just sed diam non proident du contratibus et just sed diam non proident du tincidunt et just sed diam non proident',
    },
];

const MainPage: React.FC<MainPageProps> = ({ navigation }) => {
    const { width } = useWindowDimensions();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);

    const handleDelete = () => {
        setModalVisible(true);
    };

    const handleDeleteNote = () => {
        console.log('Deleting note with id:', selectedNoteId);
        setModalVisible(false);
    };

    const handleConfirmDelete = () => {
        setModalVisible(false);
    };

    const handleCancelDelete = () => {
        setModalVisible(false);
    };

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
                                key={note.id}
                                desc={note.desc}
                                title={note.title}
                                onPress={() =>
                                    navigation.navigate('DetailNote', {
                                        noteId: note.id,
                                    })
                                }
                                onlongPress={() => {
                                    handleDelete();
                                }}
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
                            <TouchableOpacity onPress={handleConfirmDelete}>
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

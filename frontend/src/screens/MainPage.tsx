import {
    Pressable,
    ScrollView,
    Text,
    View,
    useWindowDimensions,
} from 'react-native';
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
                            />
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
};

export default MainPage;

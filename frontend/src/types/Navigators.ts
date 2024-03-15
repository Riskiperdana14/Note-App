import CreateNote from '../screens/CreateNote';
import DetailNote from '../screens/DetailNote';
import CardNotes from '../components/CardNotes';
import EditNote from '../screens/EditNote';

export type RootStackParamList = {
    MainPage: undefined;
    DetailNote: {
        noteId: string;
    };
    CreateNote: undefined;
    CardNotes: undefined;
    EditNote: undefined;
};

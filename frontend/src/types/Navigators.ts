export type RootStackParamList = {
    MainPage: undefined;
    DetailNote: {
        noteId: string;
    };
    CreateNote: undefined;
    CardNotes: undefined;
    EditNote: {
        noteId: string;
        formattedCreatedAt: string;
        title: string;
        desc: string;
    };
};

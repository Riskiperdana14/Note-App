import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './Navigators';

export type MainPageProps = NativeStackScreenProps<
    RootStackParamList,
    'MainPage'
>;
export type CreateNoteProps = NativeStackScreenProps<
    RootStackParamList,
    'CreateNote'
>;
export type DetailNoteProps = NativeStackScreenProps<
    RootStackParamList,
    'DetailNote'
>;
export type EditNoteProps = NativeStackScreenProps<
    RootStackParamList,
    'EditNote'
>;

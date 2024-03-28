import {
    Pressable,
    ScrollView,
    Text,
    View,
    useWindowDimensions,
} from 'react-native';
import { DetailNoteProps } from '../types/Screens';
import { BackIcon } from '../components/Svg';
import { PenIcon } from '../components/Svg';
import LinearGradient from 'react-native-linear-gradient';
import { useGetNoteById } from '../hooks/useNotes';
import { GetNotesResponse } from '../types/Service';
import { useEffect, useState } from 'react';
import moment from 'moment';

const DetailNote: React.FC<DetailNoteProps> = ({ navigation, route }) => {
    const mutationGetNoteById = useGetNoteById();
    const [note, setNote] = useState<GetNotesResponse>();
    const { width } = useWindowDimensions();
    const { params } = route;
    console.log('dibuatSaat', note?.dibuatSaat);
    console.log('dieditSaat', note?.dieditSaat);

    useEffect(() => {
        mutationGetNoteById.mutate(params.noteId, {
            onSuccess: note => {
                setNote(note.data);
            },
        });
    }, []);

    // Mendapatkan waktu sekarang
    const currentDiff = moment().diff(moment(note?.dieditSaat));

    // Menghitung selisih waktu antara waktu sekarang dan waktu yang diberikan
    const lastEditedDiff = moment.duration(currentDiff);

    // Mendapatkan jumlah jam yang telah berlalu sejak terakhir kali diedit
    const lastEditedHoursDiff = lastEditedDiff.asHours();

    // Format untuk menampilkan waktu yang telah berlalu sejak terakhir kali diedit
    let formattedLastEditedDiff = '';
    if (lastEditedDiff.asMinutes() < 1) {
        formattedLastEditedDiff = 'last edited just now';
    } else if (lastEditedHoursDiff > 24) {
        formattedLastEditedDiff = `last edited at ${lastEditedDiff
            .asDays()
            .toFixed(0)} days ago`;
    } else if (lastEditedHoursDiff < 24 && lastEditedHoursDiff > 1) {
        formattedLastEditedDiff = `last edited at ${lastEditedHoursDiff.toFixed(
            0,
        )} hours ago`;
    } else {
        const lastEditedMinutesDiff = lastEditedDiff.asMinutes().toFixed(0);
        formattedLastEditedDiff = `last edited at ${lastEditedMinutesDiff} minutes ago`;
    }

    const formattedCreatedAt = moment(note?.dibuatSaat).format('MMM D, YYYY');

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
                        <Pressable
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 10,
                            }}
                            onPress={() =>
                                navigation.navigate('EditNote', {
                                    noteId: params.noteId,
                                    formattedCreatedAt: formattedCreatedAt,
                                    desc: note ? note.desc : 'Title default',
                                    title: note ? note.title : 'Desc default',
                                })
                            }>
                            <PenIcon />
                        </Pressable>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <Text
                            style={{
                                fontFamily: 'Cabin-Italic',
                                fontSize: 13,
                                justifyContent: 'center',
                                padding: 20,
                            }}>
                            created at {formattedCreatedAt}
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Cabin-Italic',
                                fontSize: 13,
                                justifyContent: 'center',
                                padding: 20,
                            }}>
                            {formattedLastEditedDiff}
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontFamily: 'Cabin-Regular',
                                fontSize: 34,
                                color: '#000000',
                                padding: 20,
                            }}>
                            {note?.title}
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Cabin-Regular',
                                fontSize: 25,
                                color: '#000000',
                                padding: 20,
                            }}>
                            {note?.desc}
                        </Text>
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>
    );
};
export default DetailNote;

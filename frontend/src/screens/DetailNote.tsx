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

const DetailNote: React.FC<DetailNoteProps> = ({ navigation, route }) => {
    const { width } = useWindowDimensions();
    const { params } = route;

    console.log('params', params);

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
                            onPress={() => navigation.navigate('EditNote')}>
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
                            created at mar 8, 2024
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Cabin-Italic',
                                fontSize: 13,
                                justifyContent: 'center',
                                padding: 20,
                            }}>
                            last edited at 2 hours ago
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
                            Elementum
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Cabin-Regular',
                                fontSize: 25,
                                color: '#000000',
                                padding: 20,
                            }}>
                            Nullam vulputate nisl id ligula egestas posuere.
                            Pellentesque iaculis fermentum dui, volutpat blandit
                            velit fringilla eget. Vestibulum ultrices nisl nec
                            neque tincidunt maximus. Sed a dolor vel ipsum
                            lacinia tempor vel eget quam. Aenean et posuere
                            odio. Phasellus eu lacinia dolor, eget tristique
                            dui. Fusce quis massa libero. Fusce vulputate elit
                            ut metus condimentum consequat. Vivamus eget
                            faucibus neque. Praesent in libero rutrum, suscipit
                            ligula condimentum, tempus justo. Duis ac cursus ex.
                            Phasellus pulvinar egestas purus, id porta ex
                            iaculis sit amet. Quisque id ultrices dolor.
                            Curabitur mollis non felis quis dictum. Nunc eget
                            est nec turpis placerat feugiat.
                        </Text>
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>
    );
};
export default DetailNote;

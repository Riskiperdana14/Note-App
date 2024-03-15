import React from 'react';
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

const EditNote: React.FC<EditNoteProps> = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#FDF6B1',
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
                        onPress={() => navigation.goBack()}>
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
                    edited at 2 hours ago
                </Text>
                <TextInput
                    placeholder=""
                    style={{
                        fontFamily: 'Cabin-Regular',
                        fontSize: 34,
                        padding: 20,
                    }}>
                    Elementum
                </TextInput>
                <TextInput
                    multiline={true}
                    style={{
                        fontFamily: 'Cabin-Regular',
                        fontSize: 25,
                        padding: 20,
                    }}>
                    Nullam vulputate nisl id ligula egestas posuere.
                    Pellentesque iaculis fermentum dui, volutpat blandit velit
                    fringilla eget. Vestibulum ultrices nisl nec neque tincidunt
                    maximus. Sed a dolor vel ipsum lacinia tempor vel eget quam.
                    Aenean et posuere odio. Phasellus eu lacinia dolor, eget
                    tristique dui. Fusce quis massa libero. Fusce vulputate elit
                    ut metus condimentum consequat
                </TextInput>
            </ScrollView>
        </View>
    );
};

export default EditNote;

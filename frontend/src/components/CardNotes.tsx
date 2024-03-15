import { Pressable, Text, View, useWindowDimensions } from 'react-native';

type CardProps = {
    title: string;
    desc: string;
    onPress: () => void;
};

const CardNotes: React.FC<CardProps> = ({ desc, title, onPress }) => {
    const { width } = useWindowDimensions();

    return (
        <Pressable
            style={{
                backgroundColor: '#FEFCE5',
                width: width / 2 - 30,
                padding: 10,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: '#C9BC2C',
            }}
            onPress={onPress}>
            <Text
                style={{
                    fontFamily: 'Cabin-SemiBold',
                    fontSize: 18,
                    color: '#000000',
                }}>
                {title}
            </Text>
            <Text
                style={{
                    fontFamily: 'Cabin-Regular',
                    fontSize: 14,
                    color: '#000000',
                }}
                ellipsizeMode="tail"
                numberOfLines={10}>
                {desc}
            </Text>
        </Pressable>
    );
};

export default CardNotes;

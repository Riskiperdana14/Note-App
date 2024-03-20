import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type SectionProps = {
    title: string;
    desc: string;
};

const Section: React.FC<SectionProps> = ({ title, desc }) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View
            style={{
                display: 'flex',
                gap: 8,
            }}>
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
                numberOfLines={5}>
                {desc}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default Section;

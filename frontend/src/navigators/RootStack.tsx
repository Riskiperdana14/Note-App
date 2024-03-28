import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from '../screens/MainPage';
import CreateNote from '../screens/CreateNote';
import DetailNote from '../screens/DetailNote';
import EditNote from '../screens/EditNote';
import { RootStackParamList } from '../types/Navigators';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStacks = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainPage" key="MainPage" component={MainPage} />
            <Stack.Screen
                name="CreateNote"
                key="CreateNote"
                component={CreateNote}
            />
            <Stack.Screen
                name="DetailNote"
                key="DetailNote"
                component={DetailNote}
            />
            <Stack.Screen name="EditNote" key="EditNote" component={EditNote} />
        </Stack.Navigator>
    );
};

export default RootStacks;

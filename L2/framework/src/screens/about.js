import { View, Text, Button } from 'react-native'
import { screens } from '.'

export default ({ navigation }) => {

    return (
        <View>
            <Text>Moi</Text>
            {/* {screens.map((s)=><Button key={s.name} onPress={()=> navigation.navigate(s.name)}></Button>)} */}
            <Button title='Counter' onPress={() => navigation.navigate("Counter")}></Button>
            <Button title='Counter2' onPress={() => navigation.navigate("Counter2")}></Button>
            <Button title='Counter3' onPress={() => navigation.navigate("Counter3")}></Button>
            <Button title='Elements' onPress={() => navigation.navigate("Elements")}></Button>
            <Button title='OS' onPress={() => navigation.navigate("OS")}></Button>
        </View>)
}   
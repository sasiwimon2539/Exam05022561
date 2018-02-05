import React from 'react';
import {
    StyleSheet,
    Text,
    View, 
    ScrollView, 
    Alert
} from 'react-native';
import {
    Icon, 
    ListItem, 
    Avatar,
    SearchBar 
} from 'react-native-elements';
import LostData from './tab/LostData';
import {StackNavigation} from 'react-navigation';
 

export default class Home extends React.Component{
    constructor() {
        super();
        this.state = {};
    }

    static navigationOptions = {
        tabBarLabel: 'หน้าแรก',
        tabBarIcon: ({tintColor}) => <Icon name="home"  size={30} color={tintColor}/> 
    }
    

    getHome() {
        this.setState({

            //ชื่อตัวแปรออฟเจค
            listData: [
                {
                    id: 1,
                    imageURL: "https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4.jpg",
                    text: "Some Text1"
                },
                {
                    id: 2,
                    imageURL: "http://www.ultimateyoutubeguide.com/wp-content/uploads/2016/10/4-Custom-Thumbnail.jpg",
                    text: "Some Text2"
                },
            ]
        });
    }

    componentWillMount() { //อันนี้เป็นฟังค์ชั่นที่ให้แอพทำงาน ก่อนที่แอพจะ render หน้า
        this.getHome();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Header}>
                    <Text style={styles.TextHeader}>
                        FindThem
                    </Text>
                </View>
                <SearchBar
                    lightTheme
                    //onChangeText={someMethod}
                    //onClearText={someMethod}
                    icon={{ type: 'font-awesome', name: 'search' }}
                    placeholder='ค้นหา' 
                />
                <ScrollView>
                    
                    {
                        this.state.listData != null && //ตรวจสอบว่า this.state.listData เป็นค่าว่างหรือไม่ ถ้าไม่ให้ทำต่อข้างล่าง
                        this.state.listData.map((result, key) => { //วนลูปอาเรย์จนกว่าจะครบ
                            return (
                                //ListItem, Avatar เป็นฟังค์ชั่นใน react-native-elements ที่น้องโหลดมา
                                <ListItem 
                                    key={key} //สำหรับการใช้ฟังค์ชั่น map ต้องใส่ key ไว้บนสุดเสมอ โดยจะรันตั้งแต่ 0 ถึง อาเรย์ตัวสุดท้าย
                                    title={result.text}
                                    avatar={
                                        <Avatar
                                            large //ขนาด
                                            source={{uri: result.imageURL}} //url รูปภาพ
                                            imageProps={{ resizeMode: "stretch" }}
                                        />
                                    }
                                    underlayColor="#DDD" //เปลี่ยนสีตอนกด    
                                    onPress={() => Alert.alert(`this list id: ${result.id}`) } //กดแล้วเรียกฟังค์ชั่นอะไร                           
                                    
                                />
                            );
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    avatar: {
        height: 100,
        width: 80,
        backgroundColor: '#FFF',
    },
    Header:{
        flexDirection: 'row', 
        backgroundColor: '#399CFE', 
        height: 80, 
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    TextHeader:{
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'white',
    },
  });
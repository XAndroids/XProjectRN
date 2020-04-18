import React, {Component} from 'react'
import {CardView, CheckBox} from "../../components";
import {Image, Text, View} from "react-native";
import PropTypes from "prop-types";

export default class PublisherItem extends Component {
    constructor(props) {
        super(props);

        this.handleCheckChange = this.handleCheckChange.bind(this);
    }

    render() {
        const {item1} = this.props;

        return (
            <CardView cardElevation={2}
                      backgroundColor={'#00000000'}>
                <View style={{flexDirection: 'row', padding: 6, alignItems: 'center'}}>
                    <Image style={{width: 50, height: 50}}
                           source={require('../../../img/login_icon.png')}/>
                    <View style={{flex: 1, marginLeft: 8}}>
                        <Text style={{fontSize: 18, color: 'black'}}>{item1.name}</Text>
                        <Text
                            style={{
                                fontSize: 12,
                                color: '#73737373'
                            }}>{item1.subscribeNum}</Text>
                    </View>
                    <CheckBox style={{width: 50, height: 50, marginRight: 6}}
                              isChecked={item1.isSubscribed}
                              checkedIcon={require('../../../img/publisherlist_checkbox_selected.png')}
                              uncheckedIcon={require('../../../img/publisherlist_checkbox_add.png')}
                              onCheckedChange={this.handleCheckChange}/>
                </View>
            </CardView>
        );
    }

    handleCheckChange() {
        const {onItemPress, item1} = this.props;
        onItemPress(item1)
    }
}

PublisherItem.propTypes = {
    item1: PropTypes.object.isRequired,
    onItemPress: PropTypes.func
};

import React, {Component} from 'react'
import {FlatList, Modal, Text, View, TouchableWithoutFeedback} from 'react-native'
import {RadioButton} from '../../components'
import PropTypes from 'prop-types'

/**
 * 单选Modal
 */
export default class ChoiceModal extends Component {
    constructor(props) {
        super(props);
        this._onTypeItemPress = this._onTypeItemPress.bind(this)
    }

    render() {
        const backgroundStyle = {
            backgroundColor: this.props.visible ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff'
        };

        return (
            <Modal testID={this.props.testID}
                   visible={this.props.visible}
                   transparent={true}
                   onRequestClose={this.props.onRequestClose}>
                <View style={[{
                    flex: 1,
                    justifyContent: 'center',
                    paddingLeft: 25,
                    paddingRight: 25,
                    paddingTop: 42,
                    paddingBottom: 42
                }, backgroundStyle]}>
                    <View style={[{backgroundColor: 'white'}]}>
                        <Text style={{
                            height: 45,
                            color: 'black',
                            fontSize: 20,
                            fontWeight: 'bold',
                            textAlignVertical: 'bottom',
                            marginLeft: 30,
                            marginBottom: 8
                        }}>Select Publisher</Text>
                        <FlatList data={this.props.choiceList}
                                  renderItem={this._renderItemComponent}
                                  keyExtractor={(item, index) => index.toString()}/>
                    </View>
                </View>
            </Modal>
        );
    }

    _renderItemComponent = ({item, index}) => {
        return (
            <TouchableWithoutFeedback onPress={() => this._onTypeItemPress(item, index)}>
                <View style={{flexDirection: 'row', height: 47}}>
                    <RadioButton style={{marginLeft: 23, marginRight: 23}} isSelected={this.props.choiceIndex === index}
                                 size={12}/>
                    <Text style={{
                        flex: 1,
                        color: 'black',
                        fontSize: 18,
                        textAlignVertical: 'center'
                    }}>{item.name}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    _onTypeItemPress(item, index) {
        this.props.onSelectedTypeChanged(item, index);
    }
}

ChoiceModal.defaultProps = {
    visible: false,
    choiceIndex: -1,
};

ChoiceModal.propTypes = {
    testID: PropTypes.string,
    visible: PropTypes.bool,
    choiceList: PropTypes.array.isRequired,
    choiceIndex: PropTypes.number,
    onRequestClose: PropTypes.func,
    onSelectedTypeChanged: PropTypes.func
};

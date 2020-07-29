import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Button, Modal} from 'react-native';


export default class CategoriesSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      modalVisible: true,
      currentCat: '',
    }
    this.setModalVisible = this.setModalVisible.bind(this)
  }

  setModalVisible = (visible, e) => {
    this.setState({
      modalVisible: visible,
      currentCat: e,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <Modal visible={this.state.modalVisible}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>{this.state.currentCat}</Text>
            <Text style={styles.modalDescription}>this.props.categories.currentCat.description How about now Super long description that doesnt mean anything does it look ok? Or does it need to be fixed</Text>
            <View style={styles.modalButtons}>
              <TouchableHighlight  onPress={() => {this.setModalVisible(false)}}>
                <Text style={styles.modalText}>Back</Text>
              </TouchableHighlight>
              <TouchableHighlight  onPress={() => {console.log(`Pass to the Game View ${this.state.currentCat}`)}}>
                <Text style={styles.modalText}>Play</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

      <Text style={{fontSize: 35}}>Select A Category!</Text>
      <View style={styles.categories}>
        {props.categories.map((cat) => {
          return (
            <TouchableHighlight style={styles.button} onPress={() => {this.setModalVisible(true, cat.title)}}>
              <Text style={{fontSize: 20}}>{cat.title}</Text>
            </TouchableHighlight>
          )
        })}
      </View>
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
  button: {
    width: '40%',
    height: '15%',
    margin: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  },
  modal: {
    top: '20%',
    height: '50%',
    margin: '10%',
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'space-around',
    backgroundColor: 'dodgerblue',
  },
  modalTitle: {
    fontSize: 30,
    justifyContent: 'center'
  },
  modalDescription: {
    fontSize: 20,
    width: '90%',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
  },
  modalText: {
    fontSize: 25,
  }
});


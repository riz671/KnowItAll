import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Button, Modal} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class CategoriesSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      modalVisible: false,
      currentCat: '',
      endpoint: '',
    }
    this.setModalVisible = this.setModalVisible.bind(this)
  }

  setModalVisible = (visible, category, endpoint) => {
    this.setState({
      modalVisible: visible,
      currentCat: category,
      endpoint: endpoint
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <Modal visible={this.state.modalVisible}>
          <View style={styles.modal}>
            <Text style={styles.modalDescription}>Select {this.state.currentCat}?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity  onPress={() => {this.setModalVisible(false)}}>
                {/* <Text style={styles.modalText}>Back</Text> */}
                <Ionicons name="md-close-circle" size={50} color="red" />
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => this.props.history.push(`/${this.state.endpoint}`)}>
                {/* <Text style={styles.modalText}>Play</Text> */}
                <Ionicons name="md-checkmark-circle" size={50} color="green" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      <Text style={{fontSize: 35}}>Select a category!</Text>
      <View style={styles.categories}>
        {this.props.categories.map((cat, i) => {
          return (
            <TouchableOpacity key={i} style={styles.button} onPress={() => {this.setModalVisible(true, cat.title, cat.endpoint)}}>
              <Text style={{fontSize: 20}}>{cat.title}</Text>
            </TouchableOpacity>
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
    top: '30%',
    height: '20%',
    margin: '10%',
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'space-around',
    backgroundColor: 'dodgerblue',
  },
  modalDescription: {
    fontSize: 20,
    width: '90%',
    textAlign: 'center'
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
  },
  modalText: {
    fontSize: 25,
  }
});


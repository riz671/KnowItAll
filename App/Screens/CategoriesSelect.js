import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Button} from 'react-native';
import Modal from 'react-native-modal';
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

        <Modal isVisible={this.state.modalVisible} backdropColor={'black'}>
          <View style={styles.modal}>
            <Text style={styles.rulesTitle}>Rules</Text>

            <View style={styles.rules}>
              <Text style={styles.ruleText}>1. After a new question is revealed, the objective is to be the first team to answer the question.</Text>
              <Text style={styles.ruleText}>2. Once an answer is shouted out, you may check your answer.</Text>
              <Text style={styles.ruleText}>3. If you are correct, you receive a point. If not, the other team shall receive the point.</Text>
              <Text style={styles.ruleText}>4. If no team answers within the 30 seconds, call a draw and award no points.</Text>
              <Text style={styles.ruleText}>5. First team to 7 points Wins!!!</Text>
            </View>

            <Text style={styles.modalDescription}>Select {this.state.currentCat}?</Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity  onPress={() => {this.setModalVisible(false)}}>
                <Ionicons name="md-close-circle" size={50} color={'white'}/>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => this.props.history.push(`/${this.state.endpoint}`)}>
                <Ionicons name="md-checkmark-circle" size={50} color={'white'}/>
              </TouchableOpacity>
            </View>

          </View>
        </Modal>

      <Text style={{fontSize: 35, color: 'white'}}>Select a category!</Text>
      <View style={styles.categories}>
        {this.props.categories.map((cat, i) => {
          return (
            <TouchableOpacity key={i} style={styles.button} onPress={() => {this.setModalVisible(true, cat.title, cat.endpoint)}}>
              <Text style={styles.catText}>{cat.title}</Text>
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
    backgroundColor: '#383e4e',
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
    backgroundColor: '#5A91E8',
  },
  catText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  modal: {
    height: '60%',
    margin: '10%',
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'space-around',
    backgroundColor: '#5A91E8',
  },
  rulesTitle:{
    fontSize: 25,
    color: 'white',
  },
  rules:{
    width: '90%',
  },
  ruleText: {
    color: 'white',
    fontSize: 15,
    padding: 5,
  },
  modalDescription: {
    fontSize: 20,
    color: 'white',
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


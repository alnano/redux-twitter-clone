import React from 'react';
import PropTypes from 'prop-types';
import { default as ReactModal } from 'react-modal'
import { newDuckTop, pointer, newDuckInputContainer, 
  newDuckInput, submitDuckBtn, darkBtn } from './styles.css'
import { formatDuck }  from 'helpers/utils'

const modalStyle = {
  content: {
    width: 350,
    margin: '0px auto',
    height: 220,
    borderRadius: 5,
    background: '#EBEBEB',
    padding:0,
  },
}



const Modal = (props) => {
  function submitDuck () {
    // console.log('duck', props.duckText)
    // console.log('user', props.user)
    console.log('wtfffff', props)
    const use = {...props.user, name:'tom', avatar: 'dick',}
    props.duckFanout(formatDuck(props.duckText, use))
  }

  return (
    <span className={darkBtn} onClick={props.openModal}>
    {'duck'}
      <ReactModal style={modalStyle} isOpen={props.isOpen} onRequestClose={props.closeModal} contentLabel='Modal'>
        <div className={newDuckTop}>
          <span>{'compose new duck'}</span>
          <span onClick={props.closeModal} className={pointer}>{'x'}</span>
        </div>
        <div className={newDuckInput}>
          <textarea
            onChange={(e) => props.updateDuckText(e.target.value)}
            value={props.duckText}
            maxLength={140}
            type='text'
            className={newDuckInput}
            placeholder="whats on your mind?" />
        </div>
        <button 
          className={submitDuckBtn}
          disabled={props.isSubmitDisabled}
          onClick={submitDuck}>
          {'duck'}
        </button>
      </ReactModal>
    </span>
  );
};

const { object, string, func, bool } = PropTypes
Modal.Proptypes = {
  duckText: string.isRequired,
  isOpen: bool.isRequired,
  user: object.isRequired,
  isSubmitDisabled: bool.isRequired,
  openModal: func.isRequired,
  closeModal: func.isRequired,
  updateDuckText: func.isRequired,
}
export default Modal;
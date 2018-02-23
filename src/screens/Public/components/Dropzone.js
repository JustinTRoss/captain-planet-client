import React from 'react'
import { Icon } from 'semantic-ui-react'
import Dropzone from 'react-dropzone'

const FileDrop = ({ handleDropAccepted, text }) => (
  <Dropzone
    style={{
      height: '200px',
      fontSize: '14px',
      lineHeight: '22px',
      color: '#777',
      backgroundColor: '#FFF',
      textAlign: 'center',
      border: '2px solid #E5E5E5',
      backgroundSize: '30px 30px',
      backgroundImage:
        'linear-gradient(-45deg,#F6F6F6 25%,transparent 25%,transparent 50%,#F6F6F6 50%,#F6F6F6 75%,transparent 75%,transparent)',
      animation: 'stripes 2s linear infinite'
    }}
    onDropAccepted={handleDropAccepted}
  >
    <div
      style={{
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%) '
      }}
    >
      <Icon name="cloud upload" size="huge" />
      {text}
    </div>
  </Dropzone>
)

export default FileDrop

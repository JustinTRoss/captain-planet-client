import React, { Component } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

class CustomCard extends Component {
  state = {
    button1: true,
    button2: false,
    button3: false
  };

  chooseActive1 = e => {
    this.setState({
      button1: true,
      button2: false,
      button3: false
    });
  };

  chooseActive2 = e => {
    this.setState({
      button1: false,
      button2: true,
      button3: false
    });
  };

  chooseActive3 = e => {
    this.setState({
      button1: false,
      button2: false,
      button3: true
    });
  };

  render() {
    const { button1, button2, button3 } = this.state;
    const { image, header, meta, description, extra, options, handleMouseOver, handleMouseExit, id } = this.props;

    return (
      <Card style={{ width: '300px', flex: '0 0 auto', margin: '.5rem' }}>
        <Card.Content>
          <Image src={image} data-id={id} onMouseOver={handleMouseOver} onMouseOut={handleMouseExit} />
        </Card.Content>
        <Card.Content>
          <Card.Header style={{ fontSize: '12px' }}>{header}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <div className="ui three buttons">
            <Button size="small" basic active={button1} onClick={this.chooseActive1}>
              <span style={{ fontSize: '11px', textAlign: 'center' }}>{options[0]}</span>
            </Button>
            <Button size="small" basic active={button2} onClick={this.chooseActive2}>
              <span style={{ fontSize: '11px', textAlign: 'center' }}>{options[1]}</span>
            </Button>
            <Button size="small" basic active={button3} onClick={this.chooseActive3}>
              <span style={{ fontSize: '11px', textAlign: 'center' }}>{options[2]}</span>
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default CustomCard;

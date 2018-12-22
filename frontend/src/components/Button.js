import React from 'react'
import { Button } from 'reactstrap';

const MyButton = (props) => {

    const {
      buttonColor,
      fontColor
    } = props

    const buttonStyle = {
      backgroundColor: `${buttonColor}`,
      color: `${fontColor}`
    }

    return (
        <React.Fragment>
          <Button style={buttonStyle}>{props.children}</Button>
        </React.Fragment>
      );
}
  
export default MyButton;
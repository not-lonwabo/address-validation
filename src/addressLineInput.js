import 
  React, {
  Component
} from 'react';

export class AddressLineInput extends Component {

  constructor  (props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }
  
  
  render = () => {
    return (
      <input
        onChange={event => {this.setState({inputField: event.target.value})}}
      />
    );
  }
}
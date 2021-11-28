import
  React, {
  Component
} from 'react';

import AddressLineInput from './addressLineInput';

export class addressForm extends Component {

  onSubmit = () => {
    
  }

  render = () => {
    return (
      <form onSubmit>
        <AddressLineInput />
      </form>
    );
  }
}
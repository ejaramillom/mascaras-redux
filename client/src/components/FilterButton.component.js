import React from 'react';
import {
  Control,
  Input,
} from 'react-bulma-components/lib/components/form';
import '../App.css';

export const FilterButton = (props) => {
  return (
    <div>
      <Control>
        <Input size="small" onChange={props.onChange} name="product" type="product" placeholder="Product search" value={props.value} />
      </Control>
    </div>
  );
}

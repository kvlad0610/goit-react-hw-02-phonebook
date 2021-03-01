import { label, input } from './Filter.module.css';
const Filter = ({ value, onChange }) => (
  <label className={label}>
    Find contacts by name <br />
    <input className={input} type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;

import SelectInput from '../SelectInput';
import {http} from '../../helper';
import {useState} from 'react';

export const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [text, setText] = useState('');
  const [isOpen, setIsOpen] = useState(false);


  const onChangeText = (event) => {
    let searchTerm = event.target.value;
    setText(searchTerm);
    onSearchResults(searchTerm).catch(e => {
      new Error(e.message);
    });
  };

  const onSearchResults = async (term) => {
    let results = await http.get(`/search/users?q=${term}&per_page=5`);
    if (results.status === 200) {
      setIsOpen(true);
      setSearchResults(results.data.items);
    }
  };


  return (
    <div>
      <SelectInput
        isOpen={isOpen}
        label={''}
        onChangeText={onChangeText}
        name='Search'
        id={'login'}
        list={searchResults}
        value={text}/>
    </div>
  );
};
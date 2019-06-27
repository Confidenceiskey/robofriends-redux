import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
	return (
		<div style={{marginBottom: '20px'}}>
      <label>
  			<input 
        className='pa3 ba b--green bg-lightest-blue'
  			type='search'
        aria-label='search' 
  			placeholder='Search robots' 
        onChange={searchChange}
        />
      </label>
		</div>
	);
}
export default SearchBox;
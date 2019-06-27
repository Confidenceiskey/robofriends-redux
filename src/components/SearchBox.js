import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
	return (
		<div style={{marginBottom: '20px'}}>
      <label for='search' />
			<input 
      className='pa3 ba b--green bg-lightest-blue'
			type='search' 
      id='search'
			placeholder='Search robots' 
      onChange={searchChange}
      />
		</div>
	)
}
export default SearchBox;
import {MdSearch} from 'react-icons/md'
export default function Search({handleSearchNote}) {
    return (
        <div className="search">
            <MdSearch className="search-icons" size='1.3rem' />
            <input onChange={(event) =>
                handleSearchNote(event.target.value)}
                type='text'
                placeholder='type to search...' />
        </div>
    )
}
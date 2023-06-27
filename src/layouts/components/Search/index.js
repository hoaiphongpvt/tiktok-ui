import React, { useEffect, useRef, useState } from 'react';
import { faTimes, faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService'


const cx = classNames.bind(style);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const debounced = useDebounce(searchValue, 500)

    console.log(showResult)

    useEffect(() => {

        if (!debounced.trim()) {
            setSearchResult([])
            return
        }

        setLoading(true)

        const fetchAPI = async () => {
            setLoading(true)
            const result = await searchService.search(debounced)
            setSearchResult(result)
            setLoading(false)
        }

        fetchAPI()
        
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleShow = () => {
        setShowResult(false);
    }

    const handleChange = (e) => {

        const searchValue = e.target.value
        if (!searchValue.startsWith(' ') || searchValue.trim()) {
            setSearchValue(e.target.value)
        }
    }

    return (
        <div>
            <HeadlessTippy
            onClickOutside={handleShow}
            interactive
            appendTo={() => document.body}
            visible={setShowResult && searchResult.length > 0}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <h3 className={cx('search-title')}>Accounts</h3>
                    {searchResult.map(result => (
                        <AccountItem key={result.id} data={result} />
                    ))}
                </PopperWrapper>
                </div>
            )}
            >
            <div className={cx('search')}>
                <input
                placeholder="Search accounts and videos"
                spellCheck={false}
                ref={inputRef}
                value={searchValue}
                onChange={(e) => handleChange(e)}
                onFocus={() => setShowResult(true)}
                />

                {!!searchValue && !loading &&(
                <button className={cx('clear')} onClick={handleClear}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>}

                <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </HeadlessTippy>
        </div>
    );
}

export default Search;

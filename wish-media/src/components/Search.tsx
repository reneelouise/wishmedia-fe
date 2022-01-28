import { Dispatch, SetStateAction, useEffect } from 'react';
import '../styles/SearchStyles.css';

interface Props {
    setMedia: Dispatch<SetStateAction<[]>>;
    keyword: string;
    setKeyword: Dispatch<SetStateAction<string>>;

}

const Search = (props: Props) => {
    const { setMedia, keyword, setKeyword } = props;

    async function fetchInitialData() {
        const url = `https://itunes.apple.com/search?term=orange`;
        const result = await fetch(url).then(res => res.json());
        console.log(result);
        setMedia(result.results);
    }

    // const randomKeyword=['avril', 'orange', 'hello', 'adele' ]

    async function fetchData(event: any) {
        event.preventDefault();
        if (keyword.length > 0) {
            const url = `https://itunes.apple.com/search?term=${keyword}`;
            const result = await fetch(url).then(res => res.json());
            console.log(result);
            setMedia(result.results);
        } else {
            const url = `https://itunes.apple.com/search?term=avril`;
            const result = await fetch(url).then(res => res.json());
            console.log(result);
            setMedia(result.results);
        }
    }


    useEffect(() => {
        fetchInitialData()
    }, [])





    return (
        <form id="search" onSubmit={fetchData}>

            <input type="text" placeholder="Search your favourite media" onChange={event => setKeyword(event.target.value)}></input>
            <button>Search</button>
        </form>

    )
}

export default Search;

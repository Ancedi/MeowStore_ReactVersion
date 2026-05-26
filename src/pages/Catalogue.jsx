import {useState, useEffect} from "react";
import GetCats from "../components/API";
import '../css/CatalogueStyles.css';

function Catalogue(){
    const [text, setText] = useState("");
    const [allCats, setAllCats] = useState([]);

    useEffect(() => {
        async function loadCats(){
            const cats = await GetCats();
            console.log("cats:", cats);
            setAllCats(cats);
        }

        loadCats();
    }, []);

    const handleSearch = (e) => {
        setText(e.target.value);
    };

    const filteredSearch = allCats.filter((cat) => 
        cat.breeds[0].name.toLowerCase().includes(text.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={handleSearch}
                placeholder="Search..."
            />
            <p>Searching For: {text === "" ? "All" : text}</p>

            <ul className="grid">
                {filteredSearch.map((cat, index) =>{
                    return (
                        <li className="card" key={index}>
                            {cat.breeds[0].name}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Catalogue;
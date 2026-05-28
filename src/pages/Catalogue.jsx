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
        cat.breeds.length > 0 && cat.breeds[0].name.toLowerCase().includes(text.toLowerCase())
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
                {filteredSearch.map((cat) =>{
                    return (
                        <li className="card" key={cat.breeds[0].id}>
                            <p>{cat.breeds[0].reference_image_id}</p>
                            <p>{cat.breeds[0].name} Alt:{cat.breeds[0].alt_names || "N/A"}</p>
                            <p>{cat.breeds[0].origin}</p>
                            <p>{cat.breeds[0].temperament}</p>
                            <p>{cat.breeds[0].description}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Catalogue;
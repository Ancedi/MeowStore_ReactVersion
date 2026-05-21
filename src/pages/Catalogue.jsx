import {useState} from "react";

let AllCats = await GetCats();

function Search(){
    const [text, setText] = useState("");

    const handleSearch = (e) => {
        setText(e.target.value);
    };

    const filteredSearch = AllCats.filter((cat) => 
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
        </div>
    )
}
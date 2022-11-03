import Link from "next/link";
import {useState} from "react";

const BookCreate = () => {

    const [bookName, setBookName] = useState('')

    function handleSubmit(e){
        e.preventDefault();

        console.log(bookName)
    }

    return (
        <>
            <h1>BookCreate</h1>
            <p>{bookName}</p>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setBookName(e.target.value)}
                    value={bookName}
                    type="text"/>
                <button>Enviar</button>
            </form>
            <br/>
            <Link href="/libros">Book List</Link>
        </>

    )
}

export default BookCreate;

import Link from "next/link";
import {useState} from "react";

const BookCreate = () => {

    const [bookTitle, setBookTitle] = useState('')

    async function handleSubmit(e){
        e.preventDefault();
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books`, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title: bookTitle
            })
        })
        console.log(res)
    }

    return (
        <>
            <h1>BookCreate</h1>
            <p>{bookTitle}</p>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setBookTitle(e.target.value)}
                    value={bookTitle}
                    type="text"/>
                <button>Enviar</button>
            </form>
            <br/>
            <Link href="/libros">Book List</Link>
        </>

    )
}

export default BookCreate;

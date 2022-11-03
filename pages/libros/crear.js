import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/router";

const BookCreate = () => {
    const router = useRouter()
    const [bookTitle, setBookTitle] = useState('')
    const [errors, setErrors] = useState([]);

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
        if (res.ok){
            setErrors([])
            setBookTitle('')
            return router.push('/libros')

        }
        const data = await res.json();
        setErrors(data.errors);
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

                {errors.title && (
                    <span style={{
                        color: 'red', display: 'block'
                    }}>{errors.title}</span>
                )}

            </form>
            <br/>
            <Link href="/libros">Book List</Link>
        </>

    )
}

export default BookCreate;

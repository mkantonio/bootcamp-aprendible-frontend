import Link from "next/link";

export async function getStaticProps() {

    const res = await fetch('http://localhost:8000/api/books')

    const data = await res.json();
    console.log(data)

    return {
        props: {
            books: data
        }
    }
}

const BookList = ({ books }) => {
    return (
        <div>
            <pre> { JSON.stringify(books) } </pre>
            <h1>Libros</h1>

            <ul>
                <li> Libro 1</li>
            </ul>

            <Link href="/libros/crear">Create Book</Link>

        </div>
    )

}

export default BookList;

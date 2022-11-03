import Link from "next/link";

const BookList = () => {
    return (
        <div>

            <h1>Libros</h1>

            <ul>
                <li> Libro 1</li>
            </ul>

            <Link href="/libros/crear">Create Book</Link>

        </div>
    )

}

export default BookList;

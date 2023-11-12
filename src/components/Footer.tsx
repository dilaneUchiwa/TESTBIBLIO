export default function Footer(){
    return (
        <div>

        <span>

SET SERVEUR NAME IN SRC/API/AXIOS as baseURL <br />


YOU NEED TO CREATE AUTEUR AND GENRE <br />

POST    /api/auteur   body need nom <br />
POST    /api/genre    body need nom

<br /><br /><br />

IN BACKEND YOU SHOULD CREATE .env FILE AT / LIKE THIS <br />

PORT=5000
DATABASE_HOST='127.0.0.1'
DATABASE_NAME='bibliotheque'
DATABASE_USER='root'
DATABASE_PASSWORD='12345678'

        </span>

        </div>
    )
}
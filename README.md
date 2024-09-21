# Express.js API Documentation

## Overview

This project is a RESTful API built with Express.js and MongoDB. It provides CRUD (Create, Read, Update, Delete) operations for a `Post` model.

## Project Structure

```
.
├── server.js
├── config
│   └── db.js
├── controllers
│   └── Controller.js
├── models
│   └── Models.js
└── routes
    └── Routes.js
```

## Setup and Configuration

1. Install dependencies:
   ```
   npm install express mongoose dotenv
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=<your_preferred_port>
   MONGO_URI=<your_mongodb_connection_string>
   ```

3. Start the server:
   ```
   node server.js
   ```

## API Endpoints

| Method | Endpoint     | Description                 |
|--------|-------------|-----------------------------|
| POST   | /api/v1/post | Create a new post           |
| GET    | /api/v1/post | Retrieve all posts          |
| GET    | /api/v1/post/:id | Retrieve a specific post   |
| PUT    | /api/v1/post/:id | Update a specific post     |
| DELETE | /api/v1/post/:id | Delete a specific post     |

## Models

### Post

- `title` (String, required): The title of the post
- `body` (String, required): The content of the post

## Controllers

The `Controller.js` file contains the following functions:

- `PostData`: Create a new post
- `GetData`: Retrieve all posts
- `GetDataById`: Retrieve a specific post by ID
- `UpdateData`: Update a specific post by ID
- `DeleteData`: Delete a specific post by ID

## Error Handling

The API includes basic error handling for database operations and invalid requests. Error responses include a status code and an error message.

## Database Connection

The application uses MongoDB as its database. The connection is established in the `db.js` file using Mongoose.

## Running the Application

1. Ensure MongoDB is running and accessible.
2. Start the server using `node server.js`.
3. The server will start on the specified PORT, and you should see a console message indicating the server is running and connected to the database.

## API Usage Examples

### Create a Post

```
POST /api/v1/post
Content-Type: application/json

{
  "title": "My First Post",
  "body": "This is the content of my first post."
}
```

### Get All Posts

```
GET /api/v1/post
```

### Get a Specific Post

```
GET /api/v1/post/:id
```

### Update a Post

```
PUT /api/v1/post/:id
Content-Type: application/json

{
  "title": "Updated Post Title",
  "body": "This is the updated content of the post."
}
```

### Delete a Post

```
DELETE /api/v1/post/:id
```

## Notes

- Make sure to handle CORS if you're calling this API from a different origin.
- Consider adding authentication and authorization for production use.
- Implement input validation and sanitization for enhanced security.
 
 

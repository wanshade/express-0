# Express.js MongoDB API

This project is a RESTful API built with Express.js and MongoDB, providing CRUD operations for a simple blog post system.

## Features

- Create, Read, Update, and Delete blog posts
- MongoDB integration for data persistence
- Basic error handling and input validation

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version 12.x or higher recommended)
- MongoDB installed and running
- Git for version control (optional)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/wanshade/express-0.git
   cd express-0
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   PORT=3000
   MONGO_URI=your database
   ```
   Replace `your database` with your MongoDB connection string.

## Usage

To start the server, run:

```
npm run dev
```

The server will start on the port specified in your `.env` file (default is 3000).

## API Endpoints

| Method | Endpoint     | Description                 |
|--------|-------------|-----------------------------|
| POST   | /api/v1/post | Create a new post           |
| GET    | /api/v1/post | Retrieve all posts          |
| GET    | /api/v1/post/:id | Retrieve a specific post   |
| PUT    | /api/v1/post/:id | Update a specific post     |
| DELETE | /api/v1/post/:id | Delete a specific post     |

## Example API Usage

### Create a Post

```
POST http://localhost:3000/api/v1/post
Content-Type: application/json

{
  "title": "My First Post",
  "body": "This is the content of my first post."
}
```

### Get All Posts

```
GET http://localhost:3000/api/v1/post
```

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

## Contributing

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## License

This project is open source and available under the [MIT License](LICENSE).


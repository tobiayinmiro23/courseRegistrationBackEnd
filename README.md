
# courseRegistrationBackEnd

The back end for the school portal repo built with express and mongoDB. 

## 🚀 Features

- sign up
- login in
- add course functionality
- view course functionality 
- edit course functionality 
- delete course functionality
- hashing of sensitive information
- Secure info storage in a mong0DB database


## 📋 Prerequisites

- Node.js >= 18 
- PostgreSQL database
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/courseRegistrationBackEnd.git
   ```
2. **Enter directory**
   ```bash
   cd courseRegistrationBackEnd
   ``` 
3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/databasename"
   ```

5. **Start the development server**
   ```bash
   npm start 
   ```

## 🏗️ Project Structure

```
├── controller/      # For recieving requests and providing responses
├── model/            # Contains database schema 
├── route/            # For handling routing
├── service/         # Contains business business logic and database queries
├── helperFunction/         # Contains utility/helper functions
├── server.js         # Backend entry point
```

## 📚 API Documentation

### Users
- `POST /user/login` - for user login 
- `POST /user/signin` - for user signin 
  
### Comment
- `GET /comments/:id` - Get a particular comments
- `POST /comments/` - Create a new comment
- `PUT /comments/` - Update a comment
- `DELETE /comments/` - Delete a comment

## 📝 Environment Variables

- `DATABASE_URL`: PostgreSQL database connection string

## 📦 Dependencies

- **bcryptjs**:  *for hashing passwords and sensitive information*  
- **cors**:  *for cross origin resource sharing*  
- **nanoid**:  *for generating unique id*
- **pg**:  *for connecting to postgres database and writing sql queries*
- **nodemon**:  *for server development process*


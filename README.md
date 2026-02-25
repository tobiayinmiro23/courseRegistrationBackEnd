
# courseRegistrationBackEnd

The back end for the school portal repo built with express and mongoDB. 

## 🚀 Features

- sign up
- login in
- add course functionality
- view course functionality 
- delete course functionality
- hashing of sensitive information
- Secure info storage in a mongoDB database
- reset password


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
   DATABASE_URL=""
   USERNAME=""
   PASSWORD=""
   SECRETEKEY="
   
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

* `POST /signin` – Sign in user
* `POST /login` – Log in user
* `POST /getPhoto` – Get students photo
* `POST /addCourse` – Add a new course
* `POST /addMultipleCourse` – Add multiple courses at once
* `POST /allCourse` – Get all courses
* `DELETE /deleteCourse/:id` – Delete a course by ID
* `POST /forgotPassword` – Request password reset
* `POST /updateProfilePicture` – Update profile picture


## 📝 Environment Variables

- `DATABASE_URL`: mongoDB database name
- `USERNAME`: mongoDB username
- `PASSWORD`: mongoDB password
- `SECRETEKEY`: secrete key to verify jwt


  ## 🔒 Authentication

Sensitive API routes are protected by JWT authentication. Include the JWT token in the token header:

```
token: <your-token>
```


## 📦 Dependencies

- **bcryptjs**:  *for hashing passwords and sensitive information*  
- **cors**:  *for cross origin resource sharing*  
- **nanoid**:  *for generating unique id*
- **jsonwebtoken**:  *for creating tokens for authentication and authorization*
- **nodemon**:  *for server development process*
- **mongodb**:  *for database*
- **mongoose**:  *an Object Data Modeling (ODM) library for Node.js for structuring and managing data in MongoDB using JavaScript*


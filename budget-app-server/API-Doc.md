**BUDGET APPLICATION API DOCUMENTATION**
----

BUDGET APPLICATION is app that track our income, expenses and the balance, and all the data is stored / fetched via REST API to backend server. 
This app has :
* RESTful endpoint
* JSON formatted response

List of available endpoints:
​
- `POST /users/register`
- `POST /users/login`
- `POST /budget/`
- `POST /budget/income`
- `POST /budget/expense`

### POST /users/register`

> Register User

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "user": {
    "email": "string",
    "password": "string",
    "_id": "string-id"
    },
  "message": "string"
}
```

* **Success Response:**

  * **Code:** 201 CREATED<br />
    **Content:** `{
      "user": {
          "email": "user3@mail.com",
          "password": "$2a$10$9YP4.hOJTVGcKkowZTnwAu0vItPIOp0el0HlSk3OISZv8dqkKsye.",
          "_id": "607f348f30365837302225ec"
      },
      "message": "Add new User successfully"
    }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{
      "errorCode": "Validation error",
      "message": "Please enter email and password"
    }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{
        "errorCode": "Internal server error",
        "message": "Unexpected error."
    }`

### POST /users/login`

> Login User

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
    "access_token": "string",
    "id": "string-id"
}
```

* **Success Response:**

  * **Code:** 201 CREATED<br />
    **Content:** `{
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDdmMGJiZmI4NDBmOTJjODQ0NzNlMWYiLCJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2MTg5NDk0NjN9.vLBtLB8sE_eHXcRxO4wuEF9rJ2xVNL3C2T5aiDa3Qxk",
      "id": "607f0bbfb840f92c84473e1f"
    }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{
      "errorCode": "Validation error",
      "message": "Please enter email and password"
    }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{
        "errorCode": "Internal server error",
        "message": "Unexpected error."
    }`


### `GET /budget/`

> Get list of all budget (where they have UserId for user)

Request:

- data:

```json
{
  "UserId": "<your token id>",
}
```

Response:

- status: 200
- body:
  ​

```json
{
  "budget": [
    {
      "_id": "string-id",
      "UserId": "string-id",
      "income": "integer",
      "detail": "string"
    },
    ....
}
```
* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{
      "budget": [
        {
            "_id": "607f1ea37a427b09143305c8",
            "UserId": "607f0bbfb840f92c84473e1f",
            "income": 1000000,
            "detail": "Gajian"
        },
        {
            "_id": "607f1f07fbd6032d305b6b6c",
            "UserId": "607f0bbfb840f92c84473e1f",
            "income": 1000000,
            "detail": "Gajian"
        },
        ...
      ]
    },`
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{
      "errorCode": "Unauthorized",
      "message": "Please login first"
    }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{
        "errorCode": "Internal server error",
        "message": "Unexpected error."
    }`

### `POST /budget/income`

> Create new Income

Request:

- data:

```json
{
  "income": "string",
  "detail": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "UserId": "string",
  "income": "integer",
  "detail": "string",
  "_id": "string-id"
}
```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
      "UserId": "607f0bbfb840f92c84473e1f",
      "income": 1000000,
      "detail": "Makan Mekdi",
      "_id": "607f37d430365837302225ed"
    }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{
      "errorCode": "Validation error",
      "message": "Input invalid"
    }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{
        "errorCode": "Internal server error",
        "message": "Unexpected error."
    }`

### `POST /budget/expense`

> Create new Income

Request:

- data:

```json
{
  "expense": "string",
  "detail": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "UserId": "string",
  "expense": "integer",
  "detail": "string",
  "_id": "string-id"
}
```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
      "UserId": "607f0bbfb840f92c84473e1f",
      "expense": 1000000,
      "detail": "Makan KFC",
      "_id": "607f38a630365837302225ee"
    }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{
      "errorCode": "Validation error",
      "message": "Input invalid"
    }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{
        "errorCode": "Internal server error",
        "message": "Unexpected error."
    }`

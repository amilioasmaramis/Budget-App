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

### `POST /users/register`

> Register User

Request:

- data:

```json
{
  "username": "string",
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
    "username": "string",
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
          "username": "test",
          "email": "test@mail.com",
          "password": "$2a$10$C74Ey2yYfMdlOTa7DXuMK.uJCTztaFbXoSfAjkrM40lToTc/vLhLi",
          "_id": "60803b1f1a34192140d9a646"
      },
      "message": "Add new User successfully"
    }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{
      "errorCode": "Validation error",
      "message": "Please enter username, email and password"
    }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{
        "errorCode": "Internal server error",
        "message": "Unexpected error."
    }`

### `POST /users/login`

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
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwM2IxZjFhMzQxOTIxNDBkOWE2NDYiLCJlbWFpbCI6InRlc3RAbWFpbC5jb20iLCJpYXQiOjE2MTkwMjM5NTF9.DUqmaiDpave2Wi3HUkA6QAMxuUM6KP-obD_alXJreVg",
      "id": "60803b1f1a34192140d9a646",
      "username": "test"
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
      "detail": "string",
      "createdAt": "date"
    },
    ....
}
```
* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{
      "budget": [
        {
            "_id": "60808c77f8e54b018c61aff8",
            "UserId": "60803b1f1a34192140d9a646",
            "expense": 15000,
            "detail": "Bayar Cicilan",
            "createdAt": "2021-04-21T20:35:03.961Z"
        },
        {
            "_id": "60808c48a0d8c6392c4d2205",
            "UserId": "60803b1f1a34192140d9a646",
            "income": 100000,
            "detail": "Gajian",
            "createdAt": "2021-04-21T20:34:16.976Z"
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
  "_id": "string-id",
  "createdAt": "date"
}
```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
      "UserId": "60803b1f1a34192140d9a646",
      "income": 1000000,
      "detail": "Gajian",
      "createdAt": "2021-04-21T20:37:15.931Z",
      "_id": "60808cfba20df60c14d02324"
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
  "_id": "string-id",
  "createdAt": "date"
}
```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
      "UserId": "60803b1f1a34192140d9a646",
      "expense": 1000000,
      "detail": "Makan KFC",
      "createdAt": "2021-04-21T20:37:51.515Z",
      "_id": "60808d1fa20df60c14d02325"
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

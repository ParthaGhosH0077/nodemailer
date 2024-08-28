# nodemailer

# Email Notification Node.js Application

This Node.js application demonstrates how to send automated email notifications using the `nodemailer` module. It prompts the user for a recipient's email address and sends a predefined message. This application can be useful for scenarios like sending password reset emails or order confirmations.

## Features

- Prompts the user for a recipient's email address.
- Sends an email with a predefined subject and message body.
- Uses `nodemailer` for sending emails.
- Handles errors using a `try-catch` block.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 10 or higher)
- [npm](https://www.npmjs.com/get-npm)

## Setup and Installation

1. **Clone the repository** (or create the necessary files in a directory):
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install the necessary dependencies**:
    ```bash
    npm install nodemailer
    ```

## Usage

1. **Run the application**:
    ```bash
    node output.js
    ```

2. **Enter the recipient's email address** when prompted in the console.

3. The application will send an email with the subject "Coding Ninjas" and the message "The world has enough coders; be a coding ninja!".

## Code Explanation

### index.js

The main logic of the application is encapsulated in the `Solution` function. Here's a breakdown of what the code does:

- **Import Modules**: Imports `nodemailer` for sending emails, `readline` for reading input from the console, and `promisify` from the `util` module for handling promises.
- **Create a Transporter**: Sets up the email transporter using `nodemailer` with Gmail service and provided credentials.
- **Prompt for Input**: Uses `readline` to ask the user for the recipient's email address.
- **Send Email**: Sends the email using the `sendMail` method, which is wrapped in a `try-catch` block for error handling.
- **Handle Errors**: Logs any errors that occur during the email sending process and ensures the `readline` interface is closed using a `finally` block.

### output.js

This file imports the `Solution` function from `index.js` and executes it:

```javascript
import Solution from "./index.js";

Solution();

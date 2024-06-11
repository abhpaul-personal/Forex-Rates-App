# Forex Rates App

## Project Description

The Forex Rates App is a web application built using Node.js, Express.js, Axion (for REST APIs) and EJS. The application allows users to fetch and display the latest Forex rates. The app has three primary features:
1. Render the latest Forex rates for all currencies.
2. Render the latest Forex rates for a specific currency (feature to be implemented).
3. Render the latest Forex rates between two currencies (feature to be implemented).

## Features

- **Render Latest Forex Rates for All Currencies**: Users can view the latest Forex rates for all currencies based on the Euro (EUR) as the base currency.

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/forex-rates-app.git
    cd forex-rates-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the server**:
    ```bash
    node app.js
    ```

4. **Access the application**:
    Open your browser and go to `http://localhost:3000`.

## Dependencies

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **EJS**: Embedded JavaScript templating engine
- **Axios**: Promise-based HTTP client for the browser and Node.js
- **Body-Parser**: Middleware to parse incoming request bodies

## Project Requirements

Refer to the [Product Requirements Document](Product%20Requirements%20Document.docx) for detailed requirements and wireframes.

## Usage

- Navigate to the home page to see a message waiting for data.
- Navigate to `/latest` to fetch and display the latest Forex rates with EUR as the base currency.

## Best Practices and Recommendations

- **Security**:
  - Sanitize user inputs to prevent XSS attacks.
  - Implement CSRF protection for form submissions.

- **Validation**:
  - Ensure server-side validation of form inputs.
  - Add client-side validation for better user experience.

- **Error Handling**:
  - Implement comprehensive error handling for all routes.
  - Provide user-friendly error messages.

- **Documentation**:
  - Add comments to the code to improve readability and maintainability.

- **Testing**:
  - Write unit tests for key functionalities to ensure the application works as expected.
  - Perform manual testing to verify that all features work correctly across different browsers and devices.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

## Contact

For any questions or inquiries, please contact [abhpaul@gmail.com](mailto:abhpaul@gmail.com).

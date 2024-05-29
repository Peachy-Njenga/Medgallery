# MedGallery

MedGallery is a React application designed to manage and display patient information alongside their corresponding images. This application provides a user-friendly interface for healthcare professionals to upload patient images along with their relevant data, facilitating efficient organization and accessibility of medical records.

## Features

- **Gallery Display**: View uploaded patient images in a gallery format for easy browsing.
- **Patient Information**: Display patient information alongside their respective images.
- **Image Upload**: Upload images of patients directly into the application.
- **User Authentication**: Utilizes Auth0 for secure user authentication.

## Setup

Follow these steps to set up the MedGallery repository from scratch:

### Prerequisites

Make sure you have the following installed on your system:

- Node.js and npm (Node Package Manager)
- Git

### Clone the Repository

```bash
https://github.com/Peachy-Njenga/Medgallery.git
```

### Navigate to the Project Directory

```bash
cd Medgallery
```

### Install Dependencies

```bash
npm install
```

### Configuration

1. **Auth0 Configuration**: Set up an account on Auth0 (https://auth0.com/) if you haven't already. Create a new application and note down the client ID and domain.

2. Create a `.env` file in the root directory of the project and add the following variables:

   ```plaintext
    REACT_APP_API_KEY=your-api-key
    REACT_APP_AUTH_DOMAIN=your-auth-domain
    REACT_APP_PROJECT_ID=your-project-id
    REACT_APP_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_APP_ID=your-app-id
    REACT_APP_AUTH0_DOMAIN=your-auth0-domain
    REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
   ```

### Running the Application

```bash
npm start
```

The application should now be running on `http://localhost:3000`.

## Usage

1. **Authentication**: Users will need to sign in using their Auth0 credentials.

2. **Uploading Images**: Navigate to the upload section to upload patient images. Ensure you provide the necessary patient information along with the image.

3. **Viewing Gallery**: Browse through the gallery to view uploaded patient images. Clicking on an image should display the corresponding patient information.

## Contributing

Contributions are welcome! Please follow the standard guidelines for contributing to open source projects.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- Auth0 for providing secure authentication services.
- React community for the wonderful framework.

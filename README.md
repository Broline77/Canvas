# BlogByte Website mvp

## [Live version](https://broline.pythonanywhere.com)


BlogByte is a user-friendly image-sharing platform designed for artists and individuals alike. It provides a simple and seamless experience, enabling users to create accounts, share their creative images, and connect with fellow enthusiasts. This README provides an overview of the project, instructions for setup, and key features.

## Features

- **User Registration and Authentication**✔: Users can create accounts, sign in, and securely manage their profiles.

- **Profile Management**✔: Users can update their profile pictures, bios, and current locations.

- **Image Upload**✔: Users can upload and share images, add captions, and view images from other users.

- **Like and Download**✔: Users can like posts and download images they find interesting.

- **Follow and Connect**🔧*in development* : Users can follow other users to stay updated with their posts and activities. 

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Python (3.6 or higher)
- Django (3.2 or higher)
- PostgreSQL (optional, for production)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Broline77/Canvas.git
   ```

2. Change the working directory:

   ```bash
   cd blogbyte
   ```

3. make a virtual environment and activate it:
   ```bash
    python -m venv virtualenv

    source virtualenv/bin/activate # For Linux
    source virtualenv/scripts/activate # For Windows
   ```


4. Install the required packages:

   ```bash
   pip install -r requirements.txt
   ```

5. Apply database migrations:

   ```bash
   python manage.py migrate
   ```

6. Start the development server:

   ```bash
   python manage.py runserver
   ```

7. Access the website at [http://localhost:8000/](http://localhost:8000/).

## Usage

1. Create an account or sign in.
2. Update your profile information and add a profile picture.
3. Upload images with captions.
4. Like and download images.
5. Explore and enjoy the BlogByte community.

## Contributing

I welcome contributions! If you'd like to contribute to the project feel free to:
* Fork the repository.
* Create a new branch: git checkout -b feature/your-feature
* Make your changes and commit them: git commit -m 'Add feature'
* Push to the branch: git push origin feature/your-feature
* Submit a pull request.


## Frontend still in devolopment🔧



## Authors

[Broline Oronu](https://github.com/Broline77).


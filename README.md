# Minimal Front-End of Cafeteria Website

This web application is built using Django, Python, HTML, CSS, and JavaScript. The project aims to provide an online presence for our cafe, allowing customers to browse our menu, get in touch with us, and provide feedback. Customers can explore various food and beverage options and search for their favorite cuisines using the search box.

## Features

- **Home**: A landing page introducing the cafe, displaying the cafe's logo, and a brief description. Visitors can get a glimpse of the cafe's ambiance and specialties.

- **Menu**: A page showcasing the cafe's food and beverage menu, including descriptions and prices. Customers can easily browse through various food categories and discover the cafe's offerings.

- **Contact**: A contact page providing the cafe's location, contact information, and a feedback form for customer inquiries. This enables users to reach out to the cafe with their questions, suggestions, or concerns.

- **Responsive Design**: The website is designed to be responsive and mobile-friendly, ensuring a seamless experience for users across different devices, including smartphones and tablets.

## Getting Started

To run this Django project locally on your machine, follow these steps:

1. Clone the repository to your local system using the following command:
```
git clone https://github.com/ananya-gta/cafeteria-website.git
```

2. Navigate to the project directory:
```
cd cafeteria-website
```

3. Create a virtual environment to isolate dependencies:

```
python -m venv venv
```

4. Activate the virtual environment:

- On Windows:

  ```
  venv\Scripts\activate
  ```

- On macOS and Linux:

  ```
  source venv/bin/activate
  ```

5. Install the required dependencies:

```
pip install -r requirements.txt

```

6. Run the Django development server:

```
python manage.py runserver
```

7. Open your web browser and go to `http://127.0.0.1:8000/` to access the cafeteria website.

## Contributing

I welcome contributions to enhance the cafeteria website. To contribute, follow these steps:

1. Fork the repository on GitHub.

2. Create a new branch from the `main` branch.

3. Make your changes and improvements to the code.

4. Test your changes thoroughly to ensure they don't introduce any issues.

5. Commit your changes with descriptive commit messages.

6. Push your changes to your forked repository.

7. Open a pull request, and we will review your contribution.

## License

This project is licensed under the [MIT License](LICENSE).

## Screenshots
#### > This is the landing page of the cafeteria website. Customers are greeted with a welcoming interface displaying our cafe's logo and a popular menu of the cafe.

![Home Page](/static/screenshots/home.jpeg)

#### > The navigation bar features a dropdown menu with three enticing options: "Cakes," "Beverages," and "Food Items." Each option leads to its respective landing page. Refer to the screenshots below.

![Menu Page](/static/screenshots/cakes-menu.jpeg)
![Menu Page](/static/screenshots/food-menu.jpeg)
![Menu Page](/static/screenshots/beverages-menu.jpeg)

#### > Clicking 'About' in the navigation bar takes you to About page

![About Page](/static/screenshots/about.jpeg)


#### > The website features a convenient Search Pop-Up that allows customers to search for their favorite cuisines or dishes easily. When users search for an item that is not available on our menu, a helpful pop-up message will appear, stating "Oops! The item is not available." This feature ensures a smooth user experience and informs customers when their desired item is not currently offered.

![Search Pop-up](/static/screenshots/search.jpeg)


#### > Customers can find the cafe's location and contact information on this page. Additionally, they can use the feedback form to reach out with their inquiries.

![Contact Page](/static/screenshots/contact.jpeg)

---------------------------------------------------------------------------------------------------------------------------------------------------







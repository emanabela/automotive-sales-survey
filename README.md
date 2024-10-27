# Automotive Sales Customer Survey

This react app is a client-side application that allows users to take part in a survey about their automotive experience.
It stores the survey data in the browser's local storage and displays a summary of the results.

## Features
- Survey form with questions about age, gender, car ownership, driving experience, emissions concerns, and number of cars owned along with the make and models.

- For the make of the cars owned, the user can select from a dropdown list of brands.

- For the model of the cars owned, the user has a text input field to enter the model name. If a BMW model is entered,proper validation is added to confirm the model in question. A toast is shown to the user if the validation fails. (The check has been built in a way so that further validation can easily be added in the future for other models)

## Survey Conditions
- The user must be at least 18 years old to participate in the survey.
- If the user does not have a driving license, the survey ends.
- If the user is between 18 and 25 years old, (bonus question) they must own more than one car.

## Analysis
- The survey data is stored in the browser's local storage.
- The survey data is displayed in a summary table, which shows the key metrics of the survey and the distribution of the car makes and models.
  - An additional key metric was created for the type of users which met the conditions to be a targetable client, however no cars where owned. These are called: "Licensed without cars".
- Two pie charts are displayed to demonstrate the distribution of the respondents and the preferred drive trains.
- A bar chart is displayed to demonstrate the distribution of the cars make and model.

## Additional Features
- From the home page, the user can generate random data to simulate a survey and clear the local storage.

## Technologies Used
- React
- Vite
- Tailwind CSS
- DaisyUI
- React Hot Toast
- Zustand
- React Router
- Recharts

## Installation
1. npm install
2. npm run dev

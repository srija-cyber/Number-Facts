# 📊 Number-Facts

This is a simple and interactive web application that allows users to enter any number and get interesting facts about it using an external API. Built using **HTML**, **Tailwind CSS**, and **JavaScript**, the app offers a clean UI and provides real-time feedback with a loading spinner.

## 🚀 Features

- 🎯 Enter a number and press **Enter** to get a fact
- 🔄 Spinner appears while fetching data
- ✨ Responsive design using Tailwind CSS
- 🌐 Uses `https://apis.ccbp.in/numbers-fact` to fetch facts

## 🛠️ Technologies Used

- HTML5
- Tailwind CSS
- JavaScript (Vanilla)
- Fetch API


## 🧠 How it Works

1. User enters a number into the input field.
2. When they press the **Enter** key:
   - If the field is empty, an alert prompts the user to enter a number.
   - If a number is entered:
     - A spinner appears.
     - A GET request is made to the API.
     - The response is parsed and the fact is shown on the screen.
     - The spinner is hidden once the fact is displayed.


## 🧪 API Used

- **Endpoint:** `https://apis.ccbp.in/numbers-fact?number={your_number}`
- **Method:** `GET`
- **Response:** JSON object containing a `fact` key.

Example:
```json
{
  "fact": "7 is the number of colors of the rainbow."
}
```
# Connect With Me

For any queries or collaboration opportunities, feel free to reach out:

Email: dhanwadasrijagmail.com

LinkedIn: www.linkedin.com/in/dhanwada-srija

GitHub: https://github.com/srija-cyber

# Fork It:

Love this project? Feel free to fork it and add your own enhancements!

Click the Fork button on GitHub.

Clone your forked repository.

Make your modifications and improvements.

Submit a pull request if you'd like to contribute back.

# License:

This project is licensed under the MIT License. You are free to use, modify, and distribute it with proper attribution.

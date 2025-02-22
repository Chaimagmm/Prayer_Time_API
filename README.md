# Prayer Time App

## 📌 Overview
This project is a simple web application that fetches and displays prayer times based on a user's input city. It retrieves latitude and longitude using the Nominatim API and then fetches prayer times using the Aladhan API. The app also determines the next upcoming prayer based on the current time.

## 🚀 Features
- Fetches latitude and longitude for a given city.
- Retrieves accurate prayer times from the Aladhan API.
- Displays the next prayer dynamically based on the current time.
- Handles cases where the next prayer is Fajr after Isha.
- Updates results dynamically when a new city is entered.

## 🔧 Technologies Used
- **JavaScript** for handling API calls and logic.
- **HTML & CSS** (UI not yet implemented).
- **OpenStreetMap Nominatim API** for geolocation.
- **Aladhan API** for prayer times.

## 🛠 Setup & Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Chaimagmm/Prayer_Time_API.git
   ```
2. Open `index.html` in your browser.
3. Enter a city name and click search to fetch prayer times.

## ⚠️ To-Do (Future Improvements)
- Implement a user-friendly UI using HTML, CSS, and Bootstrap.
- Improve error handling and UI feedback.
- Add additional features like notifications for prayer times.

## 📜 License
This project is open-source and available under the MIT License.


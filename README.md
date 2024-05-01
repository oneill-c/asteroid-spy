# Asteroid Spy :comet:

Asteroid Spy is a mobile application designed to visualize asteroids and comets using data from [NASA's Near-Earth Object (NEO) API](https://api.nasa.gov/). Built with Expo React Native, it provides users with an interactive experience to explore celestial objects that pass close to Earth.
![Screenshot 2024-04-30 at 9 10 12 PM](https://github.com/oneill-c/asteroid-spy/assets/11299155/27ad83be-6a7c-463a-b4d2-736101710191)

## Features :sparkles:

- **Near-Earth Objects:** Explore data on objects that approach or intersect Earth's orbit. Choose dates and really hone in on the asteroids you are interested in.
- **Visualization:** View detailed information and trajectories of asteroids and comets.

### Coming Soon
- **Customization:** Filter and search for specific asteroids based on criteria such as size, distance, and velocity.
- **Notifications:** Receive alerts for upcoming celestial events and potential hazards.
- **More Data:** A whole new detail section showing even more data about each individual NEO
- **Dark Mode:** Set the app to a dark theme to really feel like you're in space.

## Getting Started

Follow these steps to run the Asteroid Spy app locally:

### Prerequisites

- Node.js installed on your machine
- Expo CLI installed globally (`npm install -g expo-cli`)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/asteroid-spy.git
   ```

2. Navigate to the project directory:

   ```bash
   cd asteroid-spy
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

### Running the App

1. Duplicate `.env.local.default` and name the new file `.env.local`
   ```bash
   cp .env.local.default .env.local
   ```

3. Start the development server:

   ```bash
   npx expo start
   ```

4. Open the Expo Go app on your mobile device.

5. Scan the QR code displayed in the terminal using the Expo Go app.

6. The app should now be running on your device.

## Known bugs 🐛
* iOS: When changing the date, the date will update when the date is chosen from the spinner instead of waiting for the user to click OK.
* ANDROID - When clicking to view live mode, the eyes on asteroids website will sometimes not load in Earth correctly

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

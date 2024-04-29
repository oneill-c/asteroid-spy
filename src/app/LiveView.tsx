import { WebView } from "react-native-webview";

const LiveView = () => {
  return (
    <WebView
      source={{
        uri: "https://eyes.nasa.gov/apps/asteroids/#/planets/earth",
      }}
    />
  );
};

export default LiveView;

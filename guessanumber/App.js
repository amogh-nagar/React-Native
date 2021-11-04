import GameOverScreen from "./screens/GameOverScreen";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

import * as Font from "expo-font";

const fetchfonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [selectednumber, setselectednumber] = useState();
  const [numberofrounds, setrounds] = useState(0);

  const [dataloaded, setdataloaded] = useState(false);

  if (!dataloaded) {
    return (
      <AppLoading
        startAsync={fetchfonts}
        onFinish={() => setdataloaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const configurenewgamehandler = () => {
    setrounds(0);
    setselectednumber(null);
  };
  const gameoverhandler = (numofrounds) => {
    setrounds(numofrounds);
  };
  const startgamehandler = (selectedn) => {
    setselectednumber(selectedn);
    setrounds(0);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />

      {!selectednumber && <StartGameScreen onStart={startgamehandler} />}
      {selectednumber && numberofrounds <= 0 && (
        <GameScreen userchoice={selectednumber} onGameOver={gameoverhandler} />
      )}

      {numberofrounds > 0 && (
        <GameOverScreen
          onRestart={configurenewgamehandler}
          userchoice={selectednumber}
          rounds={numberofrounds}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

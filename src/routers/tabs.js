import { useState } from "react";

import { BottomNavigation } from "react-native-paper";
import Home from "../screens/home";
import NewSubjet from "../screens/newsubjet";
import { primaryColor } from "../config/colors";

export default TabsScreens = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "Home",
      title: "Inicio",
      focusedIcon: "home-automation",
      unfocusedIcon: "home",
    },
    {
      key: "NewSubjet",
      title: "Nueva Materia",
      focusedIcon: "note-edit",
      unfocusedIcon: "note",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: Home,
    NewSubjet: NewSubjet,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor="blue"
      inactiveColor="red"
    />
  );
};

import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import { cardHeight, cardWidth } from "../../constants/board";
import Logo from "../Logo";

const CardBack = ({ height, style, width }) => (
  <View style={[styles.root, style]}>
    <ImageBackground
      source={require("../../artwork/card-back.png")}
      style={styles.root}
    >
      <Logo width={80} height={24} fill="#fff" />
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  root: {
    width: cardWidth,
    height: cardHeight,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 8,
  },
});

export default CardBack;

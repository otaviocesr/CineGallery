import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcome: {
    fontFamily: "Minecrafter.Reg.ttf",
    fontSize: 40,
    fontWeight: 600,
    color: 'white',
  },

  meditation: {
    fontSize: 17,
    fontWeight: 600,
    color: 'white',
    textAlign: "center"
  },

  viewSignUp: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row"
  },

  textloginbtn: {
    color: "white",
    fontSize: 25,
    fontWeight: 600,
  },

  btnsign: {
    color: "white",
    fontWeight: 'bold',
  },

  loginDiv: {
    width: 250,
    height: 240,
    borderRadius: 16,
    backgroundColor: "rgba(51, 204, 76, 0.3)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1",
    backdropFilter: "blur(4.3px)",
    WebkitBackdropFilter: "blur(4.3px)",
    border: "1px solid rgba(0, 255, 41, 0.29)",
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    padding: 5,
    borderWidth: 1,
  },

  gobackbtn: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(45, 119, 30, 0.7)",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    top: 70,
    left: 50,
  },

  resetButton: {
    backgroundColor: "#34d399",
    padding: 10,
    borderRadius: 10,
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1
  },

  loginbtn: {
    width: "80%",
    height: 50,
    borderRadius: 16,
    backgroundColor: "rgba(0, 255, 41, 0.3)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1",
    backdropFilter: "blur(4.3px)",
    WebkitBackdropFilter: "blur(4.3px)",
    border: "1px solid rgba(0, 255, 41, 0.29)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 70,
  }
})

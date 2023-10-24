import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerTitle: {
    flex:1,
    paddingHorizontal:24,
    paddingTop:75,
    backgroundColor:'#0D0D0D',
    alignItems: 'center'
  },
  title: {
    color: "#4EA8DE",
    fontSize: 20,
    fontWeight: '900'
  },
  container: {
    flex:1,
    paddingHorizontal:24,
    paddingTop:75,
    backgroundColor:'#1A1A1A',
    alignItems: 'center'
  },
  containerInput: {
    flexDirection: 'row',
    gap: 4
  },
  input: {
    height: 54,
    width: 271,
    fontSize: 16,
    backgroundColor: "#262626",
    color: "#F2F2F2",
    padding: 16,
    borderRadius: 6
  },
  containerChecked: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textCreatedContainer: {
    flexDirection: 'row',
    gap: 8
  },
  textCreated: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: '700'
  },
  textChecked: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: '700'
  }
})
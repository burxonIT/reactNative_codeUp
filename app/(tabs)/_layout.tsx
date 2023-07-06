import { Link, Tabs } from "expo-router"

export default () =>  {
    return (
    <Tabs>
      <Tabs.Screen name="home" options={{ headerShown: false }} />
      {/* <Tabs.Screen name="profile1" /> */}
    </Tabs>
  )
}
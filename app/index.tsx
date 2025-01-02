import { Link, Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return <Redirect href="/welcome" />;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/welcome">Welcome</Link>
      <Link href="/sign-up">Sign up</Link>
      <Link href="/login">Login</Link>
      <Link href="/forgot-password">Forgot Password</Link>
      <Link href="/reset-password">Reset Password</Link>
    </View>
  );
}

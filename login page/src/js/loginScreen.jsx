import Header from "./header";
import LoginSignupTabs from "./loginSignupTabs";
import LoginForm from "./loginForm";
import LoginWithGoogle from "./loginWithGoogle";

function LoginScreen() {
  return (
    <div>
      <Header />
      <LoginSignupTabs />
      <LoginForm />
      <LoginWithGoogle />
      <button className="w-full rounded-lg px-6 py-2">
        <a href="#" className="text-sm font-medium text-primary underline">
          ثبت نام در سایت
        </a>
      </button>
    </div>
  );
}

export default LoginScreen;

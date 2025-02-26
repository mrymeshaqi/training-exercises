import Input from "./input";
import Button from "./button";

function LoginForm() {
  return (
    <form className="space-y-5">
      <Input label="شماره همراه" type="text" name="phone" />
      <div className="mb-20">
        <Input label="کلمه عبور" type="password" name="password" />
        <a href="#" className="float-left text-[10px] text-primary my-2">
          کلمه عبور خود را فراموش کرده اید؟
        </a>
      </div>

      <Button textContent="ورود به سایت" />
    </form>
  );
}

export default LoginForm;

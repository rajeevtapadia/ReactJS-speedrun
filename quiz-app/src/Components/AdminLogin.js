import "../assets/AdminLogin.css";

export default function AdminLogin() {
  return (
    <>
      <form>
        <p>Admin login</p>
        <input placeholder={"username"} type={"text"}></input>
        <input placeholder={"password"} type={"password"}></input>
        <button type="submit">submit</button>
      </form>
    </>
  );
}

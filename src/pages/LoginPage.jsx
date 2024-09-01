import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const LoginPage = ({ setIsAuth }) => {
  const handleClick = () => {
    // Google ile giriş yap
    signInWithPopup(auth, provider)
      // Başarılı olursa yetkiyi true'ya çek
      .then((res) => {
        setIsAuth(true);

        // Locale token olarak kaydet
        localStorage.setItem("token", res.user.refreshToken);
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="login">
        <h1>Chat Odası</h1>
        <p>Devam Etmek İçin Giriş Yap</p>

        <button onClick={handleClick}>
          <img src="google-logo.svg" alt="" width={"50px"} />
          <span>Google ile Gir</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

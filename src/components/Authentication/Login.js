
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useGlobalContext } from "../../Context";

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { alert,setAlert } = useGlobalContext();
  const handleSubmit = async () => {
    if (!email || !password) {
      setAlert({
        open: true,
        message: "Please fill all the Fields",
        type: "error",
      });
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setAlert({
        open: true,
        message: `Login Successful. Welcome ${result.user.email}`,
        type: "success",
      });
      console.log(result);
      
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
      return;
    }
  };

  return (
							<>

								<div class="form-group">
									<label for="exampleInputEmail1">Email address</label> <input
										type="email" class="form-control" name="email"
										id="exampleInputEmail1" aria-describedby="emailHelp"
										placeholder="Enter email" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
								</div>
								<div class="form-group">
									<label for="exampleInputPassword1">Password</label> <input
										type="password" name="password" class="form-control"
										id="exampleInputPassword1" placeholder="Password"  value={password}
        onChange={(e) => setPassword(e.target.value)}/>
								</div>
								
								
								<div class="form-check">
									<button
										class="btn primary-background btn-outline-light"  onClick={handleSubmit}>Submit</button>

								</div>
                            </>	
  );
};

export default Login;
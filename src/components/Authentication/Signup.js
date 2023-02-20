
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useGlobalContext } from "../../Context";
import 'react-toastify/dist/ReactToastify.css';
import Alert from "../Alert";

const Signup = ({ handleClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { setAlert } = useGlobalContext();

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            setAlert({
                open: true,
                message: "Passwords do not match",
                type: "error",
            });
            console.log("message");
            return;
        }

        try {
            const result = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            setAlert({
                open: true,
                message: `Sign Up Successful. Welcome ${result.user.email}`,
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
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label> <input
                    type="password" name="password" class="form-control"
                    id="exampleInputPassword1" placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">conform Password</label> <input
                    type="password" name="password" class="form-control"
                    id="exampleInputPassword1" placeholder="Password" value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>

            <div class="form-check">
                <button
                    class="btn primary-background btn-outline-light" onClick={handleSubmit}>Submit</button>

            </div>

        </>
    );
};

export default Signup;
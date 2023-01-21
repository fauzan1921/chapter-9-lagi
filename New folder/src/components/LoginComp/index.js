import React, { useCallback, useState } from "react";
import { Container, Card, Form } from "react-bootstrap";
// import { useAuth } from "../../App";
import SAlert from "../Alert";
import TextInputWithLabel from "../TextInputWithLabel";
import SButton from "../Button";
import { useAuth } from "../Context/auth";
import { redirect, useNavigate } from "react-router-dom";

function RegisterComp() {
  const { signin, user } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const hendleSumbitLogin = async () => {
    try {
      setIsLoading(true);
      if (!form.email || !form.password)
        throw new Error("Email and password are required.");

      await signin(form.email, form.password);

      navigate("/", { state: user });
      // redirect("/dashboard");
    } catch (err) {
      setIsLoading(false);

      setAlert({
        status: true,
        message: err?.message ?? "Internal server error",
        type: "danger",
      });
      console.log(err);
    }
  };

  return (
    <Container md={12} className="my-5">
      <div className="m-auto" style={{ width: "50%" }}>
        {alert.status && <SAlert type={alert.type} message={alert.message} />}
      </div>
      <Card style={{ width: "18rem" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form>
            <TextInputWithLabel
              label="Email Address"
              name="email"
              value={form.email}
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
            />

            <TextInputWithLabel
              label="Password"
              name="password"
              value={form.password}
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <SButton
              loading={isLoading}
              disabled={isLoading}
              action={hendleSumbitLogin}
              variant="primary"
            >
              Submit
            </SButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RegisterComp;

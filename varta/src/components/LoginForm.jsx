import { useRef, useState } from "react";
import { Form, redirect, useNavigation, useActionData } from "react-router-dom";
import style from "./styles/LoginForm.module.css";
import AppServices from "../services/app";
import ErrorModal from "./ErrorModal";

const LoginForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const modal = useRef();

  const data = useActionData();
  let errors = data?.response?.data?.non_field_errors;

  if (errors) {
    modal.current.open();
  }

  const handleCloseModal = () => {
    errors = undefined;
  };

  return (
    <div>
      <ErrorModal errors={errors} ref={modal} closeFn={handleCloseModal} />
      <Form method="POST" className={style.container}>
        <p>Login & Happy Chatting</p>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging In ..." : "Login"}
        </button>
      </Form>
    </div>
  );
};

export default LoginForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const username = data.get("username");
  const password = data.get("password");

  const result = await AppServices.login(username, password);

  if (result.status === true) return redirect("/chats");
  else {
    return result.error;
  }
};

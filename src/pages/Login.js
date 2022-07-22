const Login = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="mail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="mail"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Pass" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="Pass" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;

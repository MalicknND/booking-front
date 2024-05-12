import { useContext, useState } from "react";
import styles from "./update.module.scss";
import { AuthContext } from "../../../context/AuthContext";
import apiRequest from "../../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [error, setError] = useState("");
  const { currentUser, updateCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(`/user/${currentUser.id}`, {
        username,
        email,
        password,
      });

      updateCurrentUser(res.data);
      navigate("/account/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div className={styles.update}>
      <div className={styles.formContainer}>
        <div className="mt-40 mx-auto w-1/2 flex flex-col justify-center px-6 pt-8 sm:px-24 md:justify-start md:px-8 md:pt-0 lg:px-12">
          <p className="text-center text-3xl font-bold">Modifier</p>
          {/* <p className="mt-2 text-center">Create an account</p> */}
          <form onSubmit={handleSubmit} className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
              <div className=" flex overflow-hidden rounded-lg border focus-within:border-transparent focus-within:ring-2 transition focus-within:ring-[#fece51]">
                <span className="inline-flex items-center border-r border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 2.5C8.16304 2.5 8.79893 2.76339 9.26777 3.23223C9.73661 3.70107 10 4.33696 10 5C10 5.66304 9.73661 6.29893 9.26777 6.76777C8.79893 7.23661 8.16304 7.5 7.5 7.5C6.83696 7.5 6.20107 7.23661 5.73223 6.76777C5.26339 6.29893 5 5.66304 5 5C5 4.33696 5.26339 3.70107 5.73223 3.23223C6.20107 2.76339 6.83696 2.5 7.5 2.5ZM7.5 8.75C10.2625 8.75 12.5 9.86875 12.5 11.25V12.5H2.5V11.25C2.5 9.86875 4.7375 8.75 7.5 8.75Z"
                      fill="gray"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  name="username"
                  className="w-full flex-1 appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400  focus:outline-none"
                  placeholder="Username"
                  defaultValue={currentUser.username}
                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <div className=" flex overflow-hidden rounded-lg border focus-within:border-transparent focus-within:ring-2 transition focus-within:ring-[#fece51]">
                <span className="inline-flex items-center border-r border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  className="w-full flex-1 appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400  focus:outline-none"
                  placeholder="Email"
                  defaultValue={currentUser.email}
                />
              </div>
            </div>
            <div className="mb-12 flex flex-col pt-4">
              <div className=" flex overflow-hidden rounded-lg border focus-within:border-transparent focus-within:ring-2 transition focus-within:ring-[#fece51]">
                <span className="inline-flex items-center border-r border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                  </svg>
                </span>
                <input
                  type="password"
                  name="password"
                  className="w-full flex-1 appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400  focus:outline-none"
                  placeholder="Password"
                />
              </div>
            </div>
            <button
              //   disabled={loading}
              type="submit"
              className="w-full rounded-lg bg-[#fece51] px-4 py-2 text-center text-base font-semibold text-white shadow-md transition ease-in hover:bg-[#fece51] focus:outline-none focus:ring-2"
            >
              <span className="w-full"> Modifier </span>
            </button>
            {error && <p className="text-red-500 pt-5 text-center">{error}</p>}
          </form>
        </div>
      </div>
      <div className={styles.sideContainer}>
        <img
          src={currentUser.avatar || "/images/noavatar.jpg"}
          alt="user"
          className={styles.avatar}
        />
      </div>
    </div>
  );
};

export default Update;

import React, { useState, useRef } from "react";
// import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
// import { useUser } from "../../context/UserContext";

export default function Account() {
  const fileinputRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [newPswd, setNewPswd] = useState("");
  const [currentPswd, setCurrentPswd] = useState("");

  // const defaultAvatar = "/assets/image/default-profile.png";

  // Static mock user data
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [imageURL, setImageURL] = useState(defaultAvatar);
  // const { user, setUser, fetchUserData } = useUser();

  const toggleVisibility = () => setIsVisible(!isVisible);

  // useEffect(() => {
  //   if (user) {
  //     setUsername(user.username);
  //     setEmail(user.email);
      
  //     setImageURL(user.imageURL);
  //   }
  //   const storedUser = JSON.parse(localStorage.getItem("user"));
  //   const phone = storedUser?.phoneNo || "";
  //   // console.log("Phone Number:", phone);
  //   setPhoneNumber(phone);
  //   // setPhoneNo(phone);
  // }, [user]);
    

  // const handlebuttonClick = () => {
  //   fileinputRef.current.click();
  // };

  // const handleFileinputChange = async (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;

  //   const formData = new FormData();
  //   formData.append("image", file); // 👈 Make sure backend expects "image"

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/api/user/upload", // 👈 Adjust if your route differs
  //       // `${process.env.DOMAIN}/api/user/upload`,
  //       formData,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     console.log(response.data);
  //     window.location.reload();
  //     setImageURL(response.data.url); // Show uploaded image immediately
  //   } catch (err) {
  //     console.error("❌ Upload error:", err);
  //     alert("Upload failed. Try again.");
  //   }
  // };

  // const handleSubmitChangePassword = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const token = localStorage.getItem("token");

  //     const response = await axios.post(
  //       // "http://localhost:5000/api/auth/change-password",
  //       `${process.env.DOMAIN}/api/auth/change-password`,
  //       {
  //         currentPassword: currentPswd,
  //         newPassword: newPswd,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     alert("✅ " + response.data.msg);
  //     setCurrentPswd("");
  //     setNewPswd("");
  //   } catch (error) {
  //     alert("❌ " + (error.response?.data?.msg || "Password change failed"));
  //     console.error("Change password error:", error);
  //   }
  // };

  return (
    <div className="min-h-screen w-full bg-slate-100">
      {/* Header */}
      <div className="w-full bg-white shadow py-4 px-6 mb-6">
        <h2 className="text-2xl font-semibold text-center md:text-left">
          👤 Profile
        </h2>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 pb-8 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar */}
        <div className="bg-white rounded-lg shadow p-4 hidden md:block">
          <p className="text-lg font-medium">Account</p>
        </div>

        {/* Main content */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Banner & Avatar */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-40 bg-gradient-to-r from-violet-500 to-fuchsia-500 relative">
              <div className="absolute inset-x-0 bottom-[-3rem] flex justify-center">
                <div className="bg-white w-[150px] h-[150px] rounded-full shadow-lg flex items-center justify-center overflow-hidden border-4 border-white">
                  <img
                    src={ "/assets/default-profile.png"}
                    className="rounded-full object-cover w-full h-full"
                    alt="User"
                  />
                </div>
              </div>
            </div>
            <div className="pt-20 pb-6 text-center">
              <h3 className="text-xl font-semibold">username</h3>
              <p className="text-gray-500">@username</p>
              <div className="mt-4">
                <input
                  ref={fileinputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  // onChange={handleFileinputChange}
                />
                <button
                  className="bg-black text-white font-medium py-1.5 px-6 rounded hover:bg-white hover:text-black border border-black transition"
                  // onClick={handlebuttonClick}
                >
                  Upload Image
                </button>
              </div>
            </div>
          </div>

          {/* Info + Password Change */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* General Information */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">
                General Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Username</label>
                  <input
                    type="text"
                    // value={username}
                    readOnly
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    // value={email}
                    readOnly
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone Number</label>
                  <input
                    type="text"
                    // value={phoneNumber}
                    readOnly
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Change Password */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Change Password</h3>
              <form 
                // onSubmit={handleSubmitChangePassword} 
                className="space-y-4"
              >
                <div className="relative">
                  <label className="text-sm font-medium">
                    Current Password
                  </label>
                  <input
                    type={isVisible ? "text" : "password"}
                    value={currentPswd}
                    onChange={(e) => setCurrentPswd(e.target.value)}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md text-sm pr-10"
                    required
                  />
                  <span
                    className="absolute top-[35px] right-3 cursor-pointer text-gray-500"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                  </span>
                </div>
                <div className="relative">
                  <label className="text-sm font-medium">New Password</label>
                  <input
                    type={isVisible ? "text" : "password"}
                    value={newPswd}
                    onChange={(e) => setNewPswd(e.target.value)}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md text-sm pr-10"
                    required
                  />
                  <span
                    className="absolute top-[35px] right-3 cursor-pointer text-gray-500"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition"
                >
                  Update Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

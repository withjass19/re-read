// src/schemas/validationSchema.js
import * as Yup from "yup";

export const SignUpSchema = Yup.object({
  name: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),

  email: Yup.string().email("Invalid email").required("Email is required"),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Must include at least one lowercase letter")
    .matches(/[A-Z]/, "Must include at least one uppercase letter")
    .matches(/\d/, "Must include at least one number")
    .matches(
      /[@$!%*?&#^(){}[\]\\|;:'",.<>/_+=-]/,
      "Must include at least one special character"
    )
    .required("Password is required"),
});

export const SignInSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

// Yup validation schema
export const bookSellSchema = Yup.object().shape({
  bookName: Yup.string().required("Book name is required").min(3, "At least 3 characters"),
  author: Yup.string().required("Author is required"),
  price: Yup
    .number()
    .typeError("Price must be a number")
    .required("Original price is required")
    .positive("Must be positive"),
  selling_price: Yup
    .number()
    .typeError("Selling price must be a number")
    .required("Selling price is required")
    .positive("Must be positive"),
  condition: Yup.string().required("Select condition"),
  category: Yup.string().required("Select category"),
  description: Yup.string().required("Description is required").min(10, "Minimum 10 characters"),

  // ✅ Optional but safe image check
  bookImage: Yup
    .mixed()
    .required("Book image is required")
    .test("fileType", "Unsupported File Format", (value) => {
      return value && value.length>0 && ["image/jpeg", "image/png", "image/webp", "image/jpg"].includes(value[0]?.type);
    })
    .test("fileSize", "File too large", (value) => {
      return value && value[0]?.size <= 10 * 1024 * 1024; // 10MB
    }),
});
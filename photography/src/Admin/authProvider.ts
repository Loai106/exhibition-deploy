import { AuthBindings, OnErrorResponse } from "@refinedev/core";

const authProvider: AuthBindings = {
  login: async ({ username, password }) => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("auth", "true");
      return { success: true, redirectTo: "/admin" };
    }
    return {
      success: false,
      error: new Error("Invalid credentials"),
    };
  },
  logout: async () => {
    localStorage.removeItem("auth");
    return { success: true, redirectTo: "/admin/login" };
  },
  check: async () => {
    const isAuthenticated = localStorage.getItem("auth") === "true";

    // Fix: Allow /admin/login to show without redirection
    if (!isAuthenticated && window.location.pathname !== "/admin/login") {
      return { authenticated: false, redirectTo: "/admin/login" };
    }

    return isAuthenticated ? { authenticated: true } : { authenticated: false };
  },
  getIdentity: async () => {
    if (localStorage.getItem("auth")) {
      return { id: 1, name: "Admin" };
    }
    return null;
  },
  onError: (error: any): Promise<OnErrorResponse> => {
    console.error("Authentication error:", error);
    // You can also add additional error handling logic here
    return Promise.reject({ error: "Authentication error" }); // Return a rejected promise with an error message
  },
};

export default authProvider;

export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("token")) || false,
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, args, { cache }) => {
      const { token } = args;
      localStorage.setItem("token", token);
      cache.writeData({
        data: {
          isLoggedIn: true,
        },
      });
      window.location.reload();
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("token");
      window.location = "/";
      return null;
    },
  },
};
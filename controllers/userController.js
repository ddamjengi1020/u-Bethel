import routes from "../routes";

export const getUser = (req, res) => {
  res.render("user", { pageTitle: "User" });
};

export const getUserDetail = (req, res) => {
  res.render("userDetail", { pageTitle: "Detail" });
};

export const getEditProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "Edit-profile" });
};

export const getChangePassword = (req, res) => {
  res.render("changePassword", { pageTitle: "change-password" });
};

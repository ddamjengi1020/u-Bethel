import routes from "../routes";
import { prisma } from "../generated/prisma-client";

export const getPastorHome = async (req, res) => {
  const image = await prisma.images();
  const imgLength = await image.length;
  const video = await prisma.videos();
  const vrdLength = await video.length;
  if (imgLength > 0 && vrdLength > 0) {
    const imagePath = image[imgLength - 1].file.path;
    const videoPath = video[vrdLength - 1].file.path;
    res.render("pastor", { pageTitle: "Home", imagePath, videoPath });
  } else {
    res.render("pastor", { pageTitle: "Home" });
  }
};

export const postPastorHome = async (req, res) => {
  const {
    file: { mimetype, filename },
    file: jsonFile
  } = req;
  const type = mimetype.split("/")[0];
  try {
    if (type === "image") {
      await prisma.createImage({
        name: filename,
        file: jsonFile
      });
    }
    if (type === "video") {
      await prisma.createVideo({
        title: filename,
        file: jsonFile
      });
    }
    res.status(200);
    res.redirect(routes.seniorPastor);
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

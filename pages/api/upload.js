var cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10000mb",
    },
  },
};


export default async function handler(req, res) {
  let upload_url = "";
  const fileStr = req.body.data;

  if (req.method === "POST") {
    console.log(fileStr);
    try {
      const uploadedResponse = await cloudinary.uploader.upload_large(fileStr, {
        chunk_size: 6000000,
      });
      upload_url = uploadedResponse.secure_url;
      console.log(upload_url);
    } catch (error) {
      console.log(error);
    }
    res.status(200).json({ data: upload_url });
  }
}

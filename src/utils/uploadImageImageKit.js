const imageKit = require("@imagekit/nodejs");
const ImageKit = new imageKit({
    privateKey: process.env.IMAGE_KET_KEY,
});
const uploadImageToImageKit = async (fileImg, name = "test") => {

    try {
        const file = await ImageKit.files.upload({
            file: fileImg,
            fileName: name,
            folder: "inst-clone-posts",
        });
    } catch (error) {
        console.error("something went wrong while uploading the image to image kit ", error.message)

    }
    return file
}
module.exports = uploadImageToImageKit
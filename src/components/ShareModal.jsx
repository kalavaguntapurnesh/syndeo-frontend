import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const ShareModal = ({ isVisible, onClose, id }) => {
  console.log("ID passed is", id);
  const shareUrl = `https://syndeo-frontend.vercel.app/share/${id}`;

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-20"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-20 rounded ">
          <div>
            <h1 className="text-2xl font-semibold text-colorFour mt-2 mb-2">
              Share via Social Media
            </h1>
          </div>
          <div className="grid grid-cols-6 gap-4 mt-8 ">
            <EmailShareButton
              url={shareUrl}
              quote={"Title or jo bhi aapko likhna ho"}
              hashtag={"#portfolio..."}
              className="flex justify-center items-center"
            >
              <EmailIcon size={40} round={true} />
            </EmailShareButton>
            <FacebookShareButton
              url={shareUrl}
              quote={"Title or jo bhi aapko likhna ho"}
              hashtag={"#portfolio..."}
              className="flex justify-center items-center"
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>

            <WhatsappShareButton
              url={shareUrl}
              quote={"Title or jo bhi aapko likhna ho"}
              hashtag={"#portfolio..."}
              className="flex justify-center items-center"
            >
              <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>
            <TwitterShareButton
              url={shareUrl}
              quote={"Title or jo bhi aapko likhna ho"}
              hashtag={"#portfolio..."}
              className="flex justify-center items-center"
            >
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
            <LinkedinShareButton
              url={shareUrl}
              quote={"Title or jo bhi aapko likhna ho"}
              hashtag={"#portfolio..."}
              className="flex justify-center items-center"
            >
              <LinkedinIcon size={40} round={true} />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;

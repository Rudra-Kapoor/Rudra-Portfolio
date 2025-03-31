import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/rudra-kapoor-86b0412ab/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Rudra-Kapoor" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/rudraa_kapoor/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;

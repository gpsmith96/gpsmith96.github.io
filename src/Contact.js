import "bootstrap/dist/css/bootstrap.min.css";
import data from "./Data";
import Button from "./Button";

function Contact(props) {
  return (
    <div
      className="overflow-hidden cursor-pointer rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0">
      <h1>Contact</h1>

      <div className="laptop:mt-20 mob:mt-10">
        {data.socials.map((social, index) => 
          <Button key={index} onClick={() => window.open(social.link)}>
            {social.title}
          </Button>
          )}
      </div>
    </div>
  );
}

export default Contact;

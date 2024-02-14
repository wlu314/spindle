import Link from "next/link";


const social_links = [
  {
    link: "https://www.facebook.com/themepure.net",
    target: "_blank",
    icon: "fab fa-facebook-f", 
  },
  {
    link: "https://twitter.com/themepure_net",
    target: "_blank",
    icon: "fab fa-twitter", 
  },  
  {
    link: "https://www.behance.com",
    target: "_blank",
    icon: "fab fa-behance", 
  }, 
  {
    link: "https://www.linkedin.com/in/theme-pure-2a276518b/?originalSubdomain=bd",
    target: "_blank",
    icon: "fab fa-linkedin-in", 
  }, 
  {
    link: "https://www.youtube.com/@themepure",
    target: "_blank",
    icon: "fab fa-youtube", 
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <a
          key={i}
          href={l.link} 
          target={l.target ? l.target : ""}
        >
          <i className={l.icon}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;






const copy_right_text = { 
  copy_right: <>Copyright © {new Date().getFullYear()} piohost by <a href="https://themeforest.net/user/theme_pure/portfolio" target="_blank">ThemePure</a>. All Rights Reserved.</>,
}
const {copy_right}  = copy_right_text

export const CopyRight = ()  => {
  return (
    <>
    {copy_right}
    </>
  )
}




// home 04 social link
const social_links_two = [
  {
    link: "https://www.facebook.com/themepure.net",
    target: "_blank",
    icon: "fab fa-facebook-f",
    color: "1", 
  },
  {
      link: "https://www.instagram.com",
      target: "_blank",
      icon: "fab fa-instagram", 
      color: "2",
  },

  {
    link: "https://twitter.com/themepure_net",
    target: "_blank",
    icon: "fab fa-twitter", 
    color: "3",
  },
  {
    link: "https://www.linkedin.com/in/theme-pure-2a276518b/?originalSubdomain=bd",
    target: "_blank",
    icon: "fab fa-linkedin-in",
    color: "4", 
  }, 
];

export const  SocialLinksTwo = ()  => {
   return (
     <>
        {social_links_two.map((link, i) => (
          <Link
            key={i}
            target={link.target}
            className={`icon-color-${link.color}`}
            href={link.link}
          >
            <i className={link.icon}></i>
            <span></span>
          </Link>
        ))}
     </>
   );
}
const navLinks = {
  middle: [
    {
      id: 1,
      label: "About Us",
      url: "/aboutus",
    },
    {
      id: 2,
      label: "Our Work",
      url: "/ourwork",
      dialog: [
        { id: 1, title: "Volunteering", path: "/" },
        { id: 2, title: "Youth Corner", path: "/" },
        { id: 3, title: "Internship", path: "/" },
      ],
    },
    {
      id: 3,
      label: "Events",
      url: "/events",
    },
    {
      id: 4,
      label: "Contact Us",
      url: "/contactus",
      dialog: [
        { id: 1, title: "Get in touch", path: "/" },
        { id: 2, title: "FAQs", path: "/" },
      ],
    },
  ],

  right: [],
};

export default navLinks;

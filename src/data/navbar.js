const navLinks = {
  middle: [
    {
      id: 1,
      label: "About Us",
      url: "/aboutus",
      dialog: [
        { id: 1, title: "who we are ", path: "/" },
        { id: 2, title: "what do we do", path: "/" },
        { id: 3, title: "meet our team", path: "/" },
      ],
    },
    {
      id: 2,
      label: "Our Work",
      url: "/ourwork",
      dialog: [
        { id: 1, title: "map location ", path: "/" },
        { id: 2, title: "gallery", path: "/ourwork" },
        {
          id: 3,
          title: "Past events",
          path: "/ourwork/events",
        },
        { id: 4, title: "Upcoming events", path: "/" },
      ],
    },
    {
      id: 3,
      label: "Join us",
      url: "/joinus",
      dialog: [
        { id: 1, title: "volunteering  ", path: "/" },
        { id: 2, title: "internship", path: "/" },
        { id: 3, title: "youth corner ", path: "/" },
        { id: 4, title: "blogs", path: "/" },
      ],
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

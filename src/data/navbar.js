const navLinks = {
  middle: [
    {
      id: 1,
      label: "About Us",
      url: "/aboutus",
      dialog: [
        { id: 1, title: "who we are ", path: "aboutus/#who-we-are" },
        { id: 2, title: "what do we do", path: "aboutus/#what-we-do" },
        { id: 3, title: "meet our team", path: "aboutus/#meet-our-team" },
      ],
    },
    {
      id: 2,
      label: "Our Work",
      url: "/",
      dialog: [
        { id: 1, title: "our chapters ", path: "/ourwork/ourchapters" },
        { id: 2, title: "gallery", path: "/ourwork/gallery" },
        {
          id: 3,
          title: "Past events",
          path: "/ourwork/events",
        },
        { id: 4, title: "Upcoming events", path: "/ourwork/upcomingevents" },
      ],
    },
    {
      id: 3,
      label: "Join us",
      url: "/",
      dialog: [
        { id: 1, title: "volunteering  ", path: "/joinus/volunteering" },
        { id: 2, title: "internship", path: "/joinus/internship" },
        { id: 3, title: "blogs", path: "/joinus/blogs" },
      ],
    },
    {
      id: 4,
      label: "Contact Us",
      url: "/contactus",
      dialog: [
        {
          id: 1,
          title: "Map Location",
          path: "/contactus/map",
        },
        { id: 2, title: "FAQs", path: "/contactus/faqss" },
      ],
    },
  ],

  right: [],
};

export default navLinks;

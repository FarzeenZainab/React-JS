const parentArray = [
  {
    slug: "dashboard",
    label: "Dashboard & Reporting",
    icon: "icon-chart",
    isShow: true,
  },
  {
    // Currently all slug is dummy
    slug: "community-index",
    label: "Terms",
    icon: "icon-terms",
    isShow: true,
    children: [
      {
        slug: "terms",
        label: "Students Involved",
        parent: "community-index",
        isShow: true,
      },
      {
        slug: "terms",
        label: "Community",
        parent: "community-index",
        isShow: true,
      },
    ],
  },
];

parentArray.map((item) => {
  const children = item.children;

  if (children !== undefined) {
    children.map((child) => {
      if (child.parent === item.slug) {
        console.log("add active class");
      }
    });
  }
});

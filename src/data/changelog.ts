export type ChangelogEntry = {
  key: number;
  title: string;
  date: string;
  changes: {
    type: "Developing" | "Completed";
    description: string;
  };
  author: string;
};

export const WorkingLog: ChangelogEntry[] = [
  {
    key: 1,
    title: "Admin Dashboard",
    date: "Sep 05, 2025",
    changes: {
      type: "Developing",
      description: "This is for something",
    },
    author: "Quaid Codes",
  },
];

export const Completed: ChangelogEntry[] = [
  {
    key: 2,
    title: "Portfolio",
    date: "Aug 18, 2025",
    changes: {
      type: "Completed",
      description: "This is for something",
    },
    author: "Quaid Codes",
  },
]
export default function x(req, res) {
  const data = [
    {
      id: 1,
      authors: "William Gibbson",
      title: "Neuromante",
    },
    {
      id: 2,
      authors: "Bruce Sterling",
      title: "Islas de la Red",
    },
  ];

  if (req.method.toUpperCase() === "GET") {
    return res.status(200).json(data);
  }
}

function home(req, res) {
  res.render("index", { title: "Express" });
}

export default { home };

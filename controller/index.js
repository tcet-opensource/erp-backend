function home(req, res) {
  res.render("public/index.html", { title: "Express" });
}

export default { home };

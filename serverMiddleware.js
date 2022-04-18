export default (req, res, next) => {
  if (req.url.includes("/about")) {
    //res.status(301).redirect("/");
    res.writeHead(301, { location: "/" });
    res.end();
  } else if (req.url.includes("/test")) {
    res.writeHeader(200, { "Content-type": "application/json" });
    const json = JSON.stringify({
      name: "Nguyen Van A",
      age: "20",
    });
    res.end(json);
  } else {
    next();
  }
};

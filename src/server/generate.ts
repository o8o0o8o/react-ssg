import fs from "node:fs";
import renderer from "./renderer";

const routesToPrerender = fs.readdirSync("src/pages").map((file) => {
  const name = file.replace(/\.tsx$/, "").toLowerCase();

  return name === "home" ? `/` : `/${name}`;
});

(async () => {
  for (const url of routesToPrerender) {
    const appHtml = renderer({ url });

    try {
      fs.mkdirSync(`dist/static`);
    } catch (error) {}

    const filePath = `dist/static${url === "/" ? "/index" : url}.html`;

    fs.writeFileSync(filePath, appHtml);
  }
})();

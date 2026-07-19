document.addEventListener("DOMContentLoaded", async () => {
  const targets = Array.from(document.querySelectorAll(".case-study-image"));
  if (!targets.length) return;

  try {
    const response = await fetch("cmm-fixture-case-study.html", { cache: "force-cache" });
    if (!response.ok) throw new Error(`Unable to load case study: ${response.status}`);

    const html = await response.text();
    const documentCopy = new DOMParser().parseFromString(html, "text/html");
    const sourceImages = Array.from(
      documentCopy.querySelectorAll(".case-hero img, .case-gallery img")
    ).filter((image) => image.getAttribute("src"));

    if (!sourceImages.length) throw new Error("No fixture images found in case study");

    targets.forEach((target) => {
      const requestedIndex = Number.parseInt(target.dataset.imageIndex || "0", 10);
      const source = sourceImages[requestedIndex] || sourceImages[0];
      target.src = source.getAttribute("src");
    });
  } catch (error) {
    console.error("Could not load the original fixture images.", error);
    targets.forEach((target) => target.remove());
  }
});

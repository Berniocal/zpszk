// bible-loader.js — jednoduché načítání kapitol z GitHub Pages
// Příklad: await getBibleText("CSP", "JHN", 3, 16, 18)

async function getBibleChapter(translation, bookCode, chapter) {
  const url = `./bible/${translation}/${bookCode}/${chapter}.json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Kapitolu se nepodařilo načíst: ${url}`);
  return await res.json();
}

async function getBibleText(translation, bookCode, chapter, verseFrom, verseTo = verseFrom) {
  const data = await getBibleChapter(translation, bookCode, chapter);
  const parts = [];
  for (let v = verseFrom; v <= verseTo; v++) {
    if (data.verses[String(v)]) parts.push(`${v}. ${data.verses[String(v)]}`);
  }
  return {
    reference: `${data.book_abbr} ${chapter},${verseFrom}${verseTo !== verseFrom ? "–" + verseTo : ""}`,
    text: parts.join(" "),
    copyright: data.copyright
  };
}

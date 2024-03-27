import chapters from "./chapters.json";

export const getChapters = () => {
    return chapters;
};

export const getChapter = (chapterNr) => {
    const formatParam = typeof chapterNr === "number" ? chapterNr : Number(chapterNr);

    if (isNaN(formatParam)) {
        throw new Error(
            `Invalid Parameter: type of 'chapterNr' param from getChapter() must be number`
        );
    }

    return chapters.find((chap) => chap.chapterNr === formatParam);
};

export const getChaptersLength = () => {
    return chapters.length;
};